export interface AgencyStatistic {
    title: string,
    quantity: string,
    suffix: string,
    description: string,
}

export default function StatsSection() {

    const agencyStatistics: AgencyStatistic[] = [
        {
            title: "Average Turnaround",
            quantity: "5",
            suffix: "days",
            description: "From brief to delivery. No chasing after delays — its all consistent timelines that keep your projects moving."
        },
        {
            title: "Client Retention",
            quantity: "85",
            suffix: "%",
            description: "Most clients come back. They appreciate the good work."
        },
        {
            title: "Years in Business",
            quantity: "2",
            suffix: "+",
            description: "Young studio, Serious output. Every project gets treated like it's the one that matters most, Because It Is."
        },
        {
            title: "Assets Delivered",
            quantity: "300",
            suffix: "+",
            description: "Brand systems, pitch decks, websites, print — built across industries and delivered on time."
        },
        {
            title: "Response Time",
            quantity: "< 24",
            suffix: "hrs",
            description: "You'll never wait days for an answer. Every brief, question, and revision gets a fast turnaround."
        },
        {
            title: "Happy Clients",
            quantity: "15",
            suffix: "+",
            description: "Small number, high bar. Every client we've worked with has left with something they're proud of."
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