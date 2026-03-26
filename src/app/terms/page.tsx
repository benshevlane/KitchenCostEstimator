import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | KitchenCostEstimator',
  description: 'Terms of service for KitchenCostEstimator.com.',
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-dark sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mid">
          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using KitchenCostEstimator.com (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Service Description</h2>
            <p>
              KitchenCostEstimator.com provides a free online kitchen renovation cost calculator and related informational content (blog posts, guides). The tool generates estimated cost ranges based on publicly available pricing data and user-provided inputs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Disclaimer of Accuracy</h2>
            <p>
              The cost estimates provided by this tool are for informational and planning purposes only. They are based on average pricing data from publicly available sources and should not be treated as quotes, guarantees, or professional advice. Actual renovation costs will vary depending on your location, chosen materials, contractor rates, site conditions, and other factors.
            </p>
            <p className="mt-2">
              Always obtain multiple quotes from qualified professionals before committing to any renovation project.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Intellectual Property</h2>
            <p>
              All content on this Site, including text, graphics, logos, and software, is the property of KitchenCostEstimator.com or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">External Links</h2>
            <p>
              The Site may contain links to third-party websites (e.g., FreeRoomPlanner.com). We are not responsible for the content, accuracy, or practices of these external sites. Visiting linked sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, KitchenCostEstimator.com and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or reliance on any information provided. The Site is provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">User Conduct</h2>
            <p>
              You agree not to misuse the Site, including but not limited to: attempting to access restricted areas, interfering with site functionality, or using automated tools to scrape content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the Site after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of the Site shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-2">Contact</h2>
            <p>
              If you have questions about these terms, please reach out via the contact information on our website.
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
