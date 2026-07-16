import type { SVGProps } from "react";

export function EiffelTowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v3" />
      <path d="M9.5 9 12 5l2.5 4" />
      <path d="M7.5 15 12 5l4.5 10" />
      <path d="M4.5 21 12 5l7.5 16" />
      <path d="M8.3 11h7.4" />
      <path d="M6.3 17h11.4" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function TajMahalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v1.5" />
      <path d="M9 8a3 3 0 0 1 6 0v3H9V8Z" />
      <path d="M7 11h10v8H7z" />
      <path d="M4.5 13v6" />
      <path d="M4.5 13a1.2 1.2 0 0 1 2.4 0v6h-2.4" />
      <path d="M19.5 13a1.2 1.2 0 0 0-2.4 0v6h2.4" />
      <path d="M19.5 13v6" />
      <path d="M3 21h18" />
    </svg>
  );
}
