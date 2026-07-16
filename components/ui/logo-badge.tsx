import Image from "next/image";

export function LogoBadge({
  logo,
  initials,
  name,
  size = 36,
}: {
  logo?: string;
  initials: string;
  name: string;
  size?: number;
}) {
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
      style={{ width: size, height: size }}
      className="relative shrink-0 overflow-hidden rounded-lg border border-border bg-white p-1.5"
    >
      <Image src={logo} alt={name} fill sizes={`${size}px`} className="object-contain p-1" />
    </div>
  );
}
