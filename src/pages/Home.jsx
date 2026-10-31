import Icon from "../components/Icon";

const stats = [
    { value: "1:1", label: "Exchange ratio", note: "Give before you receive" },
    { value: "24/7", label: "Member access", note: "Submit at any time" },
    { value: "VCF", label: "Download format", note: "Import to your contacts" },
];

const steps = [
    {
        number: "01",
        title: "Submit your contact",
        description:
            "Enter your name, WhatsApp number and preferred community category.",
    },
    {
        number: "02",
        title: "Complete the exchange",
        description:
            "Confirm that you own the number and consent to its inclusion in the directory.",
    },
    {
        number: "03",
        title: "Unlock the directory",
        description:
            "Once your submission is accepted, access the available contact file.",
    },
];

const features = [
    {
        icon: "shield",
        title: "Consent-first directory",
        text: "Contacts should only be shared with the owner's clear permission.",
    },
    {
        icon: "users",
        title: "Reciprocal community",
        text: "Every participant contributes before accessing the shared directory.",
    },
    {
        icon: "file",
        title: "Simple VCF import",
        text: "Save eligible directory contacts to your phone using a standard VCF file.",
    },
];

export default function Home({ setPage }) {
    return (
        <div className="space-y-16 pb-12">
            <section className="relative overflow-hidden rounded-[30px] bg-[#101B2A] px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
                <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
                <div className="absolute bottom-0 right-0 h-64 w-64 bg-[#25D366]/10 blur-[90px]" />

                <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#8BE8AA]">
                            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                            Community contact exchange
                        </div>

                        <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]">
                            Your network grows when you{" "}
                            <span className="text-[#25D366]">give first.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                            Join a community built around fair contact exchange.
                            Contribute your own WhatsApp contact, then unlock
                            access to the directory available to participating
                            members.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <button
                                onClick={() => setPage("exchange")}
                                className="flex items-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-extrabold text-[#092114] transition hover:bg-[#48E17D]"
                            >
                                Join & submit contact{" "}
                                <Icon name="arrow" size={18} />
                            </button>
                            <button
                                onClick={() => setPage("support")}
                                className="rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                How it works
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                            <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Exchange protocol
                                    </p>
                                    <p className="mt-1 text-lg font-bold">
                                        Member access
                                    </p>
                                </div>
                                <div className="rounded-xl bg-[#25D366]/15 p-3 text-[#25D366]">
                                    <Icon name="shield" size={23} />
                                </div>
                            </div>

                            <div className="space-y-5 py-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#25D366]">
                                        <Icon name="phone" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">
                                            Your contact
                                        </p>
                                        <p className="mt-1 text-xs text-slate-400">
                                            Contribution required
                                        </p>
                                    </div>
                                    <span className="rounded-full bg-[#25D366]/15 px-3 py-1 text-[10px] font-bold text-[#65E58D]">
                                        STEP 01
                                    </span>
                                </div>

                                <div className="ml-5 h-6 border-l border-dashed border-white/20" />

                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#25D366]">
                                        <Icon name="check" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">
                                            Submission review
                                        </p>
                                        <p className="mt-1 text-xs text-slate-400">
                                            Consent and details checked
                                        </p>
                                    </div>
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-slate-300">
                                        STEP 02
                                    </span>
                                </div>

                                <div className="ml-5 h-6 border-l border-dashed border-white/20" />

                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-[#092114]">
                                        <Icon name="download" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">
                                            Directory access
                                        </p>
                                        <p className="mt-1 text-xs text-slate-400">
                                            Eligible members can download
                                        </p>
                                    </div>
                                    <span className="rounded-full bg-[#25D366]/15 px-3 py-1 text-[10px] font-bold text-[#65E58D]">
                                        STEP 03
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 p-4">
                                <div className="flex items-start gap-3">
                                    <Icon
                                        name="lock"
                                        className="mt-0.5 text-[#25D366]"
                                    />
                                    <p className="text-xs leading-5 text-slate-300">
                                        No contribution, no directory access.
                                        The exchange is designed around equal
                                        participation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#168447]">
                            The platform at a glance
                        </p>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            A simple exchange. Clear rules.
                        </h2>
                    </div>
                    <p className="text-xs text-slate-400">
                        Illustrative platform indicators
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-slate-200 bg-white p-6"
                        >
                            <p className="text-4xl font-extrabold tracking-tight text-slate-900">
                                {stat.value}
                            </p>
                            <p className="mt-3 text-sm font-bold text-slate-800">
                                {stat.label}
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                {stat.note}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#168447]">
                        How it works
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                        Three steps. One fair rule.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        Access to the directory is conditional on contributing
                        your own contact details and agreeing to the community
                        rules.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-2xl border border-slate-200 bg-white p-7"
                        >
                            <span className="text-sm font-extrabold tracking-widest text-[#16924D]">
                                {step.number}
                            </span>
                            <h3 className="mt-7 text-lg font-bold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="flex gap-4 rounded-2xl bg-[#F0F7F2] p-6"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#168447]">
                            <Icon name={feature.icon} size={21} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                {feature.text}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#E9F8EE] p-8 sm:flex-row sm:items-center sm:p-10">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#168447]">
                        Ready to participate?
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        Make your contribution count.
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Submit your contact to begin the exchange process.
                    </p>
                </div>
                <button
                    onClick={() => setPage("exchange")}
                    className="flex shrink-0 items-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                    Go to exchange <Icon name="arrow" size={17} />
                </button>
            </section>
        </div>
    );
}
