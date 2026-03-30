import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | KitchenCostEstimator',
  description:
    'KitchenCostEstimator.com Privacy Policy — find out what data we collect when you use our kitchen cost calculator, how we use it, and your rights under GDPR and CCPA.',
  openGraph: {
    title: 'Privacy Policy | KitchenCostEstimator',
    description:
      'KitchenCostEstimator.com Privacy Policy — how we handle your data.',
    url: 'https://www.kitchencostestimator.com/privacy',
    siteName: 'KitchenCostEstimator',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | KitchenCostEstimator',
    description:
      'KitchenCostEstimator.com Privacy Policy — how we handle your data.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-lg font-bold text-dark">
            KitchenCostEstimator
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              Calculator
            </a>
            <a
              href="/blog"
              className="text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6">
        <h1 className="text-3xl font-bold text-dark sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mid">
          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Overview</h2>
            <p>
              KitchenCostEstimator.com (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a free online kitchen renovation cost calculator.
              We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Data We Collect</h2>
            <p className="mb-2">We collect minimal data to provide our service:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Calculator inputs:</strong> Kitchen size, material choices, and preferences you enter into the estimator. These are processed in your browser and are not stored on our servers.</li>
              <li><strong>Cookies:</strong> We use a single cookie (<code>kce-locale</code>) to remember your selected region (UK, US, or Canada). No tracking cookies are used.</li>
              <li><strong>Analytics:</strong> We may use privacy-friendly analytics to understand how visitors use the site (e.g., page views, general geographic region). No personally identifiable information is collected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">What We Do Not Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not collect your name, email address, or any personal contact information.</li>
              <li>We do not require you to create an account.</li>
              <li>We do not sell, share, or trade any user data with third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Third-Party Services</h2>
            <p>
              Our site may contain links to external services such as FreeRoomPlanner.com. These third-party sites have their own privacy policies, and we are not responsible for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Data Security</h2>
            <p>
              All calculator processing happens client-side in your browser. We use HTTPS encryption for all connections to our site. We do not store your cost estimates or calculator inputs on any server.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Your Rights</h2>
            <p>
              Since we do not collect personal data, there is generally no personal data for us to delete or provide. If you have any concerns about your data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Contact</h2>
            <p>
              If you have questions about this privacy policy, please reach out via the contact information on our website.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-muted">
        <div className="mx-auto max-w-6xl px-4">
          <p>&copy; {new Date().getFullYear()} KitchenCostEstimator.com</p>
        </div>
      </footer>
    </>
  );
}
