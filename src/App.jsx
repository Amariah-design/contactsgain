import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Icon from "./components/Icon";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import Support from "./pages/Support";

const pageTitles = {
  home: "Overview",
  exchange: "Contact exchange",
  support: "Help & support",
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7F6]">
      <Sidebar
        page={page}
        setPage={setPage}
        open={menuOpen}
        setOpen={setMenuOpen}
      />

      <div className="min-h-screen lg:pl-65">
        <header className="sticky top-0 z-30 flex h-19 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Open navigation"
            >
              <Icon name="menu" size={22} />
            </button>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400">
                Linky workspace
              </p>
              <h1 className="mt-0.5 text-sm font-bold text-slate-900">
                {pageTitles[page]}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-[#CDEED8] bg-[#F0FBF3] px-3 py-2 text-[10px] font-bold text-[#168447] sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#25D366]" />
              Community portal
            </span>
            <button
              onClick={() => setPage("exchange")}
              className="rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
            >
              Join exchange
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-... p-5 sm:p-8 lg:p-10">
          {page === "home" && <Home setPage={setPage} />}
          {page === "exchange" && <Exchange />}
          {page === "support" && <Support />}
        </main>
      </div>
    </div>
  );
}
