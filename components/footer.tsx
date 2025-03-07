"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faGoogle,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css"; // Ensure this file exists with your custom styles
import { useEffect, useState } from "react";

const FooterComponent = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Set the initial width after component mounts (client-side only)
        setWidth(window.innerWidth);

        // Create handler function
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <footer className="sm:h-screen overflow-hidden py-24 bg-black relative">
            <div className="px-6 sm:px-24 overflow-hidden w-full h-full relative">
                <div className="w-full h-full flex flex-col justify-center items-center mb-6 sm:mb-0">
                    <p className="font-bebas leading-none text-white text-[12vw] mb-20">
                        Let's talk
                    </p>
                    <div className="py-4"></div>

                    <>
                        {width < 760 ? (
                            <ul className="flex justify-center sm:flex-row items-center sm:gap-6">
                                <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
                                    <Link
                                        href="https://www.x.com/chaitu_exe/"
                                        target="_blank"
                                    >
                                        Dribble
                                    </Link>
                                </li>
                                <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
                                    <Link
                                        href="https://www.x.com/chaitu_exe/"
                                        target="_blank"
                                    >
                                        Behance
                                    </Link>
                                </li>
                                <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
                                    <Link
                                        href="https://www.x.com/chaitu_exe/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className={styles.socialLinks}>
                                <li>
                                    <Link
                                        href="https://www.facebook.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className={styles.icon}
                                        />
                                        <span> - Facebook</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.twitter.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className={styles.icon}
                                        />
                                        <span> - Twitter</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.google.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGoogle}
                                            className={styles.icon}
                                        />
                                        <span> - Google</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.instagram.com"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            className={styles.icon}
                                        />
                                        <span> - Instagram</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
