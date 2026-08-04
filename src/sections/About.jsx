import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

const highlights = [
    {
        icon: <Award size={24} />,
        title: "Performance Focused",
        description:
            "Every campaign is optimized around measurable business outcomes, not vanity metrics.",
    },
    {
        icon: <Briefcase size={24} />,
        title: "Industry Experience",
        description:
            "Worked with businesses across multiple industries, helping improve lead generation and campaign performance.",
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Continuous Learning",
        description:
            "Constantly exploring new Meta Ads strategies, creative trends, and performance marketing frameworks.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Data-Driven Decisions",
        description:
            "Every optimization is backed by campaign data, testing, and analytics instead of assumptions.",
    },
];

function About() {
    return (
        <section id="about" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                            About Me
                        </p>

                        <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                            Helping brands
                            <br />
                            grow with strategy,
                            <br />
                            creativity & data.
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-zinc-400">
                            I'm Salman Shaikh, a Performance Marketing Specialist helping businesses grow through Meta Ads, Google Ads, Shopify & WordPress websites, creative strategy, and performance-driven video editing. I combine creativity with data to build marketing systems that drive measurable business growth.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            My approach is simple—understand the business, create the right growth strategy, execute with precision, and continuously optimize using real performance data. Every decision is focused on delivering long-term business results, not just clicks and impressions.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-8">
                            <div>
                                <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-white">
                                    8+
                                </h3>
                                <p className="mt-2 text-zinc-500">
                                    Years in Creative Industry
                                </p>
                            </div>

                            <div>
                                <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-white">
                                    25L+
                                </h3>
                                <p className="mt-2 text-zinc-500">
                                    Ad Spend Managed
                                </p>
                            </div>

                            <div>
                                <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-white">
                                    76+
                                </h3>
                                <p className="mt-2 text-zinc-500">
                                    Campaigns Executed
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/40"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                                    {item.icon}
                                </div>

                                <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;