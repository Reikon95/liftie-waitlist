import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">


      {/* Hero */}
      <section className="px-4 sm:px-8 pt-12 sm:pt-24 pb-16 sm:pb-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-heading font-bold text-4xl sm:text-6xl tracking-tight text-foreground leading-[1.1]">
            Liftie.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The iOS app that makes lifting something you'll stick to. Coming soon.
          </p>
          <div
            className="w-full max-w-[280px] mx-auto aspect-[9/19] sm:max-w-[300px] rounded-[1.5rem] sm:rounded-[2rem] bg-muted border border-border/60 flex items-center justify-center overflow-hidden shadow-xl"
            aria-hidden
          >
            <span className="text-muted-foreground/70 text-sm font-medium">
              Hero image
              <Image src="https://nuuhkrrfvunxacxqpazn.supabase.co/storage/v1/object/public/screenshots/dashboard.PNG" width={280} height={360} alt="Liftie hero" className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem]" />
            </span>
          </div>
        </div>
      </section>

      {/* What Liftie does & why it's different */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 lg:py-28 border-t border-border/50">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              What Liftie does
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Liftie finds the perfect program for you and yours goals, and helps you track your progress in a fun and engaging way. Weightlifting doesn't have to be intimidating, and with Liftie it can be serious or as casual as you want it to be.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Why it&apos;s different
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Most apps are focused on tracking individual workouts, which is great, but Liftie goes up a step further by finding the perfect program for you, allowing you to easily track your workouts and progress. By making lifting a part of your schedule, it makes it a habit that you'll stick to.
            </p>
          </div>
        </div>
      </section>

      {/* App screenshots */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 lg:py-28 bg-[hsl(var(--screenshot-bg))] overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="font-heading font-semibold text-center text-sm uppercase tracking-wider text-muted-foreground mb-10 sm:mb-14">
            See it in action
          </p>
          <div className="flex flex-wrap justify-center items-end gap-8 sm:gap-12 lg:gap-20 xl:gap-24">
            <div
              className="w-[160px] sm:w-[200px] lg:w-[260px] flex-shrink-0 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-muted/60 border border-border/60"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", aspectRatio: "260/564" }}
            >
              <Image
                src="https://nuuhkrrfvunxacxqpazn.supabase.co/storage/v1/object/public/screenshots/recommend.PNG"
                width={260}
                height={564}
                alt=" program in Liftie"
                className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] shadow-xl"
              />
            </div>
            <div
              className="w-[160px] sm:w-[200px] lg:w-[260px] flex-shrink-0 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-muted/60 border border-border/60 lg:translate-y-4"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", aspectRatio: "260/564" }}
            >
              <Image
                src="https://nuuhkrrfvunxacxqpazn.supabase.co/storage/v1/object/public/screenshots/progress.PNG"
                width={260}
                height={564}
                alt="Liftie dashboard"
                className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] shadow-xl"
              />
            </div>
            <div
              className="w-[160px] sm:w-[200px] lg:w-[260px] flex-shrink-0 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-muted/60 border border-border/60 lg:translate-y-8"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", aspectRatio: "260/564" }}
            >
              <Image
                src="https://nuuhkrrfvunxacxqpazn.supabase.co/storage/v1/object/public/screenshots/workout.png"
                width={260}
                height={564}
                alt="Workout in Liftie"
                className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 lg:py-28 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
            Get on the list
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We&apos;ll let you know when Liftie is ready.
          </p>
          <div className="pt-2">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-border/50 py-6 sm:py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center text-sm text-muted-foreground">
          <p>Liftie is coming to the App Store soon.</p>
          <p>
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
