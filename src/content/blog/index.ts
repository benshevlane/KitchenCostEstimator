import type { BlogPost } from './types';
import { howMuchDoesAKitchenCostUk2026 } from './how-much-does-a-kitchen-cost-uk-2026';
import { costOfNewKitchenUk2026RealPricesByRegionSizeFinish } from './cost-of-new-kitchen-uk-2026-real-prices-by-region-size-finish';
const allBlogPosts: BlogPost[] = [costOfNewKitchenUk2026RealPricesByRegionSizeFinish, howMuchDoesAKitchenCostUk2026];

// Sort by date descending (newest first)
allBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return allBlogPosts.slice(0, limit);

  // Score by shared tags
  const scored = allBlogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}
