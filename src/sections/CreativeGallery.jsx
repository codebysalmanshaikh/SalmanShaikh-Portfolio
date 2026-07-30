import { motion } from "framer-motion";
import { Play, Image as ImageIcon, ArrowUpRight } from "lucide-react";

const galleryItems = [
    {
        id: 1,
        type: "Video Ad",
        title: "Orthorub Performance Creative",
        category: "Meta Ad Creative",
        image: "/images/gallery/creative-1.webp",
    },
    {
        id: 2,
        type: "UGC Video",
        title: "Skincare Brand Ad",
        category: "Video Editing",
        image: "/images/gallery/creative-2.webp",
    },
    {
        id: 3,
        type: "Carousel Ad",
        title: "E-commerce Campaign",
        category: "Creative Design",
        image: "/images/gallery/creative-3.webp",
    },
    {
        id: 4,
        type: "Product Reel",
        title: "Fashion Brand Reel",
        category: "Short-form Content",
        image: "/images/gallery/creative-4.webp",
    },
    {
        id: 5,
        type: "Static Creative",
        title: "Lead Generation Ad",
        category: "Graphic Creative",
        image: "/images/gallery/creative-5.webp",
    },
    {
        id: 6,
        type: "Campaign Creative",
        title: "Health Care Promotion",
        category: "Meta Ads",
        image: "/images/gallery/creative-6.webp",
    },
];

function CreativeGallery() {
    return (
        <section id="gallery" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Creative Gallery
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        Creatives designed
                        <br />
                        to capture attention.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Every creative is built with one goal — stop the scroll,
                        communicate value, and drive conversions.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                                <div className="flex h-full items-center justify-center text-zinc-600">
                                    <ImageIcon size={42} />
                                </div>

                                <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100"></div>

                                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-600 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                                    <Play className="ml-1" size={24} fill="white" />
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                                    {item.type}
                                </span>

                                <h3 className="mt-5 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-zinc-400">
                                    {item.category}
                                </p>

                                <button className="mt-6 flex items-center gap-2 text-violet-400 transition hover:text-violet-300">
                                    View Creative
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CreativeGallery;