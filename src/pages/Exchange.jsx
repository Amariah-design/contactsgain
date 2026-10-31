import { useState } from "react";
import Icon from "../components/Icon";

const countryCodes = [
    { code: "+234", country: "Nigeria" },
    { code: "+1", country: "USA / Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+27", country: "South Africa" },
    { code: "+971", country: "UAE" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
];

const interests = [
    "Business",
    "Entertainment",
    "Tech",
    "Lifestyle",
    "Networking",
];

const adminNumber = "2349060976683";

// Demonstration contacts only.
// Replace these with approved member contacts before publishing.
const demoContacts = [
    { name: "Demo Directory Member One", phone: "+12025550101" },
    { name: "Demo Directory Member Two", phone: "+12025550102" },
];

function createVcf() {
    const escapeVcf = (value) =>
        value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");

    const entries = demoContacts.map((contact) =>
        [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${escapeVcf(contact.name)}`,
            `TEL;TYPE=CELL:${contact.phone}`,
            "END:VCARD",
        ].join("\r\n"),
    );

    const blob = new Blob([entries.join("\r\n")], {
        type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "Linky-directory.vcf";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);
}

export default function Exchange() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        countryCode: "+234",
        interest: "Business",
        consent: false,
    });

    const [messageOpened, setMessageOpened] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState("");

    const update = (field, value) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));

        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const cleanPhone = form.phone.replace(/\D/g, "");

        if (!form.name.trim()) {
            setError("Please enter your name or brand name.");
            return;
        }

        if (cleanPhone.length < 7 || cleanPhone.length > 15) {
            setError("Please enter a valid WhatsApp number.");
            return;
        }

        if (!form.consent) {
            setError("Please accept the contact-sharing terms.");
            return;
        }

        const memberNumber = `${form.countryCode}${cleanPhone}`;

        const message = [
            "Hello Admin, I want to join the Linky Contact Exchange community.",
            "",
            `Name: ${form.name}`,
            `WhatsApp Number: ${memberNumber}`,
            `Interest: ${form.interest}`,
            "",
            "I confirm that I agree to the community contact exchange rules.",
        ].join("\n");

        const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

        const whatsappWindow = window.open(
            whatsappLink,
            "_blank",
            "noopener,noreferrer",
        );

        if (!whatsappWindow) {
            setError(
                "WhatsApp could not be opened. Please allow pop-ups and try again.",
            );
            return;
        }

        setMessageOpened(true);
    };

    const confirmSent = () => {
        setUnlocked(true);
    };

    return (
        <div className="space-y-8 pb-12">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#168447]">
                        Member exchange
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Contact submission
                    </h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                        Submit your WhatsApp details to the administrator to
                        participate in the community directory.
                    </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
                    <Icon name="shield" size={15} className="text-[#168447]" />
                    WhatsApp verification
                </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
                {/* SUBMISSION FORM */}

                <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-[#168447]">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E9FAEF]">
                                01
                            </span>
                            Your contribution
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-slate-900">
                            Submit your details
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Your information will be sent directly to the
                            platform administrator through WhatsApp.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label className="mb-2 block text-xs font-bold text-slate-700">
                                Full name or brand name
                            </label>

                            <input
                                required
                                value={form.name}
                                onChange={(e) => update("name", e.target.value)}
                                placeholder="e.g. Alex Designs"
                                maxLength={70}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-bold text-slate-700">
                                WhatsApp number
                            </label>

                            <div className="flex gap-2">
                                <select
                                    value={form.countryCode}
                                    onChange={(e) =>
                                        update("countryCode", e.target.value)
                                    }
                                    className="w-[42%] rounded-xl border border-slate-200 bg-slate-50 px-3 py-3.5 text-sm outline-none focus:border-[#25D366] sm:w-[38%]"
                                >
                                    {countryCodes.map((item) => (
                                        <option
                                            key={item.code}
                                            value={item.code}
                                        >
                                            {item.code} · {item.country}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    required
                                    type="tel"
                                    inputMode="tel"
                                    value={form.phone}
                                    onChange={(e) =>
                                        update("phone", e.target.value)
                                    }
                                    placeholder="801 234 5678"
                                    maxLength={18}
                                    className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-bold text-slate-700">
                                Primary interest
                            </label>

                            <select
                                value={form.interest}
                                onChange={(e) =>
                                    update("interest", e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#25D366]"
                            >
                                {interests.map((interest) => (
                                    <option key={interest}>{interest}</option>
                                ))}
                            </select>
                        </div>

                        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                            <input
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) =>
                                    update("consent", e.target.checked)
                                }
                                className="mt-0.5 h-4 w-4 accent-[#168447]"
                            />

                            <span className="text-xs leading-5 text-slate-600">
                                I confirm that this is my number and I consent
                                to sharing it with participating members of this
                                contact exchange community.
                            </span>
                        </label>

                        {error && (
                            <p
                                role="alert"
                                className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                            >
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={messageOpened}
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-[#092114] transition hover:bg-[#48E17D] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <Icon name="message" size={18} />
                            {messageOpened
                                ? "WhatsApp message opened"
                                : "Submit & unlock directory"}
                        </button>
                    </form>
                </section>

                {/* DOWNLOAD AND VERIFICATION */}

                <div className="space-y-5">
                    <section className="overflow-hidden rounded-3xl bg-[#101B2A] p-6 text-white sm:p-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-slate-400">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[#25D366]">
                                    02
                                </span>
                                Directory access
                            </div>

                            <div
                                className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
                                    unlocked
                                        ? "bg-[#25D366]/15 text-[#6DE99A]"
                                        : "bg-white/10 text-slate-300"
                                }`}
                            >
                                {unlocked ? "UNLOCKED" : "LOCKED"}
                            </div>
                        </div>

                        <div className="my-9 flex flex-col items-center text-center">
                            <div
                                className={`flex h-20 w-20 items-center justify-center rounded-3xl ${
                                    unlocked
                                        ? "bg-[#25D366] text-[#092114]"
                                        : "bg-white/10 text-slate-400"
                                }`}
                            >
                                <Icon
                                    name={unlocked ? "unlock" : "lock"}
                                    size={34}
                                />
                            </div>

                            <h2 className="mt-6 text-xl font-bold">
                                {unlocked
                                    ? "Directory unlocked"
                                    : messageOpened
                                      ? "Have you sent your message?"
                                      : "Your directory is locked"}
                            </h2>

                            <p className="mt-3 max-w-xs text-xs leading-6 text-slate-400">
                                {unlocked
                                    ? "Your confirmation is complete. You can now download the VCF file."
                                    : messageOpened
                                      ? "Return to WhatsApp, send your details to the administrator, then come back here and confirm."
                                      : "Submit your details to WhatsApp first. Then confirm that you have sent the message."}
                            </p>
                        </div>

                        {!messageOpened && (
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                                <p className="text-xs text-slate-400">
                                    Complete the form to continue.
                                </p>
                            </div>
                        )}

                        {messageOpened && !unlocked && (
                            <button
                                onClick={confirmSent}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-[#092114] transition hover:bg-[#48E17D]"
                            >
                                <Icon name="check" size={18} />
                                I've sent the WhatsApp message
                            </button>
                        )}

                        <button
                            onClick={createVcf}
                            disabled={!unlocked}
                            className={`mt-3 flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-extrabold transition ${
                                unlocked
                                    ? "bg-white text-slate-950 hover:bg-slate-100"
                                    : "cursor-not-allowed bg-white/10 text-slate-500"
                            }`}
                        >
                            <Icon name="download" size={18} />
                            Download VCF file
                        </button>

                        <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                            Confirmation of your submission will be sent to the
                            administrator via WhatsApp.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h3 className="font-bold text-slate-900">
                            How to import your VCF
                        </h3>

                        <div className="mt-5 space-y-5">
                            <div className="flex gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E9FAEF] text-[#168447]">
                                    <Icon name="phone" size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-slate-800">
                                        Android
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Download the file, open it from your
                                        Files app, then choose Contacts to
                                        import the entries.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E9FAEF] text-[#168447]">
                                    <Icon name="file" size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-slate-800">
                                        iPhone
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Open the downloaded VCF file from Files,
                                        tap the contact preview, then choose Add
                                        All Contacts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
