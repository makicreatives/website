'use client'

export default function StorySection() {
    const ourStoryData = {
        "name": "Passion, Perseverance & grit in pursuit (The One) ",
        "description": "Maki Creative Studio isn't just a name - it's a promise. A promise to deliver designs that don't just look pretty, but solve real problems to connect you with your customers . \n\nFounded by M. Shoko, our team brings together a perfect blend of creativity, technical know-how, and pragmatism.",
        "link": "https://mcsamuelshoko.github.io/readme/",
        "type":"product branding",
        "tags": ["branding","product_branding","logo","ui"],
        "challengesFaced": "Lorem ipsum dolor sit amet consectetur. A arcu egestas diam non leo nulla sapien mi. Ultrices elit tortor nulla rhoncus habitasse viverra proin neque sit. Pellentesque amet tortor eu pretium. Est ut ac sit netus risus eget enim. Suspendisse mi sit adipiscing diam mi quis vitae faucibus. Lorem ipsum dolor sit amet consectetur. A arcu egestas diam non leo nulla sapien mi. Ultrices elit tortor nulla rhoncus habitasse viverra proin neque sit. Pellentesque amet tortor eu pretium. Est ut ac sit netus risus eget enim. Suspendisse mi sit adipiscing diam mi quis vitae faucibus.",
        "solutionsProvided": "Lorem ipsum dolor sit amet consectetur. A arcu egestas diam non leo nulla sapien mi. Ultrices elit tortor nulla rhoncus habitasse viverra proin neque sit. Pellentesque amet tortor eu pretium. Est ut ac sit netus risus eget enim. Suspendisse mi sit adipiscing diam mi quis vitae faucibus. Lorem ipsum dolor sit amet consectetur. A arcu egestas diam non leo nulla sapien mi. Ultrices elit tortor nulla rhoncus habitasse viverra proin neque sit. Pellentesque amet tortor eu pretium. Est ut ac sit netus risus eget enim. Suspendisse mi sit adipiscing diam mi quis vitae faucibus.",
        "images": {
            
            "mainImage": "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            "wideImage":"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "projectImages": [""],            
            "challengesFacedImages":["https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
            "solutionsImages":["https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
            "resultImages": ["https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
            
        }
    };

    return <>
        <div className="p-6">

        </div>
        <hr className="border-black border-1 dark:border-off-white1B" />
        <main className="min-h-screen flex flex-col md:flex-row">
            <section id="midPanel" className="flex-1 flex flex-col">

                <div id="projectContent" className={"flex-1 grid grid-cols-1 md:grid-cols-2 "}>
                    <div className='flex flex-col justify-between p-8 border-b-2 border-black dark:border-off-white'>
                        <h3 id='projectName' className='font-headlines text-headline-large uppercase mb-8'>{ourStoryData?.name}</h3>
                        <div id='projectDescription' className=''>
                            <h4 className='font-headlines text-headline-small uppercase mb-2'>Brief Description</h4>
                            <p className='mb-4 font-body '>{ourStoryData.description}</p>
                            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                                {/* <div className='flex'>
                                    <Link href={'ourStoryData?.link' } target='_blank' className='pl-2 flex text-secondary-regal border-b-2 border-b-secondary-regal sm:border-b-secondary font-headlines text-headline-small uppercase  hover:text-white hover:bg-secondary hover:shadow-sm hover:duration-150'>
                                        <span>Visit Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                                        </span>
                                    </Link>
                                </div>
                                <div className='flex'>
                                    <Link href={'/lets-work'} className='pl-2 flex text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                                        <span>Start Your Project</span>
                                        <span>
                                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                                        </span>
                                    </Link>
                                </div> */}
                            </span>
                        </div>
                    </div>
                    <div className='md:border-l-2 border-b-2 border-black dark:border-off-white md:p-8'>
                        <img className='object-cover' src={ourStoryData?.images.mainImage} alt="main project image" />

                    </div>
                </div>
                <div id='imagesContent' className='md:p-8 border-b-2 border-black dark:border-off-white'>
                    <img src={ourStoryData?.images.wideImage} alt="wide image showcase" className='h-[50vh] w-full object-cover' />
                </div>
                <div id='challengesContent' className='grid grid-col-span-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white '>
                    <div className='md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white' >
                        <img src={ourStoryData?.images.challengesFacedImages[0]} alt="challenges faced" className=' object-cover' />
                    </div>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Challenges Faced</h4>
                        <p className='mb-4 font-body '>{ourStoryData?.challengesFaced}</p>
                    </div>
                    <div></div>
                </div>
                <div id='solutionsContent' className='grid grid-cols-1 md:grid-cols-3 border-b-2 border-black dark:border-off-white'>
                    <div className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-off-white'>
                        <h4 className='font-headlines text-headline-small uppercase mb-2'>Solutions Provided</h4>
                        <p className='mb-4 font-body '>{ourStoryData?.solutionsProvided}</p>
                    </div>
                    <div className='md:col-span-2 md:p-8'>
                        <img src={ourStoryData?.images.solutionsImages[0]} alt="solutions provided" className='h-[50vh] w-full object-cover' />
                    </div>
                </div>
                <div id='resultsContent' className='md:p-8 '>
                    <h4 className='font-headlines text-headline-large flex uppercase place-content-center h-14  md:hidden border-y bg-black dark:bg-off-white text-white dark:text-black overflow-x-clip'>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {'resultsLi()'}
                        </ul>
                        <ul className='flex space-x-2 justify-center items-center animate-infinite-scroll'>
                            {'resultsLi()'}
                        </ul>
                    </h4>
                    <img src={ourStoryData?.images.resultImages[0]} alt="results images" className='h-[50vh] w-full object-cover' />
                </div>
            </section>

        </main>
    </>
}