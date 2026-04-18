import Link from "next/link";
// import Image from 'next/image';

export default function TestimonialsSection() {
    return <section id="testimonials" className={"pt-12"}>

        <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large p-8  mb-4 md:mb-8 mt-12 space-y-8">
            <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                Don&apos;t take our word for it.
            </span>
            <p className="leading-tight">
                Here&apos;s what clients are saying —

            </p>
        </h2>

        <div>

        </div>
        <div className={"bg-black flex justify-center my-12"}>
            <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center text-headline-large bg-linear-to-r bg-opacity-[26] from-[#e79ae7] to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
            </Link>
        </div>
        <hr className="border-black dark:border-off-white1B" />
    </section>
}