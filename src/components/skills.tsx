import React from "react";
import SkillsIcon from "./skillsIcon";
import { motion } from "framer-motion";

const Skill = React.forwardRef<HTMLDivElement>((props, ref) => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div {...props} ref={ref} className="min-h-screen bg-zinc-900 flex items-center justify-center py-16 px-4">
            <div className="flex flex-col items-center justify-between min-h-[50vh]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white text-center text-3xl lg:text-5xl mb-8 tracking-[18px]"
                >
                    <h1>SKILLS</h1>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-white text-center mb-12"
                >
                    <h4 className=" lg:text-xl  text-lg tracking-[8px]">
                        SKILLS I KNOW AS A <span className="text-yellow-500 font-semibold">Creative Designer</span>
                    </h4>
                </motion.span>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {[
                        { src: "https://freelogopng.com/images/all_img/1656733637logo-canva-png.png", alt: "Canva" },
                        { src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png", alt: "Figma" },
                        { src: "https://logolook.net/wp-content/uploads/2023/11/Adobe-Illustrator.png", alt: "adobe illustrator " },
                        { src: "https://i.pinimg.com/564x/3f/af/a4/3fafa456274a8b1458175771e05bd62f.jpg", alt: "VN" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyXck1SJ5dwJw9AjqYENeJxchUKdZjcue2w&s", alt: "CapCut" },
                        { src: "https://logodownload.org/wp-content/uploads/2017/04/adobe-after-effects-logo-0.png", alt: "After Effect" },
                        { src: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp", alt: "Python" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", alt: "C" },
                        { src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256", alt: "HTML" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png", alt: "CSS" },
                    ].map((icon, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center justify-center"
                        >
                            <SkillsIcon>
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-full h-full lg:w-24 lg:h-24 object-contain transition-transform transform hover:scale-110"
                                />
                            </SkillsIcon>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Skill;
