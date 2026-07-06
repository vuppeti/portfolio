import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { navigationItems } from '../../data/portfolioData';

type NavLinkProps = {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
};

function NavLink({ label, href, isActive = false, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition ${isActive ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'}`}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100">
          S<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.href} {...item} isActive={activeSection === item.href} />
          ))}
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-700 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-800 bg-slate-950/95 p-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navigationItems.map((item) => (
              <NavLink key={item.href} {...item} isActive={activeSection === item.href} onClick={() => setOpen(false)} />
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
