import MarkdownRenderer from '@/components/MarkdownRenderer';
import BlogCard from '@/components/BlogCard';
import type { BlogPost as BlogPostType } from '@/content/blog/types';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
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
              className="text-sm font-medium text-teal-primary"
            >
              Blog
            </a>
            <a
              href="/guides"
              className="hidden text-sm font-medium text-mid transition-colors hover:text-teal-primary sm:block"
            >
              Guides
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <li>
              <a href="/" className="hover:text-teal-primary transition-colors">
                Home
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-300">/</span>
              <a href="/blog" className="hover:text-teal-primary transition-colors">
                Blog
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-300">/</span>
              <span className="text-dark font-medium">{post.title.split(':')[0].trim()}</span>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-pale px-3 py-1 text-xs font-medium text-teal-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-lg text-muted">{post.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-primary text-white text-xs font-bold">
                {post.author.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <span className="font-medium text-dark">{post.author.name}</span>
                <span className="mx-1.5 text-gray-300">·</span>
                <span>{post.author.role}</span>
              </div>
            </div>

            <span className="text-gray-300">|</span>

            <time dateTime={post.date}>{formatDate(post.date)}</time>

            <span className="text-gray-300">·</span>

            <span>{post.readingTime} min read</span>
          </div>
        </header>

        <hr className="mb-8 border-gray-200" />

        {/* Article Content */}
        <article>
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-dark mb-6">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
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
