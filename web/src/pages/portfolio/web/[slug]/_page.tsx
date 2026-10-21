import softwareProjects from '@/src/data/projects/software.json';
import { Header, Footer } from "@/src/components";
// import Image from 'next/image';
// import Link from "next/link";
// import type { Metadata } from 'next'

import circleIcon from '@/src/icons/ui/circle.svg'
import dTriangleIcon from '@/src/icons/ui/down-triangle.svg'
import triangleIcon from '@/src/icons/ui/triangle.svg'
import squareIcon from '@/src/icons/ui/square.svg'
import starIcon from '@/src/icons/ui/star.svg'
// import { notFound } from 'next/navigation';

export interface PageProps{
    urlSlug: string;
}

// export async function generateStaticParams() {
//     const posts = softwareProjects;

//     return posts.map((post) => ({
//         slug: post.name.trim().replaceAll(/ /g, '-').toLowerCase(),
//     }))
// }


// type Props = {
//     params: Promise<{ slug: string }>
//     // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }

// export async function generateMetadata(
//     { params }: Props,
//     // parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const { slug } = await params

//     // fetch data
//     const post = softwareProjects.find(post => post.name.trim().replaceAll(/ /g, '-').toLowerCase() === slug)

//     // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || []

//     return {
//         title: post?.name,            // Dynamic title for the post
//         description: post?.description ?? 'Software portfolio project',  // Dynamic description
//         keywords: post?.tags.join(', ') ?? 'software, portfolio',  // Optional dynamic keywords
//         openGraph: {
//             images: [post?.images.mainImage??'',],
//         },
//     }
// }



// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ urlSlug, }: Readonly<PageProps>) {
    const slug = urlSlug

    const projectData = softwareProjects.filter((project) => project.name.trim().replaceAll(/ /g, '-').toLowerCase() === slug);
    //check if there's no value
    if (projectData[0] == null) { return new Response(null, { status: 404 }) /* notFound() */ };


    const resultsLi = (): React.JSX.Element[] => {

        const item = <li className='flex space-x-4 px-4'><span className=''>Results</span><img src={starIcon.src} alt="star icon" className="h-4 invert dark:no-invert-0 m-auto " /></li>;
        const items: React.JSX.Element[] = [];
        for (let i = 0; i < 13; i++) {
            items.push(item)
        }
        return items;
    }


    return <>
        <Header activeLink="portfolio"
        // hTopColor="bg-[#22478C]" hBottomColor="bg-[#002466]"
        ></Header>
        <div id="carouselContentTop" className={"hidden md:flex absolute w-screen h-14 md:h-16 border-b md:border-b-2 border-black dark:border-off-white "}>
            <div id="" className="w-full inline-flex flex-nowrap overflow-hidden space-x-4 ">
                <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                    <img src={triangleIcon.src} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto " />
                    <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
                    <img src={circleIcon.src} alt="circle icon" className="h-8 mx-4 dark:invert m-auto " />
                    <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
                    <img src={squareIcon.src} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto " />
                    <img src={circleIcon.src} alt="triangle icon" className="h-8 mx-4 dark:invert m-auto " />
                </div>
            </div>
        </div>
        <main className="min-h-screen flex flex-col md:flex-row">
            <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-2 border-black dark:border-off-white place-content-center ">
                    <a href={"/portfolio/web/"} title="back to view all">
                        <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
                            <img src={dTriangleIcon.src} alt="triangle icon" className="h-8 dark:invert m-auto rotate-90" />
                        </button>
                    </a>
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                            <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Portfolio'}</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.name ?? 'Our Creative Playground'}</p>
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
                    <a href={"/portfolio"} title="back to view all">
                        <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:cursor-pointer hover:bg-off-white hover:p-4 duration-200 hover:invert">
                            <img src={circleIcon.src} alt="triangle icon" className="h-8 dark:invert m-auto rotate-90" />
                        </button>
                    </a>
                </div>
            </section>
            <section id="midPanel" className="flex-1 flex flex-col">
                <div id="carouselContent" className={" h-14 md:h-16 border-b md:border-b-2 border-black dark:border-off-white flex "}>
                    <div id="" className="md:hidden w-full inline-flex flex-nowrap overflow-hidden space-x-4 ">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                            <p className="font-display text-display-large m-auto text-nowrap ">Here&apos;s a taste of what happens when passion meets pixels</p>
                            <img src={circleIcon.src} alt="circle icon" className="h-8 mx-4 dark:invert m-auto " />
                        </div>
                    </div>

                </div>
                <div id="projectContent" className={"flex-1 grid grid-cols-1 md:grid-cols-2 "}>
                    <div className='flex flex-col justify-between p-8 border-b-2 border-black dark:border-off-white'>
                        <h3 id='projectName' className='font-headlines text-headline-large uppercase mb-8'>{projectData[0]?.name}</h3>
                        <div id='projectDescription' className=''>
                            <h4 className='font-headlines text-headline-small uppercase mb-2'>Brief Description</h4>
                            <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                                <div className='flex'>
                                    <a href={projectData[0]?.link ?? ''} target='_blank' className='pl-2 flex text-secondaryRegal border-b-2 border-b-secondaryRegal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow-sm hover:duration-150'>
                                        <span>Visit Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                                        </span>
                                    </a>
                                </div>
                                <div className='flex'>
                                    <a href={'/lets-work'} className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                                        <span>Start Your Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                                        </span>
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='md:border-l-2 border-b-2 border-black dark:border-off-white md:p-8'>
                        <img className='object-cover' src={projectData[0]?.images.mainImage} alt="main project image" />

                    </div>
                </div>
                <div id='imagesContent' className='md:p-8 border-b-2 border-black dark:border-off-white'>
                    <img src={projectData[0]?.images.wideImage} alt="wide image showcase" className='h-[50vh] w-full object-cover' />
                </div>
                <div id='challengesContent' className='grid grid-col-span-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white '>
                    <div className='md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white' >
                        <img src={projectData[0]?.images.challengesFacedImages[0]} alt="challenges faced" className=' object-cover' />
                    </div>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Challenges Faced</h4>
                        <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                    </div>
                    <div></div>
                </div>
                <div id='solutionsContent' className='grid grid-cols-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white'>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Solutions Provided</h4>
                        <p className='mb-4 font-body text-body-medium'>{projectData[0]?.description}</p>
                    </div>
                    <div className='md:col-span-2 md:p-8'>
                        <img src={projectData[0]?.images.solutionsImages[0]} alt="solutions provided" className='h-[50vh] w-full object-cover' />
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
                    <img src={projectData[0]?.images.resultImages[0]} alt="results images" className='h-[50vh] w-full object-cover' />
                </div>
            </section>
            <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-2  border-black dark:border-off-white">
                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-2 border-black dark:border-off-white place-content-center ">
                    <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
                        <img src={starIcon.src} alt="star icon" className="h-8 dark:invert m-auto " /></button>
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                            <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Portfolio'}</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Creative Playground'}</p>
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-2 border-black dark:border-off-white place-content-center ">
                    <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
                        <img src={starIcon.src} alt="star icon" className="h-8 dark:invert m-auto " /></button>
                </div>
            </section>
        </main>
        <Footer
        // fTopColor="bg-[#22228C]" fBottomColor="bg-[#000066]"
        ></Footer>
    </>;
}