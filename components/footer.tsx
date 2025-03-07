import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faGoogle,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css"; // Ensure this file exists with your custom styles

const FooterComponent = () => {
    return (
        <footer className="sm:h-screen overflow-hidden py-24 bg-black relative">
            <div className="px-6 sm:px-24 overflow-hidden w-full h-full relative">
                <div className="w-full h-full flex flex-col justify-center items-center mb-6 sm:mb-0">
                    <p className="font-bebas leading-none text-white text-[12vw] mb-20">
                        Let's talk
                    </p>
                    <div className="py-4"></div>
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
                            <Link href="https://www.google.com" target="_blank">
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
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
