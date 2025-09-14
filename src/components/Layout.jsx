import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const grades = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th"];

export default function Layout() {
  return (
    <div className="min-h-dvh bg-paper-50 text-ink-900 font-friendly">
      <ScrollToTop />
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand-500 animate-float" />
            <span className="font-display text-lg font-bold">BrightBrainz</span>
          </NavLink>

          <ul className="flex flex-wrap gap-1">
            {grades.map((g) => (
              <li key={g}>
                <NavLink
                  to={`/grade/${encodeURIComponent(g)}`}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-1.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-brand-500 text-white"
                        : "text-ink-700 hover:bg-paper-200"
                    }`
                  }
                >
                  {g}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/parents"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-brand-500 text-white"
                      : "text-ink-700 hover:bg-paper-200"
                  }`
                }
              >
                Parents
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto py-6 text-sm text-ink-500">
          © {new Date().getFullYear()} BrightBrainz • No ads • Kid-safe design
        </div>
      </footer>
    </div>
  );
}
