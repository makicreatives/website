'use client'
import Link from "next/link";



export default function TeamSection() {

    type AgencyTeamMember = {
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

    const agencyTeam: AgencyTeamMember[] = [
        {
            id: 'team-member-1',
            name: 'Mc Samuel Shoko',
            role: 'Founder & Principal Designer',
            company: '',
            quote: "We needed a brand that spoke to our people. What we got was a full identity that stopped people in their tracks. Best investment we made that year.",
            avatarUrl: 'https://avatars.githubusercontent.com/u/66551316?v=4',
            rating: 5
        },
    ];

    return <div className="">
        
        <div></div>
        <section id="team-members" className={"min-h-screen"}>

            <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large p-8  mb-4 md:mb-8 pt-12 space-y-8">
                <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                    A blend of creativity, technical know-how, and pragmatism
                </span>
                <p className="leading-tight">
                    &ldquo;Good people, Good times.&rdquo; Here&apos;s us —
                </p>
            </h2>

            <div className=" container mx-auto flex flex-wrap justify-around pb-8 ">
                {
                    agencyTeam.map((teamMember, index) => {
                        return <div key={"statId-" + index} className="max-w-80 bg-offWhite shadow-sm mb-2 hover:shadow hover:shadow-primary-400 hover:bg-primary-50 transition-all">
                            <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                <span className="p-1 px-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                    {teamMember.role}
                                </span>
                            </h2>
                            <div className="relative h-80 w-full">
                                <div className="bg-primary0 bg-cover saturate-0 flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${teamMember.avatarUrl})` }}>
                                </div>
                            </div>
                            <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                <span className="p-1 px-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                    {teamMember.name} 
                                    {/* @ {teamMember.company} */}
                                </span>
                            </h2>
                            <div></div>
                            {/* <p className=" leading-relaxed p-4 text-lg mb-4 md:mb-8 ">
                                {teamMember.quote}
                            </p> */}
                        </div>
                    })
                }
            </div>
            <div className={"bg-primary0 flex justify-center py-8 mt-12 pb-12"}>
                <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center md:text-headline-large text-off-white1B bg-primary1B border border-black hover:text-black hover:transition-all duration-300 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm hover:cursor-pointer  focus:ring-4 focus:ring-primary1B leading-5 rounded-full">
                    Book a 15&#8202;min call
                </Link>
            </div>        
            {/* <hr className="border-black dark:border-off-white1B" /> */}
        </section>
    </div>;
}

