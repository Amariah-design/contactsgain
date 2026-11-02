import Icon from "./Icon";

const links = [
    { id: "home", label: "Overview", icon: "grid" },
    { id: "exchange", label: "Contact exchange", icon: "users" },
    { id: "support", label: "Help & support", icon: "help" },
];

export default function Sidebar({ page, setPage, open, setOpen }) {
    const navigate = (id) => {
        setPage(id);
        setOpen(false);
    };

    return (
        <>
            {open && (
                <button
                    aria-label="Close navigation"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-[#172219]/40 lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-[#E8E6DD] bg-[#F1F0E9] transition-transform duration-300 lg:translate-x-0 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-[76px] items-center gap-3 border-b border-[#E2E0D7] px-7">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#293D2D] text-[#DDE8D5]">
                        <Icon name="users" size={21} />
                    </div>

                    <div>
                        <p className="font-display text-[17px] font-bold tracking-[-1px] text-[#293D2D]">
                            contacts gain
                        </p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[2px] text-[#8B8D80]">
                            Connect collectively
                        </p>
                    </div>
                </div>

                <div className="px-5 pt-10">
                    <p className="mb-4 px-3 text-[9px] font-bold uppercase tracking-[2px] text-[#929386]">
                        Navigation
                    </p>

                    <nav className="space-y-1">
                        {links.map((link, index) => {
                            const active = page === link.id;

                            return (
                                <button
                                    key={link.id}
                                    onClick={() => navigate(link.id)}
                                    className={`group flex w-full items-center gap-3 px-3 py-3.5 text-left transition ${
                                        active
                                            ? "bg-[#293D2D] text-white"
                                            : "text-[#74786D] hover:bg-[#E6E6DC] hover:text-[#293D2D]"
                                    }`}
                                >
                                    <Icon
                                        name={link.icon}
                                        size={18}
                                        className={
                                            active ? "text-[#DDE8D5]" : ""
                                        }
                                    />
                                    <span className="text-[12px] font-semibold">
                                        {link.label}
                                    </span>
                                    {active && (
                                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C6D7B8]" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-auto p-5">
                    <div className="border border-[#DFDED3] bg-[#E9E9DF] p-5">
                        <p className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#85877D]">
                            A shared principle
                        </p>
                        <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-[#293D2D]">
                            Give a contact.
                            <br />
                            Gain a connection.
                        </h3>
                        <p className="mt-3 text-[11px] leading-5 text-[#777B70]">
                            Participate respectfully. Only share numbers you own
                            or have permission to submit.
                        </p>
                        <button
                            onClick={() => navigate("support")}
                            className="mt-4 flex items-center gap-2 text-[11px] font-bold text-[#405A43]"
                        >
                            Read community rules
                            <Icon name="arrow" size={13} />
                        </button>
                    </div>

                    <p className="mt-5 px-1 text-[9px] font-semibold tracking-[1.5px] text-[#A1A296]">
                        CONTACTS GAIN / 2026
                    </p>
                </div>
            </aside>
        </>
    );
}
