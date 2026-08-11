import type { ReactNode } from 'react';

// Named color tokens content authors can use in .mdx files, e.g. color="green".
// A raw hex value (e.g. "#9b59b6") also works for one-off accents.
const COLOR_TOKENS: Record<string, string> = {
  orange: '#C4622D',
  green: '#7D9B76',
  gold: '#D4A853',
  brown: '#3B2A1A',
  blue: '#4a9eff',
  purple: '#9b59b6',
};

function resolveColor(color?: string): string {
  if (!color) return COLOR_TOKENS.orange;
  if (color.startsWith('#')) return color;
  return COLOR_TOKENS[color] ?? COLOR_TOKENS.orange;
}

const TEXT = '#3B2A1A';
const CREAM = '#FAF4EC';
const BORDER = '#e8ddd0';

/** A bordered callout box — use for "My Take", warnings, or highlighted asides. */
export function Callout({
  title,
  color = 'gold',
  children,
}: {
  title?: string;
  color?: string;
  children: ReactNode;
}) {
  const resolved = resolveColor(color);
  return (
    <div className="not-prose rounded-xl p-6 my-8" style={{ backgroundColor: '#fff8f0', border: `2px solid ${resolved}` }}>
      {title && (
        <p className="font-semibold mb-2" style={{ color: resolved }}>
          {title}
        </p>
      )}
      <div style={{ color: TEXT, lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}

/** A quote card with a colored left border — use for expert opinions or citations. */
export function ExpertQuote({
  name,
  role,
  color = 'green',
  children,
}: {
  name: string;
  role?: string;
  color?: string;
  children: ReactNode;
}) {
  const resolved = resolveColor(color);
  return (
    <div className="not-prose rounded-xl p-6 my-4 border-l-4" style={{ backgroundColor: 'white', borderLeftColor: resolved }}>
      <div className="font-bold text-lg mb-1" style={{ color: resolved }}>
        {name}
      </div>
      {role && (
        <div className="text-sm mb-3 italic" style={{ color: TEXT, opacity: 0.6 }}>
          {role}
        </div>
      )}
      <div style={{ color: TEXT, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

/** A responsive grid of Cards — use for pain points, features, or comparisons. */
export function CardGrid({ columns = 3, children }: { columns?: 2 | 3; children: ReactNode }) {
  const colsClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return <div className={`not-prose grid grid-cols-1 ${colsClass} gap-6 my-8`}>{children}</div>;
}

export function Card({ emoji, title, children }: { emoji?: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl p-6 border" style={{ backgroundColor: 'white', borderColor: BORDER }}>
      {emoji && <div className="text-3xl mb-3">{emoji}</div>}
      <h3 className="font-bold mb-2" style={{ color: TEXT }}>
        {title}
      </h3>
      <div className="text-sm" style={{ color: TEXT, opacity: 0.7, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

/** A full-bleed colored box for a closing call-to-action, e.g. "One Action to Take". */
export function ActionBox({ title, color = 'green', children }: { title: string; color?: string; children: ReactNode }) {
  const resolved = resolveColor(color);
  return (
    <div className="not-prose rounded-xl p-8 text-center my-10" style={{ backgroundColor: resolved }}>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="text-white" style={{ opacity: 0.9 }}>
        {children}
      </div>
    </div>
  );
}

/** A labeled item for target/reference lists inside an ActionBox, e.g. lab test targets. */
export function TargetItem({ label, target, note }: { label: string; target: string; note?: string }) {
  return (
    <div className="text-sm text-left mb-4 last:mb-0">
      <p className="font-semibold" style={{ color: TEXT }}>
        {label}
      </p>
      <p style={{ color: COLOR_TOKENS.green }}>Target: {target}</p>
      {note && (
        <p className="text-xs opacity-70" style={{ color: TEXT }}>
          {note}
        </p>
      )}
    </div>
  );
}

export const mdxComponents = { Callout, ExpertQuote, CardGrid, Card, ActionBox, TargetItem };
