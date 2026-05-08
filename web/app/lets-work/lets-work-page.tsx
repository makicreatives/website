'use client'
import { MegaMenu, Footer, Faq } from "@/app/components";
// import FAQSection from "../about/sections/faq";
import { faqs } from "@/app/about/sections/faq";


// import Image from 'next/image';
import Link from "next/link";
import { Button } from "@carbon/react";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
// import triangleIcon from '@/app/icons/ui/triangle.svg'
// import squareIcon from '@/app/icons/ui/square.svg'
// import starIcon from '@/app/icons/ui/star.svg'
import React from 'react';
import { WorkCard, WorkCardProps } from "../components/WorkCard";



// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function LetsWorkPage() {

  const availableServicesA: WorkCardProps[] = [
    {
      imageUrl: "/images/site/web-design-abstract.png",
      title: "Web design",
      description: "From engaging homepages to conversion-focused layouts that turn visitors into customers.",
      startLink: "/form?q=web",
      exploreLink: "/portfolio/design?q=web"
    },
    {
      imageUrl: "/images/site/landing-pages-abstract.png",
      title: "Landing pages",
      description: "Turn clicks into customers with landing pages that convert.Clear, compelling, and crafted for your specific audience.",
      startLink: "/form?q=landing-page",
      exploreLink: "/portfolio/design?q=landing"
    },
    {
      imageUrl: "/images/site/uiux-design-abstract.png",
      title: "UI/UX design",
      description: "User-friendly interfaces that keep your customers coming back for more.Make every interaction count.",
      startLink: "/form?q=ui_ux",
      exploreLink: "/portfolio/design?q=ui_ux"
    },
    {
      imageUrl: "/images/site/seo-abstract.png",
      title: "SEO",
      description: "We build SEO right into your website, helping your business climb search rankings the right way.Get found by the right people.",
      startLink: "/form?q=seo",
      exploreLink: "/portfolio/design?q=seo"
    },
    {
      imageUrl: "/images/site/turnaround-abstract.png",
      title: "Brand Identity design",
      description: "Let's give your business a face that truly gives to your customers",
      startLink: "/form?q=branding",
      exploreLink: "/portfolio/design?q=branding"
    },
    {
      imageUrl: "/images/site/collaboration-abstract.png",
      title: "Digital marketing assets",
      description: "Set the right assets in place for your marketing message",
      startLink: "/form?q=marketing",
      exploreLink: "/portfolio/design?q=marketing"
    },
  ];
  const availableServicesB: WorkCardProps[] = [

    {
      imageUrl: "/images/site/extra-services-abstract.png",
      title: "Social Media Assets",
      description: "Let's give your business a presence that gains reach.",
      startLink: "/form?q=social",
      exploreLink: "/portfolio/design?q=social"
    },
    // {
    //   imageUrl: "/images/site/landing-pages-abstract.png",
    //   title: "Copywriting",
    //   description: "our copy makes sure you get the message to the right people with the right tone.",
    //   startLink: "/form?q=copywriting",
    //   exploreLink: "/portfolio/copywriting"
    // },
    {
      imageUrl: "/images/site/waves-abstract.png",
      title: "Print Designs",
      description: "T-shirts, caps, merchandise, vinyl designs. Having a uniform brand makes sure everyone recognizes you",
      startLink: "/form?q=print",
      exploreLink: "/portfolio/design?q=print"
    },
    {
      imageUrl: "/images/site/future-designs-abstract.png",
      title: "Stationery design",
      description: "Calenders, office stationery, envelopes, pens etc.",
      startLink: "/form?q=stationery",
      exploreLink: "/portfolio/design?q=stationery"
    },

  ];

  return <>
    <MegaMenu activeLink='lets-work'></MegaMenu>

    <main className="min-h-screen flex flex-col md:flex-row">
      <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
            </div>
          </div>
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
        </div>
      </section>
      <section id="midPanel" className="flex-1 flex flex-col">
        <div>

          <div id="marketingContent" className=" grid-cols-3 border-b md:border-b border-black dark:border-off-white">
            <div className="p-8 flex items-center">
              <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto">

                <p className="">Great work starts here</p>
                <p className="text-lg font-headlines leading-snug  font-medium">
                  <div className="hidden md:inline">
                    We&apos;ve partnered with businesses at every stage
                    —from early startups to established brands. <br />
                  </div>
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>

              </h2>
            </div>
            <hr className="border-black dark:border-off-white1B" />
            <div className=" bg-off-white1B container mx-auto md:p-8 ">
              <div className="relative h-[80dvh] overflow-auto md:rounded-2xl" >
                <iframe
                  title="contact-form"
                  src="https://formbricks.mevinsystems.cloud/s/cmkxtbyeg0006pk01bnlfie15"
                  // frameBorder="0"
                  className="absolute left-0 top-0 w-full h-full border-0"
                >
                </iframe>
              </div>

            </div>

          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>
          <h2 className="bg-primary1B/20 text-primary h2 font-display font-medium text-display-medium pt-4 md:pt-12 pl-8">Here&apos;s <i className="font-bold">how</i> we will help you</h2>
          <div id="emptyDiv" className="bg-primary1B/20 h-14 md:h-16 border-b md:border-b border-black dark:border-off-white">
          </div>
          <div id="servicesContent1" className="grid grid-cols-1 md:grid-cols-3">

            {availableServicesA.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
          </div>
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white">
          </div>
          <div id="servicesContent2" className="grid grid-cols-1 md:grid-cols-2">

            {availableServicesB.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
          </div>
          <hr className="border-black/30 dark:border-off-white1B" />
          <div id="ctaContent" className="p-8 py-16 md:grid grid-cols-3">
            <div className="col-span-2 lg:px-44">
              <h2 className="font-display text-display-medium mb-4">Not sure what you need? <br />No worries! <br /></h2>
              <h3 className="font-headlines text-headline-medium mb-8">Tell us and we can figure it out together.</h3>
              <Link href={'/contact'} >
                <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none ">Send an email
                </Button>
              </Link>
            </div>
          </div>

          <hr className="border-black dark:border-off-white1B" />
          <div id="emptyDiv" className="h-14 md:h-16 border-b md:border-b border-black dark:border-off-white"></div>

          {/* <FAQSection></FAQSection> */}
          <Faq faqs={faqs}></Faq>


        </div>
      </section>
      <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-1  border-black dark:border-off-white">
        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
              {/* <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Portfolio'}</p> */}
            </div>
          </div>
          {/* <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Creative Playground'}</p> */}
        </div>

        <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
          {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>;
}