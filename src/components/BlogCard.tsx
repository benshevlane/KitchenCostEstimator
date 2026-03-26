import type { BlogPost } from '@/content/blog/types';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-teal-primary hover:shadow-md"
    >
      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-teal-pale px-2.5 py-0.5 text-xs font-medium text-teal-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-dark group-hover:text-teal-primary transition-colors leading-snug">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
        {post.description}
      </p>

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="text-gray-300">·</span>
        <span>{post.readingTime} min read</span>
      </div>
    </a>
  );
}
