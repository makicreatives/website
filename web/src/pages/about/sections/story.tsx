'use client'

import { Button } from "@carbon/react";
import Image from 'next/image';
import Link from "next/link";

import starIcon from '@/app/icons/ui/star.svg'

export const toParagraphs = function (story: string[]): JSX.Element[] { return story.map((str, i) => <span className="block" key={'statSP' + i}>{str} </span>) };


const resultsLi = (): React.JSX.Element[] => {

    const item = <li className='flex space-x-4 px-4'><span className=''>Have&nbsp;a&nbsp;wonderful&nbsp;day</span><Image src={starIcon} alt="star icon" className="h-4 invert dark:no-invert-0 m-auto "></Image></li>;
    const items: React.JSX.Element[] = [];
    for (let i = 0; i < 7; i++) {
        items.push(item)
    }
    return items;
}


export default function StorySection() {

    const whereItStarted: string[] = [`
Most B2B businesses we spoke to had the same problem. 
Good products, solid services, real value; but design that 
wasn't doing the work. Brands that didn't inspire confidence. 
Websites that didn't convert. Marketing assets that sat in a 
folder unused.`,

        `That gap is what started Maki Creative Studio. It wasn't only for the 
love for design; but a belief that B2B businesses deserve 
design that really moves the needle. Design that earns trust 
before you say a word.`];


    const whatWeLearned: string[] = [`
Starting a studio is humbling. The craft takes time. 
The business takes longer. There were projects that pushed 
us, processes we had to rebuild, and standards we had to 
hold even when it was easier not to.`,

        `What came out of that is a studio that doesn't cut corners — 
because we know what corners cost. Every project we take on 
is treated like it matters. Because for your business, it does.
`];

    const whereWeAre: string[] = [`
Maki Creative Studio works with B2B businesses that take 
their brand seriously. From brand identity to digital products, 
trade show booths to pitch decks — we make design work harder 
for the businesses we partner with.`,

        `Not only to look good. But to speak clearly to your customers, 
earn their trust, and move them to act. That's what we're here 
for. That's what we're building toward.
`];


    const ourStoryData = {
        "name": "Built to make design work harder for your business.",
        "description": whereItStarted,
        "challengesFaced": whatWeLearned,
        "solutionsProvided": whereWeAre,
        "images": {

            "mainImage": "/images/site/logo-rounded.png",
            "wideImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "projectImages": [""],
            "challengesFacedImages": ["https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
            "solutionsImages": ["https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
            "resultImages": ["https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

        }
    };

    return <>
        <div className="p-6">

        </div>
        <hr className="border-black border-1 dark:border-off-white1B" />
        <main className="min-h-screen flex flex-col md:flex-row">
            <section id="midPanel" className="flex-1 flex flex-col">

                <div id="projectContent" className={"flex-1 grid grid-cols-1 xl:grid-cols-2 "}>
                    <div className='flex flex-col justify-between p-8 border-b-2 border-black dark:border-off-white'>
                        <h3 id='projectName' className='font-headlines text-headline-large uppercase mb-8'>{ourStoryData?.name}</h3>
                        <div id='projectDescription' className=''>
                            <h4 className='font-headlines font-semibold text-headline-small uppercase mb-2'>Where It Started</h4>
                            <p className='mb-4 font-body  font-light space-y-4'>{toParagraphs(ourStoryData.description)}</p>
                            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                            </span>
                        </div>
                    </div>
                    <div className='xl:border-l-2 border-b-2 border-black dark:border-off-white md:p-8 order-first md:order-none'>
                        <img className='object-cover mx-auto p-2 h-80' src={ourStoryData?.images.mainImage} alt="main project image" />

                    </div>
                </div>
                <div id='imagesContent' className='md:p-8 border-b-2 border-black dark:border-off-white'>
                    <img src={ourStoryData?.images.wideImage} alt="wide image showcase" className='h-[50vh] w-full object-cover' />
                </div>
                <div className="p-6 bg-primary08 md:hidden border-b-2 border-black dark:border-off-white">

                </div>
                <div id='challengesContent' className='grid grid-col-span-1 xl:grid-cols-3 border-b-2 border-black dark:border-off-white '>
                    <div className='md:p-8 border-b-2 md:border-b-0 xl:border-r-2 border-black dark:border-off-white' >
                        <img src={ourStoryData?.images.challengesFacedImages[0]} alt="challenges faced" className=' object-cover' />
                    </div>
                    <div className='p-8 border-b-2 md:border-b-0 xl:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines font-semibold text-headline-small uppercase mb-2'>What We Learned Early</h4>
                        <p className='mb-4 font-body  font-light space-y-4'>{toParagraphs(ourStoryData?.challengesFaced)}</p>
                    </div>
                    <div></div>
                </div>
                <div id='solutionsContent' className='grid grid-cols-1 xl:grid-cols-3 border-b-2 border-black dark:border-off-white'>
                    <div className='p-8 border-b-2 md:border-b-0 xl:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines font-semibold text-headline-small uppercase mb-2'>Where We Are Now</h4>
                        <p className='mb-4 font-body font-light space-y-4'>{toParagraphs(ourStoryData?.solutionsProvided)}</p>
                        <br />
                        <Link href={'/lets-work'} >
                            <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Book a <i className="font-display lowercase text-secondary-200">15&#8202;min</i>&nbsp; call</span>
                            </Button>
                        </Link>
                    </div>
                    <div className='md:col-span-2 md:p-8 order-first md:order-none'>
                        <img src={ourStoryData?.images.solutionsImages[0]} alt="solutions provided" className='h-[50vh] w-full object-cover' />
                    </div>
                </div>
                <div id='resultsContent' className='md:p-8 '>
                    <h4 className='font-headlines text-headline-large flex uppercase place-content-center h-14  md:hidden border-y bg-black dark:bg-off-white text-white dark:text-black overflow-x-clip'>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {resultsLi()}
                        </ul>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {resultsLi()}
                        </ul>
                    </h4>
                    <img src={ourStoryData?.images.resultImages[0]} alt="results images" className='h-[50vh] w-full object-cover' />
                </div>
            </section>

        </main>
    </>
}