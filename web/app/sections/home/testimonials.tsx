import Link from "next/link";
import Image from 'next/image';

export default function TestimonialsSection() {
    return <section id="testimonials" className={"pt-12"}>
        <h2 className="h2 font-display text-secondary-regal font-medium text-5xl px-8 mb-4 md:mb-8 mt-12">Here’s what others are saying
            <br />about us</h2>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-y border-y-black dark:border-y-off-white1B"}>
            <div className={"border-r border-r-black dark:border-r-off-white1B"}></div>
            <div className={"border-r border-r-black dark:border-r-off-white1B relative"}>
                <Image src={"/images/site/hero-banner.png"} alt={"max pete portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
            </div>

            <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                    <span className=" font-normal font-body leading-tight">&ldquo;Finally, a design studio that understands what startups need. Their work consistently shows that good design isn&apos;t about fancy tricks - it&apos;s about <b>solving real business problems.</b>&rdquo;
                        <br /><br />
                    </span>
                    <span className="text-title-medium font-medium font-title">— Mc Samuel, <br />Marketing Manager
                    </span>
                </div>
            </div>

            <div className={"border-r border-r-black dark:border-r-off-white1B relative"}>
                <Image src={"/images/site/hero-banner.png"} alt={"lisa chen portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover"></Image>
            </div>
            <div className={"border-r border-r-black dark:border-r-off-white1B"}>
                <div className=" p-8">
                    <span className=" font-normal font-body leading-tight">&ldquo;What sets them apart is their ability to translate business goals into <b>designs that actually work.</b>&rdquo;
                        <br /><br />
                    </span>
                    <span className="text-title-medium font-medium font-title">— Sarah, <br />Digital Product Lead
                    </span>
                </div>
            </div>
            <div className={"border-r border-r-black dark:border-r-off-white1B"}></div>
        </div>
        <div className={"bg-black flex justify-center my-12"}>
            <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center text-headline-large bg-linear-to-r bg-opacity-[26] from-[#e79ae7] via-[#ecd179]  to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
            </Link>
        </div>
        <hr className="border-black dark:border-off-white1B" />
    </section>
}