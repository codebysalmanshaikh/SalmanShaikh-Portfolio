// import { ArrowUpRight, Heart, Linkedin, Mail, Instagram, Github } from "lucide-react";
// // Solid Icons (UI elements)
// import { faArrowUpRightFromSquare, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// // Brands Icons (Social Media)
// import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// function Footer() {
//     const year = new Date().getFullYear();

//     return (
//         <footer className="border-t border-white/10 bg-[#050505]">
//             <div className="mx-auto max-w-7xl px-6 py-20">
//                 {/* Top */}
//                 <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
//                     <div className="max-w-2xl">
//                         <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
//                             Let's Build Something Great
//                         </p>

//                         <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-5xl">
//                             Ready to scale your business
//                             <br />
//                             with performance marketing?
//                         </h2>

//                         <p className="mt-6 text-lg leading-8 text-zinc-400">
//                             Whether you're looking to generate more leads, improve ROAS,
//                             or create better-performing ad creatives, I'd love to hear
//                             about your project.
//                         </p>
//                     </div>

//                     <a
//                         href="#contact"
//                         className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-medium text-white transition hover:bg-violet-500"
//                     >
//                         Let's Talk
//                         <ArrowUpRight size={20} />
//                     </a>
//                 </div>

//                 {/* Divider */}
//                 <div className="my-16 h-px bg-white/10" />

//                 {/* Bottom */}
//                 <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
//                     <div>
//                         <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
//                             Salman<span className="text-violet-500">.</span>
//                         </h3>

//                         <p className="mt-3 text-zinc-500">
//                             Performance Marketer • Meta Ads Specialist • Video Editor
//                         </p>
//                     </div>

//                     <div className="flex items-center gap-5">
//                         <a
//                             href="mailto:your@email.com"
//                             className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                         >
//                             <Mail size={20} />
//                         </a>

//                         <a
//                             href="https://linkedin.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                         >
//                             <Linkedin size={20} />
//                         </a>

//                         <a
//                             href="https://instagram.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                         >
//                             <Instagram size={20} />
//                         </a>

//                         <a
//                             href="https://github.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
//                         >
//                             <Github size={20} />
//                         </a>
//                     </div>
//                 </div>

//                 <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
//                     <p>© {year} Salman Shaikh. All rights reserved.</p>

//                     <p className="flex items-center gap-2">
//                         Designed & Built with
//                         <Heart size={16} className="fill-violet-500 text-violet-500" />
//                         using React & Tailwind CSS
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid Icons (UI elements)
import { faArrowUpRightFromSquare, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Brands Icons (Social Media)
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#050505]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                {/* Top */}
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                            Let's Build Something Great
                        </p>

                        <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold text-white md:text-5xl">
                            Ready to scale your business
                            <br />
                            with performance marketing?
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Whether you're looking to generate more leads, improve ROAS,
                            or create better-performing ad creatives, I'd love to hear
                            about your project.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-medium text-white transition hover:bg-violet-500"
                    >
                        Let's Talk
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '20px' }} />
                    </a>
                </div>

                {/* Divider */}
                <div className="my-16 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
                            Salman<span className="text-violet-500">.</span>
                        </h3>

                        <p className="mt-3 text-zinc-500">
                            Performance Marketer • Meta Ads Specialist • Video Editor
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <a
                            href="mailto:your@email.com"
                            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                        >
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px' }} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                        >
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px' }} />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                        >
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px' }} />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            Back to top rel="noreferrer"
                            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400"
                        >
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px' }} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <p>© {year} Salman Shaikh. All rights reserved.</p>

                    <p className="flex items-center gap-2">
                        Designed & Built with
                        <FontAwesomeIcon icon={faHeart} className="fill-violet-500 text-violet-500" style={{ fontSize: '16px' }} />
                        using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
