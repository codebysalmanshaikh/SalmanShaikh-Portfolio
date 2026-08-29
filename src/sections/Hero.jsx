import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

            <div className="mx-auto max-w-7xl px-6 mt-20">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="max-w-4xl"
                >

                    <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-tight text-white md:text-7xl">

                        Performance Marketing
                        <br />

                        That Turns
                        <span className="text-violet-500"> Ad Spend </span>

                        Into Growth.

                    </h1>

                    <p className="mb-4 mt-6 text-sm uppercase tracking-[0.25em] text-violet-400">

                        Performance Marketing • Meta Ads • Video Editing

                    </p>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

                        I help businesses grow through Meta Ads, Google Ads, high-converting websites, compelling creatives, and data-driven marketing strategies.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-medium text-white transition hover:bg-violet-500"
                        >
                            View My Work

                            <ArrowRight size={18} />

                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/10 px-7 py-4 font-medium text-white transition hover:border-white/30"
                        >
                            Let's Talk
                        </a>

                    </div>

                    <div className="mt-16 flex flex-wrap gap-10">

                        <div>

                            <h3 className="font-['Space_Grotesk'] text-3xl font-bold">

                                ₹25L+

                            </h3>

                            <p className="mt-2 text-zinc-500">

                                Ad Spend Managed

                            </p>

                        </div>

                        <div>

                            <h3 className="font-['Space_Grotesk'] text-3xl font-bold">

                                5.2x

                            </h3>

                            <p className="mt-2 text-zinc-500">

                                Highest ROAS

                            </p>

                        </div>

                        <div>

                            <h3 className="font-['Space_Grotesk'] text-3xl font-bold">

                                76+

                            </h3>

                            <p className="mt-2 text-zinc-500">

                                Campaigns

                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;