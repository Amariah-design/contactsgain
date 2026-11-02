import Icon from "../components/Icon";

const steps = [
    {
        number: "01",
        title: "Introduce yourself",
        text: "Submit your name, WhatsApp number and the category that best describes your interests.",
    },
    {
        number: "02",
        title: "Send your details",
        text: "Your information is prepared in a WhatsApp message for the platform administrator.",
    },
    {
        number: "03",
        title: "Access the directory",
        text: "After completing the submission process, confirm your message and unlock the available VCF file.",
    },
];

export default function Home({ setPage }) {
    return (
        <div className="space-y-24 pb-10">
            <section className="relative overflow-hidden bg-[#293D2D] text-[#F7F6F1]">
                <div className="grid lg:grid-cols-[1.2fr_.8fr]">
                    <div className="px-7 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
                        <p className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#C6D7B8]">
                            <span className="h-px w-8 bg-[#C6D7B8]" />A better
                            way to build your network
                        </p>

                        <h1 className="max-w-[650px] font-display text-[46px] font-semibold leading-[1.04] tracking-[-2.5px] sm:text-6xl lg:text-[76px]">
                            Good connections start with{" "}
                            <span className="text-[#C6D7B8]">giving.</span>
                        </h1>

                        <p className="mt-7 max-w-[470px] text-sm leading-7 text-[#D1D9CF]">
                            Contacts Gain brings people together through a
                            simple exchange. Contribute your own WhatsApp
                            contact and take part in a community built on mutual
                            participation.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-5">
                            <button
                                onClick={() => setPage("exchange")}
                                className="flex items-center gap-4 bg-[#DCE8D5] px-6 py-4 text-xs font-bold text-[#293D2D] transition hover:bg-white"
                            >
                                Join the exchange
                                <Icon name="arrow" size={16} />
                            </button>

                            <button
                                onClick={() => setPage("support")}
                                className="text-xs font-semibold text-[#E1E6DD] underline decoration-[#82947E] underline-offset-4 hover:text-white"
                            >
                                Understand how it works
                            </button>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7">
                            <div>
                                <p className="font-display text-2xl font-semibold">
                                    01 : 01
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-[#B7C4B2]">
                                    Reciprocal exchange
                                </p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-semibold">
                                    VCF
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-[#B7C4B2]">
                                    Contact file format
                                </p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-semibold">
                                    24 / 7
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-[#B7C4B2]">
                                    Online submissions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#DCE3D4] px-8 py-14 text-[#293D2D] lg:min-h-full">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#293D2D]/10" />
                        <div className="absolute -right-5 -top-5 h-52 w-52 rounded-full border border-[#293D2D]/10" />
                        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-[#293D2D]/10" />

                        <div className="relative w-full max-w-[350px]">
                            <div className="mb-4 flex items-center justify-between border-b border-[#293D2D]/20 pb-4">
                                <p className="text-[9px] font-bold uppercase tracking-[2px]">
                                    The exchange principle
                                </p>
                                <span className="text-[10px] font-semibold">
                                    01 / 03
                                </span>
                            </div>

                            <div className="border border-[#293D2D]/15 bg-[#F7F6F1] p-6 shadow-[12px_12px_0px_rgba(41,61,45,0.08)]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#7D8375]">
                                        Your contribution
                                    </span>
                                    <Icon name="phone" size={18} />
                                </div>
                                <p className="mt-6 font-display text-2xl font-semibold">
                                    Your contact.
                                </p>
                                <p className="mt-2 text-xs text-[#777B70]">
                                    A number you own and agree to share.
                                </p>
                            </div>

                            <div className="flex h-16 items-center justify-center">
                                <div className="flex items-center gap-3 text-[#53694F]">
                                    <span className="h-px w-10 bg-[#A6B39D]" />
                                    <Icon name="arrow" size={19} />
                                    <span className="h-px w-10 bg-[#A6B39D]" />
                                </div>
                            </div>

                            <div className="border border-[#293D2D]/15 bg-[#293D2D] p-6 text-white shadow-[12px_12px_0px_rgba(41,61,45,0.10)]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#C6D7B8]">
                                        Your access
                                    </span>
                                    <Icon
                                        name="users"
                                        size={18}
                                        className="text-[#C6D7B8]"
                                    />
                                </div>
                                <p className="mt-6 font-display text-2xl font-semibold">
                                    New connections.
                                </p>
                                <p className="mt-2 text-xs text-[#D1D9CF]">
                                    Access the available community directory.
                                </p>
                            </div>

                            <p className="mt-7 text-center text-[9px] font-semibold uppercase tracking-[2px] text-[#66765F]">
                                Participation makes the network work
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                        01 / The idea
                    </p>
                    <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-1px] sm:text-4xl">
                        A community works better when everyone contributes.
                    </h2>
                </div>

                <div className="border-l border-[#DCDCD1] pl-6 sm:pl-10">
                    <p className="max-w-2xl text-sm leading-8 text-[#73776D]">
                        Contacts Gain is based on a straightforward principle:
                        members contribute their own contact details before
                        receiving access to the shared directory. It is a
                        reciprocal approach to networking, designed to encourage
                        participation and respect for personal information.
                    </p>

                    <button
                        onClick={() => setPage("exchange")}
                        className="mt-7 inline-flex items-center gap-3 border-b border-[#53694F] pb-2 text-xs font-bold text-[#405A43]"
                    >
                        Make your contribution
                        <Icon name="arrow" size={15} />
                    </button>
                </div>
            </section>

            <section>
                <div className="flex flex-col justify-between gap-4 border-b border-[#DEDED4] pb-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                            02 / The process
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-1px] sm:text-4xl">
                            Three steps to get connected.
                        </h2>
                    </div>
                    <p className="max-w-xs text-xs leading-6 text-[#85877D]">
                        A clear process from your first submission to directory
                        access.
                    </p>
                </div>

                <div className="grid gap-0 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <article
                            key={step.number}
                            className={`py-8 md:px-7 ${
                                index !== 0
                                    ? "md:border-l md:border-[#DEDED4]"
                                    : ""
                            }`}
                        >
                            <p className="font-display text-5xl font-medium tracking-[-2px] text-[#A8B39F]">
                                {step.number}
                            </p>
                            <h3 className="mt-8 font-display text-xl font-semibold">
                                {step.title}
                            </h3>
                            <p className="mt-3 max-w-xs text-xs leading-6 text-[#7A7D73]">
                                {step.text}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="grid overflow-hidden bg-[#E9EAE1] lg:grid-cols-[1fr_1fr]">
                <div className="p-8 sm:p-12">
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                        03 / Our standards
                    </p>
                    <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-[-1px] sm:text-4xl">
                        Connections should always come with consent.
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-[#74796E]">
                        A useful network is one that respects the people in it.
                        Every member is expected to share responsibly and
                        respect the privacy of others.
                    </p>
                </div>

                <div className="divide-y divide-[#D4D8CC] border-t border-[#D4D8CC] lg:border-l lg:border-t-0">
                    <div className="flex gap-5 p-7 sm:p-9">
                        <Icon
                            name="shield"
                            size={23}
                            className="shrink-0 text-[#53694F]"
                        />
                        <div>
                            <h3 className="font-display text-base font-semibold">
                                Permission comes first
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-[#777B70]">
                                Only submit your own number or one you have
                                explicit permission to share.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 p-7 sm:p-9">
                        <Icon
                            name="users"
                            size={23}
                            className="shrink-0 text-[#53694F]"
                        />
                        <div>
                            <h3 className="font-display text-base font-semibold">
                                Participation is mutual
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-[#777B70]">
                                Members contribute before receiving access to
                                the available directory.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 p-7 sm:p-9">
                        <Icon
                            name="file"
                            size={23}
                            className="shrink-0 text-[#53694F]"
                        />
                        <div>
                            <h3 className="font-display text-base font-semibold">
                                Easy contact importing
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-[#777B70]">
                                The directory uses the standard VCF format for
                                importing contacts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-between gap-8 bg-[#293D2D] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#C6D7B8]">
                        Your next connection starts here
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-1px] sm:text-4xl">
                        Ready to take part?
                    </h2>
                    <p className="mt-3 text-xs leading-6 text-[#D1D9CF]">
                        Make your contribution and become part of the exchange.
                    </p>
                </div>

                <button
                    onClick={() => setPage("exchange")}
                    className="flex w-fit items-center gap-4 bg-[#DCE8D5] px-6 py-4 text-xs font-bold text-[#293D2D] transition hover:bg-white"
                >
                    Continue to exchange
                    <Icon name="arrow" size={16} />
                </button>
            </section>
        </div>
    );
}
