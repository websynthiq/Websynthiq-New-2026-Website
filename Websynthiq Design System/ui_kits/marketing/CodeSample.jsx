/* eslint-disable */
const CodeSample = () => {
  const [tab, setTab] = React.useState('config');
  const tabs = [
    { id: 'config', label: 'websynthiq.config.ts' },
    { id: 'route',  label: 'app/[slug].tsx' },
    { id: 'shell',  label: 'shell' },
  ];
  const samples = {
    config: `import { defineSite } from 'websynthiq';

export default defineSite({
  name: 'acme-marketing',
  domain: 'acme.dev',
  edge: { regions: 'auto' },
  cache: {
    '/':         { swr: 60, ttl: 600 },
    '/blog/*':   { swr: 30, ttl: 300 },
    '/api/*':    'no-store',
  },
  redirects: [
    { from: '/old', to: '/blog/launch', code: 301 },
  ],
});`,
    route: `import { Page } from 'websynthiq/page';

export default Page(async ({ params, edge }) => {
  const post = await edge.kv.get(\`post:\${params.slug}\`);
  if (!post) return Page.NotFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.publishedAt}</time>
      <Markdown>{post.body}</Markdown>
    </article>
  );
});`,
    shell: `$ npx websynthiq deploy
↑ uploaded 142 files (12.4 MB)
✓ build  · 6.1s
✓ verify · 0.4s
✓ deploy · 1.2s

  acme-marketing.websynthiq.dev
  acme.dev   (live in 12 regions)`,
  };
  return (
    <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow color="var(--steel-600)">Configuration</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-techno)', fontWeight: 700, fontSize: 40, lineHeight: 1.05, margin: '12px 0 16px', letterSpacing: '-0.02em' }}>
            One file. Whole site.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 }}>
            Routing, caching, redirects, headers, regions. All declared in TypeScript, all diffable, all reversible.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
            <Badge tone="cobalt">Type-safe</Badge>
            <Badge tone="steel">Edge-aware</Badge>
            <Badge tone="ink">v1.4</Badge>
          </div>
        </div>
        <div style={{
          background: 'var(--gray-900)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--gray-700)',
        }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--gray-700)', background: 'var(--gray-800)' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                padding: '12px 18px',
                background: tab === t.id ? 'var(--gray-900)' : 'transparent',
                color: tab === t.id ? '#fff' : 'var(--gray-400)',
                border: 0,
                borderRight: '1px solid var(--gray-700)',
                borderBottom: tab === t.id ? '2px solid var(--brand-cobalt)' : '2px solid transparent',
                cursor: 'pointer',
              }}>{t.label}</button>
            ))}
          </div>
          <pre style={{
            margin: 0,
            padding: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            lineHeight: 1.65,
            color: '#E6EAF5',
            background: 'transparent',
            overflow: 'auto',
            minHeight: 320,
          }}>{samples[tab]}</pre>
        </div>
      </div>
    </section>
  );
};
window.CodeSample = CodeSample;
