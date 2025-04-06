"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle, Loader2 } from "lucide-react";
import clsx from "clsx";

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
        <section
            className="flex flex-col lg:flex-row px-4 py-8 lh:p-12 gap-8 lg:gap-16 items-center  lg:min-h-screen"
            id="contact"
        >
            <div
                ref={containerRef}
                className={clsx(
                    "transition-all duration-1000 ease-out w-full md:w-1/2",
                    isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                )}
            >
                <div className="w-full max-w-lg mx-auto space-y-6">
                    <h1 className="text-2xl lg:text-4xl font-bold text-white text-center md:text-left">
                        Contact Me
                    </h1>

                    <div className="flex items-center bg-[#1B1345]/80 backdrop-blur-md w-full p-6 rounded-2xl min-h-[340px] space-y-6">
                        {showConfirmation ? (
                            <div className="text-center w-full text-white flex flex-col items-center gap-4">
                                <CheckCircle className="w-16 h-16 text-green-500" />
                                <h2 className="text-base lg:text-2xl font-bold">
                                    Thank you for reaching out!
                                </h2>
                                <p className="text-sm">
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
                                        className="block text-sm lg:text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        placeholder="Your name"
                                        className="w-full p-3 text-sm lg:text-lg bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm lg:text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Your email address"
                                        className="w-full p-3 text-sm lg:text-lg bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
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
                                        className="block text-sm lg:text-lg font-medium mb-2 text-gray-200"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Your message"
                                        className="w-full p-3 text-sm lg:text-lg bg-[#2A2063] text-white border border-electric-pink rounded-xl focus:ring-electric-pink focus:outline-none"
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
                                    className="w-full p-2 lg:p-3 rounded-xl bg-electric-blue text-white font-semibold hover:bg-electric-pink transition-colors flex items-center justify-center"
                                >
                                    {state.submitting ? (
                                        <Loader2 className="animate-spin w-5 h-5" />
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div
                className="w-full lg:w-1/2 h-[300px] md:h-[500px] xl:h-screen"
                ref={ref}
            />
        </section>
    );
});

ContactMe.displayName = "ContactMe";
export default ContactMe;
