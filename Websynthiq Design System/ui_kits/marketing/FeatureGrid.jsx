/* eslint-disable */
const FeatureCard = ({ icon, title, body }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--border-1)',
        borderRadius: 'var(--radius-lg)',
        padding: 28,
        transition: 'box-shadow 200ms var(--ease-out)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: 'var(--cobalt-50)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--brand-cobalt)',
      }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-techno)', fontWeight: 600, fontSize: 22, margin: '20px 0 8px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--fg-2)', margin: 0 }}>{body}</p>
    </div>
  );
};

const Icon = ({ d }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
    <path d={d} />
  </svg>
);

const FeatureGrid = () => (
  <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>
    <Eyebrow>Foundations</Eyebrow>
    <h2 style={{ fontFamily: 'var(--font-techno)', fontWeight: 700, fontSize: 44, lineHeight: 1.05, margin: '12px 0 56px', maxWidth: 720, letterSpacing: '-0.02em' }}>
      A smarter substrate for the modern web.
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
      <FeatureCard
        icon={<Icon d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />}
        title="Edge-native rendering"
        body="Every route runs at the edge by default. Sub-200ms cold starts in 200+ regions, no config required."
      />
      <FeatureCard
        icon={<Icon d="M16 18l6-6-6-6M8 6l-6 6 6 6" />}
        title="Code-first config"
        body="One TypeScript file describes routes, caches, redirects, and headers. Diff it in PRs. Roll back with git."
      />
      <FeatureCard
        icon={<Icon d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />}
        title="Deterministic builds"
        body="Hashed inputs, content-addressed outputs. Every deploy is a verifiable artifact, not a re-build of last week's tree."
      />
    </div>
  </section>
);
window.FeatureGrid = FeatureGrid;
