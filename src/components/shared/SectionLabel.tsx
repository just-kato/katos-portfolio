import { T } from '../../tokens';

interface Props {
  num: string;
  label: string;
  dark?: boolean;
  mb?: string;
  numColor?: string;
}

export function SectionLabel({ num, label, dark = false, mb, numColor }: Props) {
  const defaultMb = dark ? 'clamp(22px,3vw,34px)' : 'clamp(28px,4vw,46px)';
  return (
    <div
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: mb ?? defaultMb,
        color: dark ? T.mutedLight : T.ink,
      }}
    >
      <span style={{ color: numColor ?? (dark ? T.mutedDk : T.muted) }}>{num}</span>
      {label}
      <div
        style={{
          flex: 1,
          height: 2,
          background: dark ? 'rgba(70,64,55,0.565)' : T.ink,
        }}
      />
    </div>
  );
}
