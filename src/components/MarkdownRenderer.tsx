'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-dark mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-dark mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-dark mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-dark mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => {
    const text = typeof children === 'string' ? children : '';
    if (text.includes('[CALCULATOR EMBED')) {
      return (
        <div className="my-8 rounded-xl bg-teal-pale border border-teal-border p-6 text-center">
          <p className="text-lg font-semibold text-dark mb-2">Get Your Personalised Estimate</p>
          <p className="text-mid mb-4">Use our free kitchen remodel cost calculator for an instant breakdown.</p>
          <a
            href="/"
            className="inline-block rounded-lg bg-teal-primary px-6 py-3 text-white font-semibold hover:bg-teal-hover transition-colors"
          >
            Open Calculator
          </a>
        </div>
      );
    }
    return <p className="text-mid leading-relaxed mb-4">{children}</p>;
  },
  a: ({ href, children }) => (
    <a href={href} className="text-teal-primary hover:text-teal-hover underline underline-offset-2">
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-dark">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-mid">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-mid">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-teal-pale">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-teal-border px-4 py-2.5 text-left font-semibold text-dark">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-200 px-4 py-2.5 text-mid">{children}</td>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-teal-primary pl-4 my-4 text-mid italic">
      {children}
    </blockquote>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
