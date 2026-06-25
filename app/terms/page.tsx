import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StoutMap — Terms of Use",
  description: "Terms of use for the StoutMap iOS app by StoutLab.",
};

const updated = "June 25, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-foreground">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← StoutLab
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">StoutMap — Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-xl font-medium">About StoutMap</h2>
          <p className="mt-2">
            StoutMap is an informational map that shows venues (bars, pubs,
            breweries and similar) and drink prices gathered from publicly
            available menus. It is provided by StoutLab.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Prices are informational</h2>
          <p className="mt-2">
            Prices shown in StoutMap come from public sources and may be
            inaccurate or out of date. They are provided for information only and
            are not an offer. <strong>Always verify the final price with the
            venue.</strong> StoutLab does not guarantee prices, availability, or
            the accuracy of any listing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Responsible use · 18+</h2>
          <p className="mt-2">
            StoutMap is intended for users 18 years or older. StoutMap does not
            sell alcohol and does not promote excessive consumption. Please drink
            responsibly and follow the laws of your location.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Accounts</h2>
          <p className="mt-2">
            Creating an account is optional. You are responsible for keeping your
            credentials secure. You can delete your account at any time from
            within the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Limitation of liability</h2>
          <p className="mt-2">
            StoutMap is provided &ldquo;as is&rdquo;. To the maximum extent
            permitted by law, StoutLab is not liable for any decisions made based
            on the information shown in the app.
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
      </div>
    </main>
  );
}
