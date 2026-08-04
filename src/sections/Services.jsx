import { motion } from "framer-motion";
import {
    Megaphone,
    Search,
    Globe,
    Video,
    PenTool,
    BarChart3,
} from "lucide-react";


const services = [
    {
        icon: <Megaphone size={30} />,
        title: "Meta Ads",
        description:
            "High-converting Facebook & Instagram ad campaigns focused on lead generation, sales, and business growth.",
    },
    {
        icon: <Search size={30} />,
        title: "Google Ads",
        description:
            "Search, Display, and Performance Max campaigns designed to reach high-intent customers and maximize ROI.",
    },
    {
        icon: <Globe size={30} />,
        title: "Shopify & WordPress Websites",
        description:
            "Fast, responsive, and conversion-focused websites and landing pages built for businesses and eCommerce brands.",
    },
    {
        icon: <Video size={30} />,
        title: "Video Editing",
        description:
            "Professional ad creatives, UGC videos, reels, and short-form content optimized for performance marketing.",
    },
    {
        icon: <PenTool size={30} />,
        title: "Creative Strategy",
        description:
            "Ad concepts, hooks, scripts, and creative direction backed by performance marketing and audience psychology.",
    },
    {
        icon: <BarChart3 size={30} />,
        title: "Tracking & Analytics",
        description:
            "Meta Pixel, Conversion API, GA4, event tracking, and performance reporting for accurate campaign optimization.",
    },
];

function Services() {
    return (
        <section id="services" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Services
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        Everything you need
                        <br />
                        to grow your business online.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        From paid advertising and website development to creative production and analytics, every service is designed to help businesses attract, convert, and scale with confidence.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                                {service.icon}
                            </div>

                            <h3 className="mt-8 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;