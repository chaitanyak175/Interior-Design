import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <main className="no-scrollbar">
            <section
                id="section"
                className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-full justify-center flex items-center"
            >
                <div id="container" className="w-full h-full sm:px-24 px-6">
                    <Image
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54098c96146799.5ea7f6d5a9050.jpg"
                        alt="Hero Background"
                        fill
                        className="w-full h-full object-cover absolute"
                    />{" "}
                    <div className="relative flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full bottom-0 h-full">
                        <button className="border-2 font-bebas text-white pt-1 hover:bg-white hover:text-black duration-300 text-lg rounded-full px-9 py-1">
                            Explore
                        </button>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-4xl leading-none text-white font-bebas">
                                Furniture for your home
                            </h1>
                            <p className="text-white text-lg">
                                This is an example of the interior desing
                                website that I am making.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="section"
                className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
            >
                <div id="container" className="px-6 sm:px-24 w-full h-full">
                    <div className="flex gap-6 xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
                        <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
                            <h2 className="uppercase text-xl">
                                Chaitanya's Furniture for comfort living
                            </h2>
                            <p className="text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet itaque veritatis sequi
                                illum veniam
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-2/4">
                            <p className="text-base">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Cumque unde autem perspiciatis
                                odio laudantium commodi, sed molestiae numquam
                                facilis, dignissimos nulla veritatis porro quis
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum aut, quos qui quis sit
                                nulla unde similique nemo repellendus natus at
                                nihil! Officia accusantium nihil eum, numquam
                                quae adipisci perferendis?
                            </p>
                            <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="section"
                className="overflow-hidden h-fit relative w-full justify-center flex items-center"
            >
                <div id="contianer" className="px-6 sm:px-24 w-full h-full">
                    <p className="uppercase text-[100vh] leading-none font-bebas tracking-tighter">
                        Chaitanya
                    </p>
                    <Image
                        src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
                        alt=""
                        width={420}
                        height={420}
                        className="h-3/4 w-3/4 absolute sm:w-fit sm:right-[15%] top-0 object-cover"
                    />
                </div>
            </section>

            <section
                id="section"
                className="h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
            >
                <div id="container" className="px-6 sm:px-24 w-full h-full">
                    <div className="w-full relative mb-6 sm:mb-0">
                        <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
                            See Our Work
                        </button>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <Marquee className="w-full h-full" speed={25}>
                            <Image
                                src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
                                alt=""
                                width={320}
                                height={320}
                                className="h-3/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
                            />
                            <Image
                                src="https://i.pinimg.com/564x/67/ca/81/67ca81b8b8344d9479b2bf10639aaf35.jpg"
                                alt=""
                                width={320}
                                height={320}
                                className="h-3/4 w-full sm:w-1/4 sm:left-0 bottom-0 sm:absolute object-cover"
                            />
                            <Image
                                src="https://i.pinimg.com/564x/c8/7e/91/c87e9121048980c179e8df6e15c1a705.jpg"
                                alt=""
                                width={320}
                                height={320}
                                className="h-2/4 w-full sm:w-1/4 sm:right-0 bottom-0 sm:absolute object-cover"
                            />
                        </Marquee>
                    </div>
                </div>
            </section>

            <section
                id="section"
                className="h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
            >
                <div id="container" className="px-6 sm:px-24 w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-5xl font-bebas">Our Expertise</h3>
                    </div>
                    <div className="flex w-full h-full gap-6 flex-col sm:flex-row justify-between items-center">
                        <div className="w-full sm:w-1/2 flex justify-center relative items-center h-[330px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-xl">
                            <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">
                                Design Interior
                            </span>
                            <Image
                                src="https://i.pinimg.com/564x/48/6d/ea/486dea15b02c62b8e0d541c1a305c902.jpg"
                                alt=""
                                width={320}
                                height={320}
                                className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
                            />
                        </div>

                        <div className="w-full sm:w-1/2 flex justify-center relative items-center h-[330px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-xl">
                            <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">
                                Design Architecture
                            </span>
                            <Image
                                src="https://i.pinimg.com/564x/1a/81/fe/1a81fe40904fd6327df7f17911e0e4ad.jpg"
                                alt=""
                                width={320}
                                height={320}
                                className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
