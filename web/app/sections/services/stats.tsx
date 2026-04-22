export interface AgencyStatistic {
    title: string,
    quantity: string,
    suffix: string,
    description: string,
}

export default function StatsSection() {

    const agencyStatistics: AgencyStatistic[] = [
        {
            title: "Services Offered",
            quantity: "20",
            suffix: "+",
            description: "Design, digital, and marketing — everything your business needs under one roof."
        },
        {
            title: "Assets Delivered",
            quantity: "300",
            suffix: "+",
            description: "Brand systems, websites, decks, print — delivered across industries and on time."
        },
        {
            title: "Client Retention",
            quantity: "85",
            suffix: "%",
            description: "Most clients come back. And that's not just luck —  it's the consistent work that delivers."
        },
        {
            title: "Average Turnaround",
            quantity: "5",
            suffix: "days",
            description: "From brief to delivery. No chasing, or delays."
        },
        {
            title: "Response Time",
            quantity: "< 24",
            suffix: "hrs",
            description: "Every brief and revision gets a fast, direct response. No account manager issues in between."
        },
    ]

    return <section id="stats">
        <div className="p-8 flex items-center">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto">

                <p className="">Design work, by the numbers.</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    Brand identities, print, decks, and more — here&apos;s what two years of focused design output looks like.
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