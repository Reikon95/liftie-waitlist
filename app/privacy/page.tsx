import Link from "next/link";

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
    return (
        <section style={{ marginBottom: "2rem" }}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default function PrivacyPolicy() {
    return (
        <main
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "2rem 1rem",
                lineHeight: 1.6,
            }}
        >
            <h1>Privacy Policy for Liftie</h1>
            <p>
                <strong>Effective Date:</strong> 6 April 2026
            </p>

            <p>
                Liftie (&ldquo;Liftie,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains
                how we collect, use, disclose, and protect information when you use the
                Liftie mobile application and any related services (collectively, the
                &ldquo;Service&rdquo;).
            </p>

            <p>
                By using Liftie, you agree to the collection and use of information in
                accordance with this Privacy Policy.
            </p>

            <Section title="1. Information We Collect">
                <h3>a. Information You Provide to Us</h3>
                <p>
                    You may provide information directly to us when using Liftie,
                    including:
                </p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Account login details</li>
                    <li>Workout programs you select</li>
                    <li>Workout schedules</li>
                    <li>Exercise logs and training history</li>
                    <li>Notes, preferences, and other content you choose to enter</li>
                </ul>

                <h3>b. Fitness and Activity Information</h3>
                <p>
                    Liftie may collect information you enter related to your fitness
                    activity, such as:
                </p>
                <ul>
                    <li>Workout history</li>
                    <li>Completed exercises</li>
                    <li>Sets, reps, and weights</li>
                    <li>Training frequency</li>
                    <li>Goals and progress data</li>
                </ul>
                <p>
                    If Liftie integrates with Apple Health, Google Fit, or similar
                    services, we may collect data from those services only with your
                    permission.
                </p>

                <h3>c. Automatically Collected Information</h3>
                <p>
                    When you use the Service, we may automatically collect certain
                    technical information, such as:
                </p>
                <ul>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>App version</li>
                    <li>IP address</li>
                    <li>Crash data</li>
                    <li>Usage data and analytics</li>
                </ul>
            </Section>

            <Section title="2. How We Use Your Information">
                <p>We may use the information we collect to:</p>
                <ul>
                    <li>Provide, operate, and maintain Liftie</li>
                    <li>Help you select and follow weightlifting programs</li>
                    <li>Schedule and track workouts</li>
                    <li>Save your workout history and progress</li>
                    <li>Personalize your experience</li>
                    <li>Improve app performance, features, and user experience</li>
                    <li>Monitor usage and fix technical issues</li>
                    <li>Respond to support requests</li>
                    <li>Comply with legal obligations</li>
                </ul>
            </Section>

            <Section title="3. How We Share Information">
                <p>We do not sell your personal information.</p>
                <p>We may share information in the following circumstances:</p>
                <ul>
                    <li>
                        With service providers who help us operate the app, such as cloud
                        hosting, analytics, and customer support providers
                    </li>
                    <li>
                        If required by law, regulation, legal process, or government request
                    </li>
                    <li>To protect our rights, users, or the public</li>
                    <li>
                        In connection with a merger, acquisition, financing, or sale of
                        company assets
                    </li>
                </ul>
            </Section>

            <Section title="4. Data Storage and Retention">
                <p>
                    We retain your information for as long as necessary to provide the
                    Service, comply with legal obligations, resolve disputes, and enforce
                    our agreements.
                </p>
                <p>
                    If you request deletion of your account or data, we will take
                    reasonable steps to delete your information, unless we are required to
                    keep it by law.
                </p>
            </Section>

            <Section title="5. Your Choices and Rights">
                <p>
                    Depending on your location, you may have certain rights regarding your
                    personal information, including the right to:
                </p>
                <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Object to certain uses of your information</li>
                </ul>
                <p>
                    You may also manage app permissions through your device settings,
                    including permissions related to fitness data or notifications.
                </p>
                <p>
                    To make a privacy-related request, contact us at:
                    {" "}
                    <a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>
                </p>
            </Section>

            <Section title="6. Third-Party Services">
                <p>
                    Liftie may use third-party services for analytics, hosting, error
                    reporting, payments, or other app functionality. These third parties
                    may collect information in accordance with their own privacy policies.
                </p>
                <p>Examples may include:</p>
                <ul>
                    <li>Apple App Store / Google Play</li>
                    <li>Supabase</li>
                    <li>RevenueCat</li>
                    <li>Analytics providers</li>
                    <li>Cloud hosting providers</li>
                </ul>
                <p>
                    Please review the privacy policies of any third-party services you use
                    in connection with Liftie.
                </p>
            </Section>

            <Section title="7. Health and Fitness Data">
                <p>
                    If Liftie accesses health or fitness-related data, we will do so only
                    with your permission and only for the purpose of providing app
                    functionality.
                </p>
                <p>
                    We do not use health data for advertising purposes, and we do not
                    share health data with third parties except as necessary to provide
                    the Service or as required by law.
                </p>
            </Section>

            <Section title="8. Data Security">
                <p>
                    We use reasonable administrative, technical, and organizational
                    measures to protect your information. However, no method of
                    transmission over the internet or electronic storage is completely
                    secure, and we cannot guarantee absolute security.
                </p>
            </Section>

            <Section title="9. Children’s Privacy">
                <p>
                    Liftie is not directed to children under the age of 13, or the minimum
                    age required in your jurisdiction. We do not knowingly collect
                    personal information from children. If we learn that we have collected
                    personal information from a child without appropriate consent, we will
                    delete it.
                </p>
            </Section>

            <Section title="10. International Data Transfers">
                <p>
                    Your information may be processed and stored in countries other than
                    your own. By using Liftie, you understand that your information may be
                    transferred to and processed in countries that may have different data
                    protection laws.
                </p>
            </Section>

            <Section title="11. Changes to This Privacy Policy">
                <p>
                    We may update this Privacy Policy from time to time. If we make
                    changes, we will update the &ldquo;Effective Date&rdquo; above. Your
                    continued use of Liftie after changes become effective means you
                    accept the revised Privacy Policy.
                </p>
            </Section>

            <Section title="12. Contact Us">
                <p>
                    If you have any questions about this Privacy Policy or our privacy
                    practices, you can contact us on this page - <Link href="/support" className="underline">Support</Link>
                </p>

            </Section>
        </main>
    );
}