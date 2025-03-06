import React from "react";

const Hero = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <section className="bg-dark-space relative h-screen flex" id="Hero">
            <div className="flex-1 flex justify-center items-center text-center">
                <h1
                    className="
                        relative
                        w-fit
                        text-5xl
                        font-bold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-electric-blue
                        via-pastel-violet
                        to-intense-pink

                        before:content-['']
                        before:absolute
                        before:top-1/2
                        before:left-1/2
                        before:-translate-x-1/2
                        before:-translate-y-1/2
                        before:w-full
                        before:h-full
                        before:bg-gradient-to-r
                        before:from-electric-blue
                        before:via-pastel-violet
                        before:to-intense-pink
                        before:blur-xl
                        before:opacity-30
                    "
                >
                    Lorem ipsum
                </h1>
            </div>
            <div ref={ref} className="flex-1" />
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
