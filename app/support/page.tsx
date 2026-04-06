"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

// create a support page with a form. When you submit, fire a supabase edge function.
// the support form should have a contact email, subject and message field.
export default function SupportPage() {
    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
            <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-white-500">Liftie Support</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white-900 sm:text-4xl">
                    How can we help?
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-sm text-white-600 sm:text-base">
                    Share what is happening and we will get back to you as soon as we can.
                </p>
            </div>
            <SupportForm />
            <div className="mx-auto mt-5 w-full max-w-xl text-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                    Back home
                </Link>
            </div>
        </div>
    );
}

function SupportForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatusMessage("");
        setStatusType(null);
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const contactEmail = String(formData.get("email") ?? "");
        const subject = String(formData.get("subject") ?? "");
        const text = String(formData.get("message") ?? "");
        const website = String(formData.get("website") ?? "").trim();

        if (website) {
            setIsSubmitting(false);
            return;
        }

        const supabase = createClient();
        const { error } = await supabase.functions.invoke("support-ticket", {
            body: { contactEmail, subject, text },
        });

        if (error) {
            setStatusType("error");
            setStatusMessage("Unable to submit your request right now. Please try again.");
            setIsSubmitting(false);
            return;
        }

        setStatusType("success");
        setStatusMessage("Support request sent. We will get back to you soon.");
        form.reset();
        setIsSubmitting(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 w-full max-w-xl space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="subject">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What can we help with?"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's going on..."
                    rows={6}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {statusMessage ? (
                <p className={`text-sm ${statusType === "error" ? "text-red-600" : "text-emerald-600"}`}>
                    {statusMessage}
                </p>
            ) : null}
        </form>
    );
}