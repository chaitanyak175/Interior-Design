// gallery/client-page.tsx - Client Component
"use client";

import { ImageType } from "@/sanity/queries/page";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ClientGalleryPageProps {
    data: {
        Gallery: {
            imageUrls: ImageType[];
        };
    };
}

export default function ClientGalleryPage({ data }: ClientGalleryPageProps) {
    const { Gallery } = data;

    // Create the random columns array when component mounts
    const [columnSizes] = useState(() => {
        return Gallery.imageUrls.map(() => {
            const columnSize = [
                "sm:row-span-1",
                "sm:col-span-3 row-span-1",
                "col-span-1 sm:row-span-2",
            ];
            const randomIndex = Math.floor(Math.random() * columnSize.length);
            return columnSize[randomIndex];
        });
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Adjust duration for the easing effect
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const animationId = requestAnimationFrame(raf);

        // Cleanup function
        return () => {
            lenis.destroy();
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section
            id="section"
            className="py-24 overflow-hidden sm:py-24 relative w-full justify-center flex items-center bg-black"
        >
            <div id="container" className="px-6 sm:px-24 w-full h-full">
                <h1 className="text-white text-6xl font-bebas">Gallery</h1>
                <span className="text-white text-base font-bold italic">
                    Our Entire works are showcased here.
                </span>
                <div className="grid-cols-1 grid-flow-row-dense gap-6 sm:grid-cols-2 md:grid-cols-4 grid">
                    {Gallery.imageUrls.map(
                        (image: ImageType, index: number) => {
                            return (
                                <div key={index} className={columnSizes[index]}>
                                    <Link href="/">
                                        <Image
                                            src={image.url}
                                            alt=""
                                            width={420}
                                            height={240}
                                            className="w-full h-full object-cover"
                                        />
                                    </Link>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
