import Image from "next/image";

export function LogoBadge({
  logo,
  initials,
  name,
  size = 36,
  wide = false,
}: {
  logo?: string;
  initials: string;
  name: string;
  size?: number;
  wide?: boolean;
}) {
  const width = wide ? Math.round(size * 2.4) : size;

  if (!logo) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex shrink-0 items-center justify-center rounded-lg border border-border text-xs font-semibold text-foreground"
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      style={{ width, height: size }}
      className="relative shrink-0 overflow-hidden rounded-lg border border-border bg-white p-2"
    >
      <Image src={logo} alt={name} fill sizes={`${width}px`} className="object-contain p-1" />
    </div>
  );
}
