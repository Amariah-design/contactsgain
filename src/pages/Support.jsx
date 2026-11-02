import { useState } from "react";
import Icon from "../components/Icon";

const adminNumber = "2349060976683";

const faqs = [
    {
        question: "How often is the contact list updated?",
        answer: "The directory schedule should be announced by the platform administrator. This version does not connect to a live directory or automatically publish new member records.",
    },
    {
        question: "What if I cannot open the VCF file?",
        answer: "Try downloading the file again. On Android, open it from your Files app and select Contacts. On iPhone, open it in Files and use the contact import option.",
    },
    {
        question: "How do I request contact removal?",
        answer: "Contact the administrator with the number you submitted and request its removal. Previously downloaded copies cannot be remotely recalled.",
    },
    {
        question: "Does submitting my number guarantee access?",
        answer: "Submission is the first step. The administrator should check your submission and confirm that it meets the community rules. The current website uses a manual confirmation process.",
    },
    {
        question: "Can I add somebody else's number?",
        answer: "Only if you have their explicit permission to submit the number and share it with other members. Do not upload purchased, scraped or unsolicited contact lists.",
    },
];

export default function Support() {
    const [activeFaq, setActiveFaq] = useState(0);

    const [report, setReport] = useState({
        name: "",
        contact: "",
        issue: "Spam or unwanted messages",
        details: "",
    });

    const [reportError, setReportError] = useState("");

    const adminLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
        "Hello Admin, I have a question about the Contacts Gain platform.",
    )}`;

    const submitReport = (event) => {
        event.preventDefault();

        if (!report.details.trim()) {
            setReportError("Please describe the issue before submitting.");
            return;
        }

        const message = [
            "Hello Admin, I would like to report an issue on Contacts Gain.",
            `Name: ${report.name || "Not provided"}`,
            `Contact: ${report.contact || "Not provided"}`,
            `Issue: ${report.issue}`,
            `Details: ${report.details}`,
        ].join("\n");

        const link = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

        window.open(link, "_blank");

        setReportError("");
    };

    return (
        <div className="space-y-16 pb-10">
            <section className="border-b border-[#DEDED4] pb-12">
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                    <span className="h-px w-8 bg-[#72836B]" />
                    Support / We're here to help
                </p>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-1.5px] sm:text-6xl">
                            Questions are part of every good connection.
                        </h1>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-[#777B70]">
                            Find guidance on submissions, contact downloads,
                            privacy and community participation.
                        </p>
                    </div>

                    <a
                        href={adminLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-fit items-center gap-4 bg-[#293D2D] px-6 py-4 text-xs font-bold text-white transition hover:bg-[#405A43]"
                    >
                        Speak to the administrator
                        <Icon name="external" size={15} />
                    </a>
                </div>
            </section>

            <section className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                        01 / Help centre
                    </p>

                    <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-1px] sm:text-4xl">
                        Frequently asked questions.
                    </h2>

                    <p className="mt-5 max-w-xs text-xs leading-6 text-[#85877D]">
                        Some quick answers to help you get the most out of
                        Contacts Gain.
                    </p>

                    <div className="mt-9 border-l-2 border-[#B8C7AF] pl-5">
                        <p className="text-xs font-bold text-[#53694F]">
                            Need personal assistance?
                        </p>
                        <p className="mt-2 text-xs leading-6 text-[#85877D]">
                            You can contact the administrator directly through
                            WhatsApp.
                        </p>
                        <a
                            href={adminLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#405A43]"
                        >
                            Contact admin
                            <Icon name="arrow" size={14} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#DCDDD3]">
                    {faqs.map((faq, index) => {
                        const isOpen = activeFaq === index;

                        return (
                            <div
                                key={faq.question}
                                className="border-b border-[#DCDDD3]"
                            >
                                <button
                                    onClick={() =>
                                        setActiveFaq(isOpen ? -1 : index)
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                                >
                                    <span className="flex items-start gap-4">
                                        <span className="pt-0.5 font-display text-xs text-[#9AA393]">
                                            0{index + 1}
                                        </span>
                                        <span className="font-display text-sm font-semibold sm:text-base">
                                            {faq.question}
                                        </span>
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#DEDED4] text-[#53694F]">
                                        <Icon
                                            name={isOpen ? "close" : "plus"}
                                            size={15}
                                        />
                                    </span>
                                </button>

                                {isOpen && (
                                    <p className="max-w-xl pb-7 pl-9 text-xs leading-7 text-[#777B70]">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="grid gap-10 bg-[#E9EAE1] p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-12">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                        02 / Community safety
                    </p>

                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-1px] sm:text-4xl">
                        Something not right?
                    </h2>

                    <p className="mt-5 max-w-sm text-xs leading-7 text-[#777B70]">
                        Tell us about spam, harassment, privacy concerns or
                        misleading submissions. Your report will be prepared as
                        a WhatsApp message for the administrator.
                    </p>

                    <div className="mt-8 flex items-start gap-3 border-t border-[#D4D8CC] pt-6">
                        <Icon
                            name="shield"
                            size={20}
                            className="shrink-0 text-[#53694F]"
                        />
                        <p className="text-[11px] leading-6 text-[#777B70]">
                            Please provide accurate details. Do not include
                            another person's private information unless it is
                            necessary to explain the report.
                        </p>
                    </div>
                </div>

                <form onSubmit={submitReport} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-[10px] font-bold text-[#454B40]">
                                Your name (optional)
                            </label>
                            <input
                                value={report.name}
                                onChange={(e) =>
                                    setReport({
                                        ...report,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Your name"
                                className="w-full border-b border-[#C9CEC1] bg-transparent px-0 py-3 text-xs outline-none placeholder:text-[#A4A69C] focus:border-[#53694F]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[10px] font-bold text-[#454B40]">
                                WhatsApp number (optional)
                            </label>
                            <input
                                value={report.contact}
                                onChange={(e) =>
                                    setReport({
                                        ...report,
                                        contact: e.target.value,
                                    })
                                }
                                placeholder="Your number"
                                className="w-full border-b border-[#C9CEC1] bg-transparent px-0 py-3 text-xs outline-none placeholder:text-[#A4A69C] focus:border-[#53694F]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-[10px] font-bold text-[#454B40]">
                            Type of issue
                        </label>
                        <select
                            value={report.issue}
                            onChange={(e) =>
                                setReport({ ...report, issue: e.target.value })
                            }
                            className="w-full border-b border-[#C9CEC1] bg-transparent py-3 text-xs outline-none focus:border-[#53694F]"
                        >
                            <option>Spam or unwanted messages</option>
                            <option>Privacy or contact removal</option>
                            <option>Fake or misleading submission</option>
                            <option>Harassment or abuse</option>
                            <option>Technical problem</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-[10px] font-bold text-[#454B40]">
                            Tell us what happened
                        </label>
                        <textarea
                            rows={5}
                            value={report.details}
                            onChange={(e) =>
                                setReport({
                                    ...report,
                                    details: e.target.value,
                                })
                            }
                            placeholder="Describe the issue..."
                            className="w-full resize-none border border-[#D5D8CD] bg-[#F7F6F1] p-4 text-xs leading-6 outline-none placeholder:text-[#A4A69C] focus:border-[#53694F]"
                        />
                    </div>

                    {reportError && (
                        <p
                            role="alert"
                            className="text-xs font-semibold text-red-700"
                        >
                            {reportError}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="flex w-full items-center justify-between bg-[#293D2D] px-6 py-4 text-xs font-bold text-white transition hover:bg-[#405A43]"
                    >
                        Prepare WhatsApp report
                        <Icon name="arrow" size={17} />
                    </button>

                    <p className="text-[10px] leading-5 text-[#85877D]">
                        Your report opens in WhatsApp. Review the message and
                        send it to the administrator.
                    </p>
                </form>
            </section>

            <section className="flex flex-col justify-between gap-5 border-t border-[#DEDED4] pt-8 sm:flex-row sm:items-center">
                <div>
                    <p className="font-display text-xl font-semibold">
                        Still have a question?
                    </p>
                    <p className="mt-2 text-xs text-[#85877D]">
                        The administrator is available to assist with your
                        exchange.
                    </p>
                </div>

                <a
                    href={adminLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-bold text-[#405A43]"
                >
                    Start a WhatsApp conversation
                    <Icon name="arrow" size={15} />
                </a>
            </section>
        </div>
    );
}
