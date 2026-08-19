/* eslint-disable */
const LogoCloud = () => {
  const logos = ['ACME', 'NEXUS', 'KORE', 'VAULT', 'AXIOM', 'PRIMA'];
  return (
    <section style={{ borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px', display: 'flex', alignItems: 'center', gap: 48 }}>
        <div style={{ fontFamily: 'var(--font-techno)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--fg-3)', whiteSpace: 'nowrap' }}>
          Trusted by builders at
        </div>
        <div style={{ display: 'flex', gap: 56, flex: 1, justifyContent: 'space-between' }}>
          {logos.map(l => (
            <div key={l} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: 22,
              letterSpacing: '0.04em',
              color: 'var(--fg-3)',
              opacity: 0.8,
            }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.LogoCloud = LogoCloud;
