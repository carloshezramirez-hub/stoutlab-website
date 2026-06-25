import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StoutMap — Privacy Policy",
  description:
    "Privacy policy for the StoutMap iOS app by StoutLab: what data we collect, why, and how to delete your account.",
};

const updated = "June 25, 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-foreground">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← StoutLab
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">StoutMap — Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-foreground/90">
        <p>
          StoutMap (&ldquo;the app&rdquo;) is operated by StoutLab
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what data we
          collect, why, and your choices. StoutMap is an informational map of
          venues and drink prices sourced from public menus. We do not sell
          alcohol and we do not sell your personal data.
        </p>

        <section>
          <h2 className="text-xl font-medium">Data we collect</h2>
          <p className="mt-2 font-medium">If you create an account (optional):</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Email address</li>
            <li>First and last name</li>
            <li>Communication preference (whether you agreed to receive updates)</li>
          </ul>
          <p className="mt-2">
            This is stored in our backend (Google Firebase) and is used only to
            provide the account and the app&rsquo;s features.
          </p>

          <p className="mt-4 font-medium">Location (only while using the app):</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              With your permission, we use your approximate location to center the
              map near you and to sort venues by distance.
            </li>
            <li>
              Your location is processed on your device for these purposes and is
              <strong> not stored on our servers or shared</strong>.
            </li>
          </ul>

          <p className="mt-4 font-medium">Usage and diagnostics (automatic):</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              We use Firebase Analytics (usage metrics) and Firebase Crashlytics
              (crash diagnostics) to understand app usage and improve stability.
            </li>
          </ul>
          <p className="mt-2">
            We do <strong>not</strong> use your data for third-party advertising
            or cross-app tracking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">How we use data</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>To provide and operate the app (accounts, map, prices).</li>
            <li>To improve performance and fix crashes.</li>
            <li>To communicate with you only if you opted in.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium">Service providers</h2>
          <p className="mt-2">
            We use Google Firebase (Authentication, Cloud Firestore, Analytics,
            Crashlytics) as our data processor. Their handling of data is governed
            by Google&rsquo;s privacy terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Data retention and deletion</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              You can <strong>delete your account at any time</strong> from within
              the app: open the account menu → Settings → Delete account → confirm
              (re-authentication required). This removes your account and
              associated profile data.
            </li>
            <li>You may also contact us to request deletion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium">Age</h2>
          <p className="mt-2">
            StoutMap is intended for users <strong>18 years or older</strong>.
            Prices shown are informational and come from public menus; always
            verify the final price with the venue. Please drink responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Your rights</h2>
          <p className="mt-2">
            Depending on your region, you may have rights to access, correct, or
            delete your personal data. Contact us to exercise them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-2">
            StoutLab —{" "}
            <a
              className="text-primary underline"
              href="mailto:carloshezramirez@gmail.com"
            >
              carloshezramirez@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Changes</h2>
          <p className="mt-2">
            We may update this policy. Material changes will be reflected by
            updating the date above.
          </p>
        </section>
      </div>
    </main>
  );
}
