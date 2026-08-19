/* eslint-disable */
// Shared atoms for the Websynthiq marketing UI kit.

const Wordmark = ({ height = 28 }) => (
  <img src="../../assets/logo-full.png" alt="Websynthiq" style={{ height, display: 'block' }} />
);

const WordmarkText = ({ size = 36 }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', lineHeight: 1 }}>
    <span style={{
      fontFamily: '"Saira Condensed", "Arial Narrow", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: size,
      letterSpacing: '-0.01em',
      color: 'var(--brand-cobalt)',
    }}>WEB</span>
    <span style={{
      fontFamily: '"Chakra Petch", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '-0.03em',
      color: 'var(--brand-ink)',
    }}>synthiq</span>
  </span>
);

const Eyebrow = ({ children, color }) => (
  <div style={{
    fontFamily: 'var(--font-techno)',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: color || 'var(--brand-cobalt)',
  }}>{children}</div>
);

const Button = ({ variant = 'primary', size = 'md', children, onClick, style }) => {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 12, borderRadius: 4 },
    md: { padding: '10px 18px', fontSize: 14, borderRadius: 6 },
    lg: { padding: '14px 24px', fontSize: 16, borderRadius: 8 },
  }[size];
  const variants = {
    primary: { background: 'var(--brand-cobalt)', color: '#fff', border: 0 },
    secondary: { background: '#fff', color: 'var(--brand-cobalt)', border: '1px solid var(--border-1)' },
    ghost: { background: 'transparent', color: 'var(--brand-cobalt)', border: 0 },
    ink: { background: '#000', color: '#fff', border: 0 },
    onBrand: { background: '#fff', color: 'var(--brand-cobalt)', border: 0 },
  }[variant];
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && variant === 'primary' ? { background: 'var(--cobalt-600)' } : {};
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 120ms var(--ease-out), box-shadow 120ms var(--ease-out)',
        boxShadow: variant === 'primary' ? '0 1px 2px rgba(13,24,60,0.10)' : 'none',
        ...sizes,
        ...variants,
        ...hoverStyle,
        ...style,
      }}
    >{children}</button>
  );
};

const Badge = ({ tone = 'cobalt', children }) => {
  const tones = {
    cobalt: { background: 'var(--cobalt-50)', color: 'var(--cobalt-700)', border: '1px solid var(--cobalt-100)' },
    steel:  { background: 'var(--steel-50)',  color: 'var(--steel-700)',  border: '1px solid var(--steel-100)' },
    ink:    { background: '#000', color: '#fff', border: '1px solid #000' },
    success:{ background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  }[tone];
  return (
    <span style={{
      fontFamily: 'var(--font-techno)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      padding: '4px 10px',
      borderRadius: 999,
      ...tones,
    }}>{children}</span>
  );
};

const StatusDot = ({ tone = 'success', children }) => {
  const colors = { success: '#16A34A', warning: '#D97706', danger: '#DC2626' }[tone];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)' }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: colors, boxShadow: `0 0 0 3px ${colors}30` }} />
      {children}
    </span>
  );
};

Object.assign(window, { Wordmark, WordmarkText, Eyebrow, Button, Badge, StatusDot });
