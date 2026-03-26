import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/content/blog';
import BlogCard from '@/components/BlogCard';
import RegionSwitcher from '@/components/RegionSwitcher';

const BASE_URL = 'https://kitchencostestimator.com';

export const metadata: Metadata = {
  title: 'Kitchen Renovation Blog — Tips, Costs & Guides | KitchenCostEstimator',
  description:
    'Expert kitchen renovation articles covering costs, budgeting tips, design trends, and practical guides for UK, US, and Canadian homeowners.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: 'Kitchen Renovation Blog — Tips, Costs & Guides',
    description:
      'Expert kitchen renovation articles covering costs, budgeting tips, design trends, and practical guides.',
    url: `${BASE_URL}/blog`,
    siteName: 'KitchenCostEstimator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Renovation Blog — Tips, Costs & Guides',
    description:
      'Expert kitchen renovation articles covering costs, budgeting tips, design trends, and practical guides.',
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'KitchenCostEstimator Blog',
    description:
      'Expert kitchen renovation articles covering costs, budgeting tips, design trends, and practical guides.',
    url: `${BASE_URL}/blog`,
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

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
            <a href="/blog" className="text-sm font-medium text-teal-primary">
              Blog
            </a>
            <a
              href="/guides"
              className="hidden text-sm font-medium text-mid transition-colors hover:text-teal-primary sm:block"
            >
              Guides
            </a>
            <RegionSwitcher />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 pt-8 pb-16 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-muted">
            <li>
              <a href="/" className="hover:text-teal-primary transition-colors">
                Home
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-300">/</span>
              <span className="text-dark font-medium">Blog</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-dark sm:text-4xl">Kitchen Renovation Blog</h1>
        <p className="mt-3 text-lg text-muted">
          Expert articles on kitchen costs, budgeting tips, design trends, and practical renovation
          guides.
        </p>

        {/* Posts Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-8 text-center">
            <p className="text-muted">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-xl bg-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Estimate Your Kitchen Cost?
          </h2>
          <p className="text-gray-300 mb-6">
            Get a personalised cost breakdown in under 2 minutes.
          </p>
          <a
            href="/"
            className="inline-block rounded-lg bg-teal-primary px-8 py-3 text-white font-semibold hover:bg-teal-hover transition-colors"
          >
            Use the Free Calculator
          </a>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-muted">
        <div className="mx-auto max-w-6xl px-4">
          <p>
            &copy; {new Date().getFullYear()} KitchenCostEstimator.com &mdash; Free kitchen
            renovation cost calculator
          </p>
        </div>
      </footer>
    </>
  );
}
