"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

export type WaitlistStatus = "idle" | "submitting" | "success" | "error";

export interface WaitlistFormData {
  email: string;
  name?: string;
}

const DEFAULT_FORM_DATA: WaitlistFormData = {
  email: "",
  name: "",
};

export function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>(DEFAULT_FORM_DATA);
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = formData.email?.trim();
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const supabase = createClient();

    const { error } = await supabase.from("waitlist").insert({
      email,
      name: formData.name?.trim() || null,
    });

    if (error) {
      setStatus("error");
      if (error.code === "23505") {
        setErrorMessage("This email is already on the waitlist.")
      } else {
        setErrorMessage(
          error.message || "Something went wrong. Please try again."
        );
      }
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <Card className="w-full max-w-md mx-auto border-primary/30 bg-primary/5 shadow-lg shadow-primary/5">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/15 p-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="font-heading font-semibold text-foreground">
              You&apos;re on the list
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            We&apos;ll notify you when Liftie is ready. Thanks for your interest!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg shadow-black/5 dark:shadow-none border-border/60 bg-card/95 backdrop-blur-sm">
      <CardHeader className="space-y-1.5 pb-2">
        <CardTitle className="font-heading font-semibold text-foreground text-lg">
          Join the waitlist
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Get early access when Liftie launches. No spam, just one update.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div
              role="alert"
              className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
            >
              {errorMessage}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="waitlist-email" className="text-foreground/90">
              Email *
            </Label>
            <Input
              id="waitlist-email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              disabled={status === "submitting"}
              autoComplete="email"
              required
              className="h-10 rounded-lg border-border/80 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="waitlist-name" className="text-foreground/90">
              Name (optional)
            </Label>
            <Input
              id="waitlist-name"
              type="text"
              placeholder="Your name"
              value={formData.name ?? ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              disabled={status === "submitting"}
              autoComplete="name"
              className="h-10 rounded-lg border-border/80 focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-11 rounded-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground focus-visible:ring-primary"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Join waitlist"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
