import Image from 'next/image';


import shareKnowledgeIcon from '@/app/icons/ui/share-knowledge.svg'
import partnershipIcon from '@/app/icons/ui/partnership.svg'
import turnaroundIcon from '@/app/icons/ui/turnaround.svg'
import futureDesignsIcon from '@/app/icons/ui/future-designs.svg'

export default function BenefitsSection() {
    return <section id="benefits" className={"pt-12"}>
        <div className="p-8 pb-16 bg-radial-[at_25%_25%] from-sky-200/30 via-accent3/30 to-primary1B/10 to-90% backdrop-blur-3xl">
            <h2 className="h2 font-display text-secondary font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mt-12 space-y-8">
                <span className="text-xl font-headlines font-medium">Should you have us,— for your design partner ?</span>
                <p className="">Here&apos;s what you&apos;ll get </p>

            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                    <div>
                        <p className="text-title-large mb-6">Flexible Collaboration</p>
                        <p className="text-body-large font-body mb-4">Work with us from anywhere, anytime. Our remote setup means we&apos;re always just a message away.</p>
                    </div>
                    <div className="relative h-80 w-64 mx-auto ">
                        <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/collaboration-abstract.png)] flex items-center justify-center h-full w-full">
                            <Image src={shareKnowledgeIcon} width={320} alt='share knowledge icon' className={'h-24 opacity-80'} />
                        </div>
                    </div>
                </div>
                <div className="bg-off-white1B p-8  flex flex-col justify-between">
                    <div>
                        <p className="text-title-large mb-6">Partnership Approach</p>
                        <p className="text-body-large font-body mb-4">We grow together. Get a dedicated design partner who understands your business goals and vision.</p>
                    </div>
                    <div className="relative h-80 w-64 mx-auto ">
                        <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/partnership-abstract.png)] flex items-center justify-center h-full w-full">
                            <Image src={partnershipIcon} width={320} alt='partnership icon' className={'h-24 opacity-80'} />
                        </div>
                    </div>
                </div>
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                    <div>
                        <p className="text-title-large mb-6">Quick Turnaround</p>
                        <p className="text-body-large font-body mb-4">We understand your speed. Get your designs when you need them, not weeks later.</p>
                    </div>
                    <div className="relative h-80 w-64 mx-auto ">
                        <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/turnaround-abstract.png)] flex items-center justify-center h-full w-full">
                            <Image src={turnaroundIcon} width={320} alt='turnaround icon' className={'h-24 opacity-80'} />
                        </div>
                    </div>
                </div>
                <div className="bg-off-white1B p-8 flex flex-col justify-between">
                    <div>
                        <p className="text-title-large mb-6">Future Proof designs</p>
                        <p className="text-body-large font-body mb-4">Scalable solutions that grow with your business. No need to start from scratch as you expand.</p>
                    </div>
                    <div className="relative h-80 w-64 mx-auto ">
                        <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/future-designs-abstract.png)] flex items-center justify-center h-full w-full">
                            <Image src={futureDesignsIcon} width={320} alt='future designs icon' className={'h-24 opacity-80'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="border-black dark:border-off-white1B" />
        <div className={"flex justify-center my-12"}>
            <div className="flex flex-wrap justify-center items-center px-8">
                <span className="relative h-28 w-24 ">
                    <Image src={"/images/site/paul-rand.png"} alt={"paul rand portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px]"></Image>
                </span>
                <div className=" p-8">
                    <span className=" font-normal font-body leading-tight">&ldquo;<b>Design is the silent ambassador of your brand.</b>&rdquo;
                        <br />
                    </span>
                    <span className="text-title-medium font-medium font-title">— Paul Rand, Legendary Designer
                    </span>
                </div>
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B" />
    </section>;
}