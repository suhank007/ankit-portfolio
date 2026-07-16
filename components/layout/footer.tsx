import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[15px] font-semibold tracking-tight text-foreground">Ankit Parihar</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={profile.github} className="hover:text-foreground">
            GitHub
          </a>
          <span>{profile.location}</span>
        </div>
        <p className="text-xs text-muted">
          © {year} Ankit Parihar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
