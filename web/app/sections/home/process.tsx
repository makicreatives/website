import Image from 'next/image';

export default function ProcessSection() {
    return <section id="process" className={""}>
        <div className="border-y border-y-black dark:border-y-off-white  mb-4 md:mb-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <h2 className="h2 font-display  text-display-medium md:text-5xl p-8 border-r border-r-black dark:border-r-off-white">Using simple steps to deliver a stunning design</h2>
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
                        <p className="text-2xl font-technical uppercase font-bold mb-6">1. Discovery Call </p>
                        <p className="text-body-large text-lg mb-4">Let&apos;s talk about your vision. No complicated briefs — just a conversation about where you want to go.</p>
                    </div>


                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/arrow.png"} alt={"arrow image"} layout="fill" className="bg-gray-300 bg-opacity-40 mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-2xl font-technical uppercase font-bold mb-6">2. Strategy & Planning </p>
                        <p className="text-body-large text-lg mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                    </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/cards.png"} alt={"cutout cards image"} layout="fill" className="bg-gray-300 bg-opacity-40  mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-2xl font-technical uppercase font-bold mb-6">3. Design & Revisions </p>
                        <p className="text-body-large text-lg mb-4">We map out your design needs and create a clear plan that fits your timeline and budget.</p>
                    </div>
                </div>

                <div className="border-r border-r-black dark:border-r-off-white">
                    <div className="p-8 h-8"></div>
                    <div className={"relative h-96  border-y border-y-black dark:border-y-off-white duration-1000 ease-in-out hover:bg-radial-[at_25%_25%] from-sky-200 via-accent3/50 to-accent2/50 to-90%"}>
                        <Image src={"/images/site/handshake.png"} alt={"handshake neon sign"} layout="fill" className="bg-gray-300 bg-opacity-40 mix-blend-luminosity object-cover"></Image>
                    </div>
                    <div className="p-8">
                        <p className="text-2xl font-technical uppercase font-bold mb-6">4. Launch & Support </p>
                        <p className="text-body-large text-lg mb-4">We deliver your designs and stick around to make sure everything works perfectly.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-8 md:p-12">

        </div>
        <hr className="border-black dark:border-off-white1B" />

    </section>
}