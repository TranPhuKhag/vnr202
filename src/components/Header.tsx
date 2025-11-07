import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../public/logo.webp";

const menu = [
  { label: "Bắt đầu đổi mới", to: "/dai-hoi-8-9" },
  { label: "Giai đoạn 1", to: "/giai-doan-1" },
  { label: "Giai đoạn 2", to: "/giai-doan-2" },
  { label: "Giai đoạn 3", to: "/giai-doan-3" },
  { label: "Thành Tựu", to: "/thanh-tuu" },
  { label: "Quiz", to: "/quiz" },
  { label: "Chatbot", to: "/chatbot" },
  { label: "AI Usage", to: "/ai-usage" },
  { label: "Q&A", to: "/qa" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-[72px] h-[36px] rounded-md shadow-md bg-white/70 p-1 object-contain"
          />
          <span className="text-xl font-extrabold text-[#2a2e6e] tracking-wide whitespace-nowrap">
            VNR202 - GD1708
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center flex-nowrap overflow-x-auto">
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded-xl font-semibold text-[#2a2e6e] transition hover:bg-[#e0e7ff] hover:text-[#3a3f8f] ${
                location.pathname === item.to
                  ? "bg-[#dbeafe] text-[#3a3f8f]"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Nút menu mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl text-[#2a2e6e] hover:bg-[#e0e7ff] focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <motion.nav
          className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-white/80 backdrop-blur-xl rounded-b-2xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-3 rounded-xl font-semibold transition text-[#2a2e6e] hover:bg-[#e0e7ff] hover:text-[#3a3f8f] ${
                location.pathname === item.to
                  ? "bg-[#dbeafe] text-[#3a3f8f]"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
