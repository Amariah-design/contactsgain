import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Icon from "./components/Icon";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import Support from "./pages/Support";

const pageTitles = {
  home: "The community",
  exchange: "Join the exchange",
  support: "Help & guidance",
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#252922]">
      <Sidebar
        page={page}
        setPage={setPage}
        open={menuOpen}
        setOpen={setMenuOpen}
      />

      <div className="min-h-screen lg:pl-[260px]">
        <header className="sticky top-0 z-30 border-b border-[#E8E6DD] bg-[#F7F6F1]/95 backdrop-blur-md">
          <div className="flex h-[76px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(true)}
                className="rounded-full border border-[#E4E2D9] p-2.5 lg:hidden"
                aria-label="Open navigation"
              >
                <Icon name="menu" size={19} />
              </button>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#8B8D80]">
                  CONTACTS GAIN / COMMUNITY
                </p>
                <h1 className="mt-1 font-display text-sm font-semibold">
                  {pageTitles[page]}
                </h1>
              </div>
            </div>

            <button
              onClick={() => setPage("exchange")}
              className="flex items-center gap-2 bg-[#293D2D] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#405A43]"
            >
              Get started
              <Icon name="arrow" size={15} />
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {page === "home" && <Home setPage={setPage} />}
          {page === "exchange" && <Exchange />}
          {page === "support" && <Support />}
        </main>

        <footer className="border-t border-[#E8E6DD] px-5 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 text-xs text-[#85877D] sm:flex-row">
            <p>CONTACTS GAIN © 2026</p>
            <p>A community built on mutual connection.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
