import Icon from "./Icon";

const links = [
    { id: "home", label: "Overview", icon: "grid" },
    { id: "exchange", label: "Contact exchange", icon: "users" },
    { id: "support", label: "Help & support", icon: "help" },
];

export default function Sidebar({ page, setPage, open, setOpen }) {
    return (
        <>
            {open && (
                <button
                    aria-label="Close navigation"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-65 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-slate-950">
                        <Icon name="message" size={22} />
                    </div>
                    <div>
                        <p className="text-[15px] font-extrabold tracking-tight text-slate-900">
                            LINKY
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                            Contact exchange
                        </p>
                    </div>
                </div>

                <div className="px-5 pt-8">
                    <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-slate-400">
                        Workspace
                    </p>

                    <nav className="space-y-1">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    setPage(link.id);
                                    setOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                                    page === link.id
                                        ? "bg-[#E9FAEF] text-[#087B3C]"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <Icon name={link.icon} size={19} />
                                {link.label}
                                {page === link.id && (
                                    <span className="ml-auto h-2 w-2 rounded-full bg-[#25D366]" />
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="mt-auto p-5">
                    <div className="rounded-2xl bg-slate-950 p-5 text-white">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#25D366]">
                            <Icon name="shield" size={19} />
                        </div>
                        <p className="text-sm font-bold">
                            Exchange responsibly
                        </p>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Only share contacts you own or have permission to
                            submit.
                        </p>
                        <button
                            onClick={() => setPage("support")}
                            className="mt-4 flex items-center gap-2 text-xs font-bold text-[#25D366]"
                        >
                            Community rules <Icon name="arrow" size={14} />
                        </button>
                    </div>
                    <p className="mt-5 text-center text-[10px] text-slate-400">
                        LINKY© 2026
                    </p>
                </div>
            </aside>
        </>
    );
}
