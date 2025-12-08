import Image from 'next/image';

import webIcon from '@/app/icons/ui/web.svg'
import devicesAppsIcon from '@/app/icons/ui/devices-apps.svg'
import docSentimentIcon from '@/app/icons/ui/doc-sentiment.svg'
import searchAdvIcon from '@/app/icons/ui/search-advanced.svg'
import taskAddIcon from '@/app/icons/ui/task-add.svg'

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-[#228B22]/10"}>
        <h2 className="h2 font-display text-display-medium md:text-5xl text-primary mb-4 md:mb-8 p-8">It&apos;s the design services that grow —<br /> with your business</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 p-8">
            <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                    <p className="text-title-large font-bold mb-2 uppercase">Web design</p>
                    <p className="text-label-medium text-primary font-body mb-4 ">Websites that work as hard as you do.</p>
                    <p className="text-body-medium font-body mb-4">From engaging homepages to conversion-focused layouts that turn visitors into customers.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                    <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/web-design-abstract.png)] flex items-center justify-center h-full w-full">
                        <Image src={webIcon} width={320} alt='web icon' className={'h-24 opacity-80'} />
                    </div>
                </div>
            </div>

            <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                    <p className="text-title-large font-bold mb-2 uppercase">UI/UX design</p>
                    <p className="text-label-medium text-primary font-body mb-4 ">Make every interaction count.</p>
                    <p className="text-body-medium font-body mb-4">User-friendly interfaces that keep your customers coming back for more.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                    <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/uiux-design-abstract.png)] flex items-center justify-center h-full w-full">
                        <Image src={devicesAppsIcon} width={320} alt='uI/ux icon' className={'h-24 opacity-80'} />
                    </div>
                </div>
            </div>

            <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                    <p className="text-title-large font-bold mb-2 uppercase">SEO</p>
                    <p className="text-label-medium text-primary font-body mb-4 ">Get found by the right people.</p>
                    <p className="text-body-medium font-body mb-4">We build SEO right into your design, helping your business climb search rankings naturally.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                    <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/seo-abstract.png)] flex items-center justify-center h-full w-full">
                        <Image src={searchAdvIcon} width={320} alt='search advanced icon' className={'h-24 opacity-80'} />
                    </div>
                </div>
            </div>

            <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                    <p className="text-title-large mb-2 font-bold uppercase">Landing Pages</p>
                    <p className="text-label-medium text-primary font-body mb-4 ">Turn clicks into customers with landing pages that convert.</p>
                    <p className="text-body-medium font-body mb-4">Clear, compelling, and crafted for your specific audience.</p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                    <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full">
                        <Image src={docSentimentIcon} width={320} alt='document sentiment icon' className={'h-24 opacity-80'} />
                    </div>
                </div>
            </div>

            <div className="bg-off-white1B p-8 flex flex-col justify-between">
                <div>
                    <p className="text-title-large font-bold mb-2 uppercase">Additional Services</p>
                    <p className="text-label-medium text-primary font-body mb-4 ">All your design needs under one roof,
                        minus the complexity</p>
                    <p className="text-body-medium font-body mb-4">
                        — Brand Identity Design <br />
                        — Social Media Graphics <br />
                        — Email Templates <br />
                        — Digital Marketing Assets <br />
                        — Print-Ready Designs <br />
                    </p>
                </div>
                <div className="relative h-80 w-full mx-auto ">
                    <div className="bg-gray-300 rounded-md bg-cover bg-[url(/images/site/extra-services-abstract.png)] flex items-center justify-center h-full w-full">
                        <Image src={taskAddIcon} width={320} alt='task add icon' className={'h-24 opacity-80'} />
                    </div>
                </div>
            </div>

        </div>
    </section>
}