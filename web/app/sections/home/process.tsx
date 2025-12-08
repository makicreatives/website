import Link from "next/link";
import Image from 'next/image';

export default function ProcessSection() {
    return <section id="process" className={""}>
        <div className="border-y border-y-black dark:border-y-off-white  mb-4 md:mb-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <h2 className="h2 font-display  text-display-medium md:text-5xl p-8 border-r border-r-black dark:border-r-off-white">Using simple steps to a stunning design</h2>
                <div>
                    <div className="h-48 mx-auto overflow-hidden relative bg-gray-300 bg-opacity-40 ">
                        <div
                            className="w-full h-97 absolute animate-[scroll_10s_linear_infinite] ease-in-out bg-cover bg-center mix-blend-luminosity"
                            style={{
                                backgroundImage: `url('/images/site/waves-abstract.png')`,
                            }}
                        />
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-t-black dark:border-t-off-white">
                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/telephone.png"} alt={"telephone image"} layout="fill" className="bg-gray-3300 bg-opacity-40 mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-title-large font-bold mb-6">1. Discovery Call </p>
                        <p className="text-body-large font-body mb-4">Let&apos;s talk about your vision. No complicated briefs — just a conversation about where you want to go.</p>
                    </div>


                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/arrow.png"} alt={"arrow image"} layout="fill" className="bg-gray-300 bg-opacity-40 mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-title-large font-bold mb-6">2. Strategy & Planning </p>
                        <p className="text-body-large font-body mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                    </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/cards.png"} alt={"cutout cards image"} layout="fill" className="bg-gray-300 bg-opacity-40  mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-title-large font-bold mb-6">3. Design & Revisions </p>
                        <p className="text-body-large font-body mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                    </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/handshake.png"} alt={"handshake neon sign"} layout="fill" className="bg-gray-300 bg-opacity-40 mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-title-large font-bold mb-6">4. Launch & Support </p>
                        <p className="text-body-large font-body mb-4">We deliver your designs and stick around to make sure everything works perfectly.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={"bg-black flex justify-center my-12"}>
            <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-headline-large text-center bg-linear-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
            </Link>
        </div>
        <hr className="border-black dark:border-off-white1B" />

    </section>
}