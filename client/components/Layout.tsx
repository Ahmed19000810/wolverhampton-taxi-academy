import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ai-learning", label: "AI Tutor" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-950 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white hidden sm:inline">
                Taxi Academy
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-orange-600 dark:text-orange-500 border-b-2 border-orange-600 dark:border-orange-500 pb-4"
                      : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Taxi Academy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Master the Wolverhampton PHV Knowledge Test with our
                comprehensive learning platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/features"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-slate-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              &copy; 2024 Wolverhampton Taxi Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
