export interface AgencyStatistic {
    title: string,
    quantity: string,
    description: string,
}

export default function StatsSection() {

    const agencyStatistics: AgencyStatistic[] = [
        {
            title: "Average Turnaround",
            quantity: "5 days",
            description: "From brief to delivery. Consistent timelines that keep your projects moving"
        },
        {
            title: "Client Retention",
            quantity: "85%",
            description: "Partners who return because the work delivers results, not just pixels"
        },
        {
            title: "Years in business",
            quantity: "2+",
            description: "Trusted by brands who need reliable creative execution at scale"
        },
        {
            title: "Design Assets Created",
            quantity: "300+",
            description: "From landing pages to full brand systems—built for growth"
        },
        // {
        //     title: "Countries Served",
        //     quantity: "15+",
        //     description: "Remote-first collaboration with clients across time zones"
        // },
        {
            title: "Team Response Time",
            quantity: "< 24hrs",
            description: "Available when you need us. No waiting days for feedback or revisions"
        },
        // {
        //     title: "",
        //     quantity: "",
        //     description: ""
        // },
        // {
        //     title: "",
        //     quantity: "",
        //     description: ""
        // },
    ]

    return <section id="stats">

        <div className="p-8 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {
                agencyStatistics.map((stat, index) => {
                    return <div key={"statId-" + index} className="bg-offWhite">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl mb-4 md:mb-8 space-y-8">
                            <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                {stat.title}
                            </span>
                            <p className="leading-tight px-4 text-primary">
                                {stat.quantity}

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