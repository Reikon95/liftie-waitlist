import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">


      {/* Hero */}
      <section className="px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-heading font-bold text-4xl sm:text-6xl tracking-tight text-foreground leading-[1.1]">
            Lift smarter.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The iOS app that helps you train better. Coming soon. Get on the
            list and we&apos;ll let you know when it&apos;s ready.
          </p>
          <div className="pt-4">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* App screenshots – add images to /public/screenshots/ then use:
          <Image src="/screenshots/screen1.png" width={260} height={564} alt="Liftie app" className="rounded-[2rem] shadow-xl" />
      */}
      <section className="px-5 sm:px-8 py-20 sm:py-28 bg-[hsl(var(--screenshot-bg))]">
        <div className="max-w-5xl mx-auto">
          <p className="font-heading font-semibold text-center text-sm uppercase tracking-wider text-muted-foreground mb-12">
            See it in action
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-end">
            {/* Add your screenshots to /public/screenshots/ and use next/image like:
                <Image src="/screenshots/screen1.png" width={260} height={564} alt="..." className="rounded-[2rem] shadow-xl" />
            */}
            <div
              className="w-[260px] h-[564px] rounded-[2rem] bg-muted/60 border border-border/60 flex items-center justify-center text-muted-foreground text-sm"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            >
              <span className="text-center px-4">
                Screenshot 1
                <br />
                <span className="text-xs">(add to /public/screenshots/)</span>
              </span>
            </div>
            <div
              className="w-[260px] h-[564px] rounded-[2rem] bg-muted/60 border border-border/60 flex items-center justify-center text-muted-foreground text-sm mt-8 sm:mt-12"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            >
              <span className="text-center px-4">
                Screenshot 2
                <br />
                <span className="text-xs">(add to /public/screenshots/)</span>
              </span>
            </div>
            <div
              className="w-[260px] h-[564px] rounded-[2rem] bg-muted/60 border border-border/60 flex items-center justify-center text-muted-foreground text-sm"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            >
              <span className="text-center px-4">
                Screenshot 3
                <br />
                <span className="text-xs">(add to /public/screenshots/)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-border/50 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center text-sm text-muted-foreground">
          <p>Liftie is coming to the App Store soon.</p>
        </div>
      </footer>
    </main>
  );
}
