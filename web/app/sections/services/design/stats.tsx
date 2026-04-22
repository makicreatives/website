export interface AgencyStatistic {
    title: string,
    quantity: string,
    suffix: string,
    description: string,
}

export default function StatsSection() {

    const agencyStatistics: AgencyStatistic[] = [
        {
            title: "Brand Identities Built",
            quantity: "30",
            suffix: "+",
            description: "Logos, color systems, guidelines — built for businesses that needed to look the part fast."
        },
        {
            title: "Design Assets Created",
            quantity: "300",
            suffix: "+",
            description: "From single assets to full brand systems. Every piece is  built with intention."
        },
        {
            title: "Print Projects Delivered",
            quantity: "50",
            suffix: "+",
            description: "Packaging, merch, stationery, trade show booths — all print-ready and on-brand."
        },
        {
            title: "Average Turnaround",
            quantity: "5",
            suffix: "days",
            description: "Most design projects delivered within a week. Complex brand builds take a little longer — and are worth it."
        },
        {
            title: "Revision Rounds",
            quantity: "3",
            suffix: "max",
            description: "We get it right without going in circles. Clear briefs, sharp execution, minimal back and forth."
        },
    ]

    return <section id="stats">
        <div className="p-8 flex items-center">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto">

                <p className="">The numbers behind the work</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    We&apos;ve partnered with businesses at every stage
                    —from early startups to established brands. <br />
                    Here&apos;s what that looks like in practice.
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