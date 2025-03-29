import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

// TO DO: IMPROVE FORM SUBMISSION LOGIC AND EMAIL CLIENT PRE FILL
const ContactMe = React.forwardRef(({}, ref) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formRef = useRef(null);

    // Usa il hook useInView per rilevare la visibilità dell'elemento
    const isInView = useInView(formRef, { once: true });

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:alessandroDev@outlook.it?subject=Contact%20Form%20Submission&body=Full%20Name:%20${fullName}%0AEmail:%20${email}%0AMessage:%20${message}`;
        window.location.href = mailtoLink;

        // Clear the form after submission
        setFullName("");
        setEmail("");
        setMessage("");
    };

    return (
        // temporary height of 1000px for testing purposes
        <div className="flex p-8 h-[1000px]">
            <div
                ref={formRef}
                className={`flex-1 flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-out ${
                    isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }`}
            >
                <h1 className="text-3xl font-bold mb-4 text-white">
                    Contact Me
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full max-w-md"
                >
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-lg font-medium mb-1 text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full p-3 border border-input rounded-2xl focus:ring-primary"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium mb-1 text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-input rounded-2xl focus:ring-primary"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-lg font-medium mb-1 text-white"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full p-3 border border-input rounded-2xl focus:ring-primary"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-electric-blue text-white p-3 rounded-2xl mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex-1" ref={ref} />
        </div>
    );
});

ContactMe.displayName = "ContactMe";

export default ContactMe;
