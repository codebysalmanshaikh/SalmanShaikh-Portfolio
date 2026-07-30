import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Orthorub",
        role: "Healthcare Brand",
        feedback:
            "Salman helped us improve our Meta Ads performance with better creatives and campaign optimization. Communication was smooth and the results exceeded our expectations.",
    },
    {
        id: 2,
        name: "Blossom Dental Clinic",
        role: "Local Business",
        feedback:
            "From strategy to execution, everything was handled professionally. We generated quality leads consistently while reducing our acquisition cost.",
    },
    {
        id: 3,
        name: "E-commerce Client",
        role: "Fashion Brand",
        feedback:
            "The combination of creative strategy and performance marketing helped us scale our campaigns with confidence. Highly recommended.",
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Testimonials
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        Trusted by businesses
                        <br />
                        focused on growth.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        A few words from clients I've had the opportunity to work with.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
                        >
                            <Quote className="text-violet-400" size={36} />

                            <div className="mt-6 flex gap-1 text-violet-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="mt-6 leading-8 text-zinc-400">
                                "{item.feedback}"
                            </p>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                                    {item.name}
                                </h3>

                                <p className="mt-2 text-zinc-500">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;