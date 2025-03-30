import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle } from "lucide-react";

const ContactMe = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_ID as string
    );
    const formRef = useRef<HTMLFormElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        if (state?.result?.kind === "success") {
            formRef.current?.reset();
            setShowConfirmation(true);
        }
    }, [state]);

    return (
        <section className="flex p-8 h-screen relative" id="contact">
            <div
                ref={containerRef}
                className={`transition-opacity duration-1000 ease-out flex-1 flex flex-col justify-center items-start text-left ${
                    isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }`}
            >
                <div className="w-full flex flex-col items-center gap-6 justify-center">
                    <div className="w-full max-w-lg text-start">
                        <h1 className="text-4xl font-bold text-white">
                            Contact Me
                        </h1>
                    </div>
                    <div className="bg-[#1B1345]/80 backdrop-blur-md w-full p-6 rounded-2xl max-w-lg space-y-6 min-h-[340px] flex items-center justify-center">
                        {showConfirmation ? (
                            <div className="text-center text-white flex flex-col items-center gap-4">
                                <CheckCircle className="w-16 h-16 text-green-500" />
                                <h2 className="text-2xl font-bold">
                                    Thank you for reaching out!
                                </h2>
                                <p>
                                    I will get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full space-y-6"
                            >
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        placeholder="Your name"
                                        className="w-full p-3 bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Your email address"
                                        className="w-full p-3 bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
                                    />
                                    <div style={{ color: "#E63946" }}>
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Your message"
                                        className="w-full p-3 bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
                                    />
                                    <div style={{ color: "#E63946" }}>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full p-3 rounded-xl bg-electric-blue text-white font-semibold hover:bg-electric-pink transition-colors"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1" ref={ref} />
        </section>
    );
});

ContactMe.displayName = "ContactMe";

export default ContactMe;
