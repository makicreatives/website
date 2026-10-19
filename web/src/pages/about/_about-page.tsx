'use client'
import { MegaMenu, Footer, VerticalTabs } from "@/src/components";
// import Image from 'next/image';
// import Link from "next/link";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
// import locationIcon from '@/app/icons/ui/location.svg'
// import phoneIcon from '@/app/icons/ui/phone.svg'
// import mailIcon from '@/app/icons/ui/mail.svg'
import React from 'react';
import type { VerticalTab } from "@/src/components/VerticalTabs";

import BusinessSection from "../../sections/about/business";
import StorySection from "@/src/sections/about/story";
import GoodSection from "@/src/sections/about/good";
import TeamSection from "../../sections/about/team";
import TermsSection from "../../sections/about/terms";
import PrivacySection from "@/src/sections/about/privacy";
import AffiliateSection from "../../sections/about/affiliates";
// import { useSearchParams } from "next/navigation";



export interface AboutPageProps {
  urlSearchParams: URLSearchParams;
  activeTab: string | null;
}



const contentTabs: VerticalTab[] = [
  {
    title: "Our Story",
    element: StorySection(),
  },
  {
    title: "The Business",
    element: BusinessSection(),
  },
  {
    title: "Design For Social Good",
    element: GoodSection(),
  },
  {
    title: "Our Team",
    element: TeamSection(),
  },
  {
    title: "Affiliates",
    element: AffiliateSection(),
  },
  {
    title: "Terms and Conditions",
    element: TermsSection()
  },
  {
    title: "Privacy Policy",
    element: PrivacySection()
  },
]


export default function AboutPage({urlSearchParams, activeTab}:Readonly<AboutPageProps>) {

  const searchParams =  urlSearchParams;//Astro.url.searchParams; //useSearchParams();
  console.debug("::: PARAMS -- ABOUT PAGE::: search params : ",searchParams)
  const search =  activeTab;//searchParams.get('active');

  return <>
    <MegaMenu activeLink='about'></MegaMenu>
    <VerticalTabs tabs={contentTabs} activeTabTitle={search ?? ''}></VerticalTabs>
    <Footer></Footer>
  </>;
}