"use client";

interface HeaderProps {
  onMenuClick: () => void;
  title: string;
  subtitle?: string;
}

export default function Header({ onMenuClick, title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-neutral-200 bg-white/80 px-4 backdrop-blur-md sm:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div className="flex-1">
        <h1 className="text-lg font-semibold text-neutral-900">{title}</h1>
        {subtitle && (
          <p className="text-sm text-neutral-500">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-500" />
        </button>
      </div>
    </header>
  );
}
