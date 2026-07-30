import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredResults } from "../data/portfolio";

function FeaturedProjects() {
    return (
        <section id="projects" className="py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Featured Results
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        Real campaigns.
                        <br />
                        Real business growth.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        A showcase of campaigns where strategy, creative testing,
                        and optimization turned ad spend into measurable results.
                    </p>
                </motion.div>


                {/* Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {featuredResults.map((project, index) => (

                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between">

                                <div>

                                    <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
                                        {project.client}
                                    </h3>

                                    <p className="mt-2 text-zinc-400">
                                        {project.category}
                                    </p>

                                </div>


                                <div className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                                    {project.roas} ROAS
                                </div>

                            </div>


                            {/* Description */}
                            <p className="mt-8 leading-7 text-zinc-400">
                                {project.description}
                            </p>


                            {/* Metrics */}
                            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">

                                <Metric
                                    title="Budget"
                                    value={project.budget}
                                />

                                <Metric
                                    title="CTR"
                                    value={project.ctr}
                                />

                                <Metric
                                    title="CPA"
                                    value={project.cpa}
                                />

                                <Metric
                                    title="ROAS"
                                    value={project.roas}
                                />

                            </div>


                            {/* Image Placeholder */}
                            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40">

                                <div className="flex aspect-video items-center justify-center text-sm text-zinc-600">
                                    Campaign Screenshot
                                </div>

                            </div>


                            {/* Button */}
                            <button className="mt-8 flex items-center gap-2 text-violet-400 transition group-hover:text-violet-300">

                                View Case Study

                                <ArrowUpRight size={18} />

                            </button>


                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}


function Metric({ title, value }) {

    return (
        <div>

            <p className="text-sm text-zinc-500">
                {title}
            </p>

            <p className="mt-2 text-xl font-semibold text-white">
                {value}
            </p>

        </div>
    );

}


export default FeaturedProjects;