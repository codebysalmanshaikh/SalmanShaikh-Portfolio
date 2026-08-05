// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faEnvelope,
//     faPhone,
//     faMapMarkerAlt,
//     faArrowUpRightFromSquare
// } from '@fortawesome/free-solid-svg-icons';
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

// import {
//     faLinkedin,
//     faInstagram
// } from '@fortawesome/free-brands-svg-icons';

// function Contact() {
//     return (
//         <section id="contact" className="py-28">
//             <div className="mx-auto max-w-7xl px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 35 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="mx-auto max-w-3xl text-center"
//                 >
//                     <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
//                         Contact
//                     </p>

//                     <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
//                         Let's build something
//                         <br />
//                         that delivers results.
//                     </h2>

//                     <p className="mt-6 text-lg leading-8 text-zinc-400">
//                         Whether you're looking to scale with Meta Ads, Google Ads, a conversion-focused website, or high-performing creatives, I'd be happy to discuss your goals and help bring your next project to life.
//                     </p>
//                 </motion.div>

//                 <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
//                     {/* Left */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -35 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="space-y-6"
//                     >
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
//                             <FontAwesomeIcon icon={faEnvelope} className="text-violet-400" style={{ fontSize: '28px' }} />

//                             <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
//                                 Email
//                             </h3>

//                             <p className="mt-3 text-zinc-400">
//                                 growthstudiobysalman@gmail.com
//                             </p>
//                         </div>

//                         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
//                             <FontAwesomeIcon icon={faPhone} className="text-violet-400" style={{ fontSize: '28px' }} />

//                             <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
//                                 Phone
//                             </h3>

//                             <p className="mt-3 text-zinc-400">
//                                 +91 9028886384
//                             </p>
//                         </div>

//                         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
//                             <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-400" style={{ fontSize: '28px' }} />

//                             <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
//                                 Location
//                             </h3>

//                             <p className="mt-3 text-zinc-400">
//                                 Pune, Maharashtra, India
//                             </p>
//                         </div>

//                         <div className="flex gap-4 pt-2">
//                             <a
//                                 href="https://linkedin.com/"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="rounded-full border border-white/10 p-4 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                             >
//                                 <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '22px' }} />
//                             </a>

//                             <a
//                                 href="https://www.instagram.com/growthstudiobysalman/"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="rounded-full border border-white/10 p-4 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                             >
//                                 <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '22px' }} />
//                             </a>
//                         </div>
//                     </motion.div>

//                     {/* Right */}
//                     <motion.form
//                         initial={{ opacity: 0, x: 35 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
//                     >
//                         <div className="grid gap-6 md:grid-cols-2">
//                             <div>
//                                 <label className="mb-3 block text-sm text-zinc-400">
//                                     Full Name
//                                 </label>

//                                 <input
//                                     type="text"
//                                     placeholder="John Doe"
//                                     className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="mb-3 block text-sm text-zinc-400">
//                                     Email
//                                 </label>

//                                 <input
//                                     type="email"
//                                     placeholder="john@example.com"
//                                     className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mt-6">
//                             <label className="mb-3 block text-sm text-zinc-400">
//                                 Subject
//                             </label>

//                             <input
//                                 type="text"
//                                 placeholder="Project Inquiry"
//                                 className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
//                             />
//                         </div>

//                         <div className="mt-6">
//                             <label className="mb-3 block text-sm text-zinc-400">
//                                 Message
//                             </label>

//                             <textarea
//                                 rows="6"
//                                 placeholder="Tell me about your project..."
//                                 className="w-full resize-none rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-medium text-white transition hover:bg-violet-500"
//                         >
//                             Send Message
//                             <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '20px' }} />
//                         </button>
//                     </motion.form>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Contact;


import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4j505fg",
                "template_m1y41r8",
                form.current,
                {
                    publicKey: "3h42D6DJgNWOcN2rs",
                }
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Contact
                    </p>

                    <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
                        Let's build something
                        <br />
                        that delivers results.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Whether you're looking to scale with Meta Ads, Google Ads, a conversion-focused website, or high-performing creatives, I'd be happy to discuss your goals and help bring your next project to life.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                            <FontAwesomeIcon icon={faEnvelope} className="text-violet-400" style={{ fontSize: '28px' }} />

                            <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                Email
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                growthstudiobysalman@gmail.com
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                            <FontAwesomeIcon icon={faPhone} className="text-violet-400" style={{ fontSize: '28px' }} />

                            <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                Phone
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                +91 9028886384
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-400" style={{ fontSize: '28px' }} />

                            <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                                Location
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                Pune, Maharashtra, India
                            </p>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-4 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                            >
                                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '22px' }} />
                            </a>

                            <a
                                href="https://www.instagram.com/growthstudiobysalman/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-4 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                            >
                                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '22px' }} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                    >
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-3 block text-sm text-zinc-400">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-sm text-zinc-400">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="mb-3 block text-sm text-zinc-400">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                                className="w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                            />
                        </div>

                        <div className="mt-6">
                            <label className="mb-3 block text-sm text-zinc-400">
                                Message
                            </label>

                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full resize-none rounded-2xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-medium text-white transition hover:bg-violet-500"
                        >
                            Send Message
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '20px' }} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

