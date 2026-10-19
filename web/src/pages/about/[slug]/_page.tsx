import { MegaMenu, Footer } from "@/src/components";
// import Image from 'next/image';
// import Link from "next/link";

// import circleIcon from '@/src/icons/ui/circle.svg'
// import dTriangleIcon from '@/src/icons/ui/down-triangle.svg'
// import locationIcon from '@/src/icons/ui/location.svg'
// import phoneIcon from '@/src/icons/ui/phone.svg'
import openTabIcon from '@/src/icons/ui/openTab.svg'
import React from 'react';

import BusinessSection from "@/src/sections/about/business";
import StorySection from "@/src/sections/about/story";
import GoodSection from "@/src/sections/about/good";
import TeamSection from "@/src/sections/about/team";
import TermsSection from "@/src/sections/about/terms";
import PrivacySection from "@/src/sections/about/privacy";
import AffiliateSection from "@/src/sections/about/affiliates";
// import { notFound } from "next/navigation";

// import type { Metadata } from 'next';


export interface PageProps {
  urlSlug: string;
}



export const contentTabs = [ //VerticalTab[] = [
  {
    title: "Our Story",
    element: <StorySection></StorySection>,
  },
  {
    title: "The Business",
    element: <BusinessSection></BusinessSection>,
  },
  {
    title: "Design For Social Good",
    element: <GoodSection></GoodSection>,
  },
  {
    title: "Our Team",
    element: <TeamSection></TeamSection>,
  },
  {
    title: "Affiliates",
    element: <AffiliateSection />,
  },
  {
    title: "Terms and Conditions",
    element: <TermsSection />,
  },
  {
    title: "Privacy Policy",
    element: <PrivacySection />,
  },
];


// generate different routes for the respective tabs
// export async function generateStaticParams() {
//   const tabs = contentTabs;

//   return tabs.map((tab) => ({
//     slug: tab.title.trim().replaceAll(/ /g, '-').toLowerCase(),
//   }))
// }

// Dynamically generate metadata for each static path
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params
  
//   if (slug == null) { return new Response(null, { status: 404 }) /* notFound() */ };

//   // get proper title if not null
//   const currentTab = contentTabs.filter((tab) => tab.title.trim().replaceAll(/ /g, '-').toLowerCase() === slug)[0];



//   return {
//     title: "About : " + currentTab.title,
//     // description: post.excerpt,
//     // openGraph: {
//     //   images: [post.coverImage],
//     // },
//   }
// }



// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ urlSlug }: Readonly<PageProps>) {
  const slug  =  urlSlug

  const aboutSectionData = contentTabs.filter((tab) => tab.title.trim().replaceAll(/ /g, '-').toLowerCase() === slug)[0];
  //check if there's no value
  if (aboutSectionData == null) {  return new Response(null, { status: 404 }) /* notFound() */  };


  return <>
    <MegaMenu activeLink='about'></MegaMenu>
    <main>
      <section id="midPanel" className="flex-1 flex flex-col md:border-r-2  border-black dark:border-off-white">
        <div className="flex place-content-center h-12 md:h-16 border-b-2 border-black dark:border-off-white">
          <div className="sticky w-full flex-1 inline-flex flex-nowrap overflow-hidden bg-black text-off-white1B ">
            <div className="flex flex-1 items-center justify-center md:justify-start font-display text-display-small md:text-display-medium text-nowrap capitalize ">
              <span className=' w-16 border-r-2 border-dashed border-primary1B dark:border-off-white flex justify-center '>
                <a title="view as Tabs" className="flex justify-center" href={"/about?active=" + slug.trim().replaceAll(/-/g, '_').toLowerCase()}>
                  <img src={openTabIcon.src} alt="open tab icon" className="h-6 w-6 invert hover:invert-0 hover:bg-white mr-4 hover:rounded-full hover:p-[16px] duration-200" />
                </a>
              </span><p className="flex-1 px-8 mx-auto flex justify-center">{aboutSectionData.title}</p>
            </div>
          </div>

        </div>
      </section>
      <div className="md:mx-16 md:border-x-2 border-dashed border-black dark:border-off-white">
        {aboutSectionData.element}
      </div>
    </main>
    <Footer></Footer>
  </>;
}