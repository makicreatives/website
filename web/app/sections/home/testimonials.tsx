import Link from "next/link";
// import Image from 'next/image';

export default function TestimonialsSection() {

    type AgencyTestimonial = {
        id: string
        name: string
        role: string
        company: string
        quote: string
        avatarUrl?: string
        mediaUrl?: string
        isVideo?: boolean
        rating?: number
    }

    const agencyTestimonials: AgencyTestimonial[] = [
        {
            id: 'testimonial-1',
            name: 'Lerato Dlamini',
            role: 'Founder',
            company: 'Kasi Collective',
            quote: "We needed a brand that spoke to our people. What we got was a full identity that stopped people in their tracks. Best investment we made that year.",
            avatarUrl: 'https://images.pexels.com/photos/33149909/pexels-photo-33149909.jpeg',
            rating: 5
        },
        {
            id: 'testimonial-2',
            name: 'Marcus Webb',
            role: 'Head of Marketing',
            company: 'Stackline B2B',
            quote: "Our pitch deck went from a mess of slides to something we were proud to put in front of investors. Closed our round two weeks after.",
            avatarUrl: 'https://images.pexels.com/photos/17824399/pexels-photo-17824399.jpeg',
            rating: 5
        },
        {
            id: 'testimonial-3',
            name: 'Ayasha Nkosi',
            role: 'CEO',
            company: 'Bloom HR',
            quote: "The website redesign brought in three qualified leads in the first month. Clean, fast, and actually converts. Exactly what we asked for.",
            avatarUrl: '/images/testimonials/ayasha.png',
            rating: 5
        },
        {
            id: 'testimonial-4',
            name: 'James Osei',
            role: 'Operations Director',
            company: 'TradeReach Africa',
            quote: "Showed up to the expo with a booth that made our competitors look like they printed at home. We had the best stand on the floor.",
            avatarUrl: 'https://images.pexels.com/photos/29440598/pexels-photo-29440598.jpeg',
            rating: 5
        },
        {
            id: 'testimonial-5',
            name: 'Priya Naidoo',
            role: 'Content Lead',
            company: 'Foundry Labs',
            quote: "Our ebook went from a rough Word doc to a lead magnet people actually download. Downloads went up 3x after the redesign.",
            avatarUrl: 'https://images.pexels.com/photos/31357949/pexels-photo-31357949.jpeg',
            rating: 5
        },
    ]

    return <section id="testimonials" className={"pt-12"}>

        <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large p-8  mb-4 md:mb-8 mt-12 space-y-8">
            <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                Don&apos;t take our word for it.
            </span>
            <p className="leading-tight">
                Here&apos;s what clients are saying —
            </p>
        </h2>

        <div className="p-8 container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                agencyTestimonials.map((testimonial, index) => {
                                    return <div key={"statId-" + index} className="bg-offWhite shadow-sm mb-2 hover:shadow hover:shadow-primary-400 hover:bg-primary-50 transition-all">   
                                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                            <span className="p-1 px-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                                {testimonial.role}
                                            </span>
                                        </h2>
                                        <div className="relative h-80 w-full">
                                            <div className="bg-primary0 bg-cover saturate-0 flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${testimonial.avatarUrl})`}}>
                                            </div> 
                                        </div>
                                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                            <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                                {testimonial.name} @ {testimonial.company}
                                            </span>
                                        </h2>                                             
                                        <p className=" leading-relaxed p-4 text-xl mb-4 md:mb-8 ">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                })
            }
        </div>
        <div className={"bg-black flex justify-center my-12"}>
            <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center text-headline-large bg-linear-to-r bg-opacity-[26] from-[#e79ae7] to-[#80e8ec] border border-black hover:text-gray1 hover:transition-500 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm">
                lets discuss your vision
            </Link>
        </div>
        {/* <hr className="border-black dark:border-off-white1B" /> */}
    </section>
}