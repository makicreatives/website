export interface AgencyStatistic {
    title: string,
    quantity: string,
    suffix: string,
    description: string,
}

export default function StatsSection() {

    const agencyStatistics: AgencyStatistic[] = [
        {
            title: "Marketing Assets Made",
            quantity: "150",
            suffix: "+",
            description: "Social graphics, email templates, ad creatives, brochures — built to be used, no more filing away."
        },
        {
            title: "Platforms Designed For",
            quantity: "8",
            suffix: "+",
            description: "LinkedIn, Instagram, Facebook, Google, email, print and more — consistent across every channel."
        },
        {
            title: "Lead Magnets Designed",
            quantity: "20",
            suffix: "+",
            description: "Ebooks, reports, checklists — designed to pull the right clients in and keep them engaged."
        },
        {
            title: "Email Templates Built",
            quantity: "30",
            suffix: "+",
            description: "Clean, on-brand email designs that render correctly in every inbox and drive action."
        },
        {
            title: "Average Turnaround",
            quantity: "3",
            suffix: "days",
            description: "Marketing assets move fast. So do we. Most requests delivered within 72 hours."
        },
    ]

    return <section id="stats">
        <div className="p-8 flex items-center">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto">

                <p className="">Marketing output, by the numbers</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    Assets built, platforms covered, and campaigns supported — <br className="hidden md:block" /> here&apos;s the work behind the results.
                </p>

            </h2>
        </div>
        <div className="p-8 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {
                agencyStatistics.map((stat, index) => {
                    return <div key={"statId-" + index} className="bg-offWhite shadow-sm mb-2 hover:shadow-sm hover:shadow-primary-400 hover:bg-primary-50 transition-all">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl mb-4 md:mb-8 space-y-8">
                            <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                {stat.title}
                            </span>
                            <p className="leading-tight px-4 text-primary">
                                {stat.quantity} {stat.suffix}

                            </p>
                        </h2>
                        <p className=" leading-relaxed p-4 text-xl">
                            {stat.description}
                        </p>
                    </div>
                })
            }
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}