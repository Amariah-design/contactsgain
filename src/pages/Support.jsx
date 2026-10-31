import { useState } from "react";
import Icon from "../components/Icon";

const adminNumber = "2349060976683";

const faqs = [
    {
        question: "How often is the contact list updated?",
        answer: "The directory schedule should be announced by the platform administrator. This demo does not connect to a live directory or automatically publish new member records.",
    },
    {
        question: "What if I cannot open the VCF file?",
        answer: "Try downloading the file again. On Android, open it from your Files app and select Contacts. On iPhone, open the file in Files and use the contact import option. If it still fails, contact the administrator.",
    },
    {
        question: "How do I request contact removal?",
        answer: "Contact the administrator with the number you submitted and ask for its removal. A live platform should verify the request and remove the record from future downloads. Previously downloaded copies cannot be remotely recalled.",
    },
    {
        question: "Does submitting my number guarantee access?",
        answer: "Submission is the first step. In a production version, the platform should verify number ownership, confirm consent and check that the submission meets community rules before granting access.",
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
        "Hello Admin, I have a question about the WhatsApp Contact Exchange platform.",
    )}`;

    const submitReport = (event) => {
        event.preventDefault();

        if (!report.details.trim()) {
            setReportError("Please describe the issue before submitting.");
            return;
        }

        const message = [
            "Hello Admin, I would like to report an issue on the Linky platform.",
            `Name: ${report.name || "Not provided"}`,
            `Contact: ${report.contact || "Not provided"}`,
            `Issue: ${report.issue}`,
            `Details: ${report.details}`,
        ].join("\n");

        window.open(
            `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer",
        );

        setReportError("");
    };

    return (
        <div className="space-y-10 pb-12">
            <section className="rounded-3xl bg-[#101B2A] px-7 py-10 text-white sm:px-10 sm:py-12">
                <p className="text-xs font-bold uppercase tracking-[2px] text-[#25D366]">
                    Support centre
                </p>
                <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <h1 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                            Need a hand with your exchange?
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                            Get help with contact submissions, directory
                            downloads, privacy requests or community concerns.
                        </p>
                    </div>
                    <a
                        href={adminLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-extrabold text-[#092114] transition hover:bg-[#48E17D]"
                    >
                        <Icon name="message" size={18} /> Chat with admin
                        <Icon name="external" size={15} />
                    </a>
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                <div>
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#168447]">
                            Help centre
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = activeFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                                >
                                    <button
                                        onClick={() =>
                                            setActiveFaq(isOpen ? -1 : index)
                                        }
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                                    >
                                        <span className="text-sm font-bold text-slate-800">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                                                isOpen
                                                    ? "bg-[#E9FAEF] text-[#168447]"
                                                    : "bg-slate-50 text-slate-500"
                                            }`}
                                        >
                                            <Icon
                                                name={isOpen ? "close" : "plus"}
                                                size={17}
                                            />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                                            <p className="text-sm leading-6 text-slate-500">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#168447]">
                            Community safety
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                            Report an issue
                        </h2>
                    </div>

                    <form
                        onSubmit={submitReport}
                        className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                        <div className="mb-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                            <Icon
                                name="alert"
                                className="mt-0.5 shrink-0 text-amber-600"
                                size={19}
                            />
                            <p className="text-xs leading-5 text-amber-800">
                                Report spam, harassment, misleading submissions
                                or a privacy concern. Reports are sent to the
                                administrator through WhatsApp.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-700">
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
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#25D366]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-700">
                                    Your WhatsApp number (optional)
                                </label>
                                <input
                                    value={report.contact}
                                    onChange={(e) =>
                                        setReport({
                                            ...report,
                                            contact: e.target.value,
                                        })
                                    }
                                    placeholder="Your contact number"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#25D366]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-700">
                                    Type of issue
                                </label>
                                <select
                                    value={report.issue}
                                    onChange={(e) =>
                                        setReport({
                                            ...report,
                                            issue: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#25D366]"
                                >
                                    <option>Spam or unwanted messages</option>
                                    <option>Privacy or contact removal</option>
                                    <option>
                                        Fake or misleading submission
                                    </option>
                                    <option>Harassment or abuse</option>
                                    <option>Technical problem</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-700">
                                    Describe the issue
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
                                    placeholder="Tell us what happened..."
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#25D366]"
                                />
                            </div>

                            {reportError && (
                                <p
                                    role="alert"
                                    className="text-xs font-medium text-red-600"
                                >
                                    {reportError}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
                            >
                                Send report to admin{" "}
                                <Icon name="arrow" size={17} />
                            </button>
                            <p className="text-center text-[10px] leading-5 text-slate-400">
                                Your report opens a pre-filled WhatsApp message.
                                Review it before sending.
                            </p>
                        </div>
                    </form>
                </div>
            </section>

            <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9FAEF] text-[#168447]">
                        <Icon name="mail" size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">
                            Still need help?
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                            Speak directly with the platform administrator.
                        </p>
                    </div>
                </div>
                <a
                    href={adminLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-[#168447] hover:underline"
                >
                    Contact administrator
                </a>
            </section>
        </div>
    );
}
