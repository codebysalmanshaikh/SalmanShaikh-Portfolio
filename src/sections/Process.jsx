import { motion } from "framer-motion";
import {
    Search,
    Lightbulb,
    PenTool,
    Rocket,
    BarChart3,
    TrendingUp,
} from "lucide-react";

const processSteps = [
    {
        icon: <Search size={28} />,
        step: "01",
        title: "Research & Discovery",
        description:
            "Understanding your business, target audience, competitors, and growth opportunities before launching campaigns.",
    },
    {
        icon: <Lightbulb size={28} />,
        step: "02",
        title: "Strategy Planning",
        description:
            "Building a data-driven Meta Ads strategy, campaign structure, audience segments, and KPIs.",
    },
    {
        icon: <PenTool size={28} />,
        step: "03",
        title: "Creative Production",
        description:
            "Designing high-converting creatives, video ads, copy, and hooks tailored to your audience.",
    },
    {
        icon: <Rocket size={28} />,
        step: "04",
        title: "Campaign Launch",
        description:
            "Launching optimized campaigns with proper tracking, pixel setup, and conversion-focused objectives.",
    },
    {
        icon: <BarChart3 size={28} />,
        step: "05",
        title: "Optimization",
        description:
            "Daily monitoring, A/B testing, budget optimization, and performance improvements using real data.",
    },
    {
        icon: <TrendingUp size={28} />,
        step: "06",
        title: "Scaling",
        description:
            "Scaling profitable campaigns while maintaining healthy ROAS and reducing acquisition costs.",
    },
];

function Process() {
    return (
        <section id="process" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Process
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        A proven workflow
                        <br />
                        built for growth.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Every project follows a structured process that combines strategy,
                        creativity, and continuous optimization to maximize results.
                    </p>
                </motion.div>

                <div className="relative mt-20">
                    <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block"></div>

                    <div className="space-y-10">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 lg:flex-row lg:items-center lg:gap-10"
                            >
                                <div className="absolute -left-[14px] hidden h-7 w-7 rounded-full border-4 border-[#050505] bg-violet-500 lg:block"></div>

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                                    {step.icon}
                                </div>

                                <div className="flex-1">
                                    <p className="text-sm font-medium tracking-[0.2em] text-violet-400">
                                        STEP {step.step}
                                    </p>

                                    <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;