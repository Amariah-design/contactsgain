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
    anchor.download = "Contacts-Gain-directory.vcf";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
        setForm((current) => ({ ...current, [field]: value }));
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
            "Hello Admin, I want to join the Contacts Gain community.",
            "",
            `Name: ${form.name.trim()}`,
            `WhatsApp Number: ${memberNumber}`,
            `Interest: ${form.interest}`,
            "",
            "I confirm that I agree to the community contact exchange rules.",
        ].join("\n");

        const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

        const whatsappWindow = window.open(whatsappLink, "_blank");

        if (!whatsappWindow) {
            setError(
                "WhatsApp could not be opened. Allow pop-ups or open WhatsApp manually and try again.",
            );
            return;
        }

        setMessageOpened(true);
    };

    return (
        <div className="space-y-12 pb-10">
            <section className="max-w-3xl">
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                    <span className="h-px w-8 bg-[#72836B]" />
                    Member participation / 01
                </p>

                <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-1.5px] sm:text-6xl">
                    Every connection
                    <br />
                    starts with <span className="text-[#788B70]">you.</span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#777B70]">
                    Share your WhatsApp details with the administrator to
                    participate in the community directory. Complete the
                    submission process to unlock the available contact file.
                </p>
            </section>

            <div className="grid gap-12 xl:grid-cols-[1.1fr_.9fr]">
                <section className="border-t-2 border-[#293D2D] pt-6">
                    <div className="flex items-start justify-between gap-5">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                                Step 01 / Your details
                            </p>
                            <h2 className="mt-3 font-display text-2xl font-semibold">
                                Make your contribution.
                            </h2>
                            <p className="mt-2 max-w-md text-xs leading-6 text-[#85877D]">
                                Use a number you own and can receive WhatsApp
                                messages on.
                            </p>
                        </div>

                        <span className="font-display text-4xl font-medium text-[#D0D4C8]">
                            01
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                        <div>
                            <label className="mb-2 block text-[11px] font-bold text-[#454B40]">
                                Full name or brand name
                            </label>
                            <input
                                required
                                value={form.name}
                                onChange={(e) => update("name", e.target.value)}
                                placeholder="Enter your name"
                                maxLength={70}
                                className="w-full border-b border-[#DADBD1] bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#A4A69C] focus:border-[#53694F]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[11px] font-bold text-[#454B40]">
                                WhatsApp number
                            </label>
                            <div className="grid grid-cols-[minmax(120px,.8fr)_1.2fr] gap-4">
                                <select
                                    value={form.countryCode}
                                    onChange={(e) =>
                                        update("countryCode", e.target.value)
                                    }
                                    className="min-w-0 border-b border-[#DADBD1] bg-transparent py-4 text-xs outline-none focus:border-[#53694F]"
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
                                    className="min-w-0 border-b border-[#DADBD1] bg-transparent py-4 text-sm outline-none placeholder:text-[#A4A69C] focus:border-[#53694F]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-[11px] font-bold text-[#454B40]">
                                What are you interested in?
                            </label>
                            <select
                                value={form.interest}
                                onChange={(e) =>
                                    update("interest", e.target.value)
                                }
                                className="w-full border-b border-[#DADBD1] bg-transparent py-4 text-sm outline-none focus:border-[#53694F]"
                            >
                                {interests.map((interest) => (
                                    <option key={interest}>{interest}</option>
                                ))}
                            </select>
                        </div>

                        <label className="flex cursor-pointer items-start gap-3 border border-[#E0E0D6] bg-[#F0F0E9] p-4">
                            <input
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) =>
                                    update("consent", e.target.checked)
                                }
                                className="mt-1 h-4 w-4 accent-[#405A43]"
                            />
                            <span className="text-[11px] leading-6 text-[#74786D]">
                                I confirm that this is my number and I consent
                                to sharing it with participating members of this
                                contact exchange community.
                            </span>
                        </label>

                        {error && (
                            <p
                                role="alert"
                                className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-xs text-red-700"
                            >
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={messageOpened}
                            className="flex w-full items-center justify-between bg-[#293D2D] px-6 py-5 text-left text-xs font-bold text-white transition hover:bg-[#405A43] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <span>
                                {messageOpened
                                    ? "WhatsApp message opened"
                                    : "Send details to WhatsApp"}
                            </span>
                            <Icon name="arrow" size={18} />
                        </button>

                        <p className="text-[10px] leading-5 text-[#999B91]">
                            Your details are placed in a pre-filled WhatsApp
                            message. Review and send the message yourself.
                        </p>
                    </form>
                </section>

                <section className="space-y-8">
                    <div className="bg-[#E9EAE1] p-7 sm:p-9">
                        <div className="flex items-center justify-between border-b border-[#D5D9CE] pb-5">
                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#66745F]">
                                Step 02 / Directory access
                            </p>
                            <span
                                className={`text-[9px] font-bold uppercase tracking-[1px] ${unlocked ? "text-[#3D7042]" : "text-[#8C8F83]"}`}
                            >
                                {unlocked
                                    ? "Unlocked"
                                    : "Awaiting confirmation"}
                            </span>
                        </div>

                        <div className="py-10 text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C8D0C0] text-[#53694F]">
                                <Icon
                                    name={unlocked ? "unlock" : "lock"}
                                    size={30}
                                />
                            </div>

                            <h2 className="mt-6 font-display text-2xl font-semibold">
                                {unlocked
                                    ? "Your access is open."
                                    : messageOpened
                                      ? "One last confirmation."
                                      : "Your directory awaits."}
                            </h2>

                            <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-[#777B70]">
                                {unlocked
                                    ? "You have confirmed that you sent the WhatsApp message. You can now access the VCF download."
                                    : messageOpened
                                      ? "Go to WhatsApp, send your message to the administrator, then return here to confirm."
                                      : "Complete your details and send your WhatsApp message to continue."}
                            </p>
                        </div>

                        {messageOpened && !unlocked && (
                            <button
                                onClick={() => setUnlocked(true)}
                                className="flex w-full items-center justify-between bg-[#D5E2CC] px-5 py-4 text-xs font-bold text-[#293D2D] transition hover:bg-[#C8D9BC]"
                            >
                                I've sent the message
                                <Icon name="check" size={17} />
                            </button>
                        )}

                        <button
                            onClick={createVcf}
                            disabled={!unlocked}
                            className={`mt-3 flex w-full items-center justify-between px-5 py-4 text-xs font-bold transition ${
                                unlocked
                                    ? "bg-[#293D2D] text-white hover:bg-[#405A43]"
                                    : "cursor-not-allowed bg-[#D5D7CE] text-[#92968B]"
                            }`}
                        >
                            Download contact file
                            <Icon name="download" size={17} />
                        </button>

                        <p className="mt-5 text-center text-[10px] leading-5 text-[#898D81]">
                            Manual confirmation does not verify actual WhatsApp
                            delivery. The administrator may need to check your
                            submission separately.
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#72836B]">
                            After downloading
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold">
                            Import your contacts.
                        </h3>

                        <div className="mt-5 divide-y divide-[#E1E1D8] border-y border-[#E1E1D8]">
                            <div className="flex gap-4 py-5">
                                <Icon
                                    name="phone"
                                    size={20}
                                    className="mt-1 shrink-0 text-[#657B5F]"
                                />
                                <div>
                                    <p className="text-xs font-bold">Android</p>
                                    <p className="mt-2 text-xs leading-6 text-[#85877D]">
                                        Open the downloaded VCF file from your
                                        Files app and choose the Contacts import
                                        option.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 py-5">
                                <Icon
                                    name="file"
                                    size={20}
                                    className="mt-1 shrink-0 text-[#657B5F]"
                                />
                                <div>
                                    <p className="text-xs font-bold">iPhone</p>
                                    <p className="mt-2 text-xs leading-6 text-[#85877D]">
                                        Open the VCF file in Files, view the
                                        contact preview and choose Add All
                                        Contacts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
