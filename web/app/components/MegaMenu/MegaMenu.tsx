"use client"

import React, { useEffect, useRef, useState } from 'react';

// import styles from './MegaMenu.css';
import Link from 'next/link';
import { Button } from '@/app/components/';

export interface MegaMenuProps {
  hTopColor?: string;
  hBottomColor?: string;
  activeLink: 'home' | 'portfolio' | 'services' | 'pricing' | 'resources' | 'lets-work' | 'contact' | 'about' | '404'
}

export type MegaMenuCardData = {
  id: string,
  title: string,
  description: string,
}
export type MegaMenuCardSection = {
  head: MegaMenuCardData,
  entries: MegaMenuCardData[],
}
export type MegaMenuCardList = {
  [K in string]: MegaMenuCardSection;
}


interface ServicesMegaMenuCardList extends MegaMenuCardList {
  design: MegaMenuCardSection,
  production: MegaMenuCardSection,
  marketing: MegaMenuCardSection,
}
const servicesMegaMenu: ServicesMegaMenuCardList = {
  design: {
    head: {
      id: 'design',
      title: 'Design Services',
      description: "We design and make it ready, you produce."
    },
    entries: [
      {
        id: 'brand-identity',
        title: 'Brand Identity Design',
        description: "Let's give your business a face that truly gives to your customers"
      },
      {
        id: 'packaging',
        title: 'Packaging design',
        description: 'Set the right assets in place for your marketing message'
      },
      {
        id: 'digital-ads',
        title: 'Digital Ads',
        description: "Connect with third-party tools that you're already using."
      },
      {
        id: 'marketing-assets',
        title: 'Digital Marketing Assets',
        description: 'Set the right assets in place for your marketing message'
      },
      {
        id: 'stationery',
        title: 'Stationery Design',
        description: 'Calenders, office stationery, envelopes, pens etc.'
      },
      {
        id: 'print',
        title: 'Print Designs',
        description: "T-shirts, caps, merchandise, vinyl designs. Having a uniform brand makes sure everyone recognizes you."
      }
    ]
  },
  production: {
    head: {
      id: 'production',
      title: 'Production Services',
      description: "Connect with third-party tools that you're already using."
    },
    entries: [
      {
        id: 'web',
        title: 'Web Design',
        description: 'From engaging homepages to conversion-focused layouts that turn visitors into customers.'
      },
      {
        id: 'product',
        title: 'Product UI/UX Design',
        description: "User-friendly interfaces that keep your customers coming back for more.Make every interaction count."
      },
    ]
  },
  marketing: {
    head: {
      id: 'marketing',
      title: 'Marketing Services',
      description: "Connect with third-party tools that you're already using."
    },
    entries: [
      {
        id: 'seo',
        title: 'SEO',
        description: "We build SEO right into your website, helping your business climb search rankings the right way.Get found by the right people."
      },
      {
        id: 'landing-pages',
        title: 'Landing pages',
        description: "Turn clicks into customers with landing pages that convert.Clear, compelling, and crafted for your specific audience."
      },
      {
        id: 'social-media',
        title: 'Social Media Assets',
        description: "Let's give your business a presence that gains reach."
      }
    ]
  }
};
const servicesLink: string = "/services/";


export function MegaMenu({ activeLink, hTopColor = 'bg-primary1B', hBottomColor = 'bg-primary' }: Readonly<MegaMenuProps>) {

  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('[data-collapse-toggle]') &&
        !(e.target as Element).closest('#mega-menu-full-dropdown')?.classList.remove("hidden")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Toggle function used by the button (via data attribute)
  useEffect(() => {
    const button = document.querySelector('[data-collapse-toggle="mega-menu-full"]');
    if (!button) return;

    const toggle = () => setIsOpen(prev => !prev);

    button.addEventListener('click', toggle);
    return () => button.removeEventListener('click', toggle);
  }, []);

  // Optional: nice delay on mouse leave (for desktop hover too)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 500);
  };


  const preLinkStyling: string = "block py-2 px-3 text-heading hover:text-primary1B  hover:bg-secondary-100 md:hover:bg-transparent  md:hover:text-primary1B md:p-0";
  const activeLinkStyling: string = preLinkStyling + 'border-b-4 border-primary text-primary1B font-headlines text-headline-small font-bold';
  const linkStyling: string = preLinkStyling + 'hover:text-primary1B hover:duration-150';

  const megaMenuStyling = {
    card: "block p-3 rounded-xs hover:bg-primary1B-700 hover:text-offWhite",
    cardHead: "block p-3 rounded-xs hover:bg-primary0 hover:text-white",
    titleCard: "flex justify-between font-semibold ",
    titleHead: " flex justify-between  text-heading font-bold font-heading uppercase  text-display-small",
  }

  return <nav className="bg-primary0 text-white dark:text-off-white border-default">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={"/images/site/logoicon.png"} className="h-12 inline-flex" alt="Maki Creative Studio Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-heading">Maki Creative Studio</span>
      </Link>
      <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-secondary-100 hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
      </button>
      <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col mt-4 align-middle font-bold md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse uppercase place-content-center">
          {/* <li>
            <Link href="#" className="block py-2 px-3 text-heading hover:text-primary1B border-b border-light hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary1B md:p-0" aria-current="page">Home</Link>
          </li> */}

          <li className='place-content-center'>
            <Link href={'/'} className={[linkStyling, (activeLink === 'home' ? activeLinkStyling : '')].join(' ')}>Home</Link>
          </li>

          <li className="place-content-center">
            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className={["flex items-center justify-between w-full py-2 px-3 text-heading border-b border-light md:w-auto hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary1B md:p-0 uppercase", (activeLink === 'services' ? activeLinkStyling : '')].join(' ')} onClick={() => setIsOpen(!isOpen)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              Services
              <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
            </button>
          </li>
          <li className="place-content-center">
            <Link href={'/portfolio'} className={[linkStyling, (activeLink === 'portfolio' ? activeLinkStyling : '')].join(' ')}>Portfolio</Link>
          </li>
          <li className="place-content-center">
            <Link href={'/pricing'} className={[linkStyling, (activeLink === 'pricing' ? activeLinkStyling : '')].join(' ')}>Pricing</Link>
          </li>
          <li className="place-content-center hidden lg:block">
            <Link href={'/resources'} className={[linkStyling, (activeLink === 'resources' ? activeLinkStyling : '')].join(' ')}>Resources</Link>
          </li>
          <li className="">
            {/* BOOK A DEMO */}
            <Link href={'/lets-work'} >
              <Button className="text-white border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none uppercase">Book a call
              </Button>
            </Link>
          </li>
          <li className="">
            {/* Sign in */}
            <Link href={'/lets-work'} >
              <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none uppercase">Sign In
              </Button>
            </Link>
          </li>
        </ul>
      </div>

    </div>
    <section id="mega-menu-full-dropdown" className={"mt-1 text-textLight bg-offWhite border-default shadow-xs border-y transition-all" + (!isOpen && " hidden")} onFocus={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="hidden md:grid max-w-screen-xl px-4 py-5 mx-auto text-heading sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-label='design-services' aria-labelledby="mega-menu-full-dropdown-button">
          {
            (() => {
              const designSvc = servicesMegaMenu.design;
              return [
                <MegaMenuCard type='head' link={servicesLink} key={designSvc.head.id} id={designSvc.head.id} title={designSvc.head.title} description={designSvc.head.description} styling={{
                  card: megaMenuStyling.cardHead,
                  title: megaMenuStyling.titleHead
                }} />,
                designSvc.entries.map((entry) => {
                  return <MegaMenuCard link={servicesLink} key={entry.id} id={entry.id} title={entry.title} description={entry.description} styling={{
                    card: megaMenuStyling.card,
                    title: megaMenuStyling.titleCard
                  }}></MegaMenuCard>
                }),
              ]
            })()
          }
        </ul>
        <ul aria-label='production-services'>
          {
            (() => {
              const productionSvc = servicesMegaMenu.production;
              return [
                <MegaMenuCard type='head' link={servicesLink} key={productionSvc.head.id} id={productionSvc.head.id} title={productionSvc.head.title} description={productionSvc.head.description} styling={{
                  card: megaMenuStyling.cardHead,
                  title: megaMenuStyling.titleHead
                }} />,
                productionSvc.entries.map((entry) => {
                  return <MegaMenuCard link={servicesLink} key={entry.id} id={entry.id} title={entry.title} description={entry.description} styling={{
                    card: megaMenuStyling.card,
                    title: megaMenuStyling.titleCard
                  }}></MegaMenuCard>
                }),
              ]
            })()
          }
        </ul>
        <ul aria-label='marketing-services' className="">
          {
            (() => {
              const marketingSvc = servicesMegaMenu.marketing;
              return [
                <MegaMenuCard type='head' link={servicesLink} key={marketingSvc.head.id} id={marketingSvc.head.id} title={marketingSvc.head.title} description={marketingSvc.head.description} styling={{
                  card: megaMenuStyling.cardHead,
                  title: megaMenuStyling.titleHead
                }} />,
                marketingSvc.entries.map((entry) => {
                  return <MegaMenuCard link={servicesLink} key={entry.id} id={entry.id} title={entry.title} description={entry.description} styling={{
                    card: megaMenuStyling.card,
                    title: megaMenuStyling.titleCard
                  }}></MegaMenuCard>
                }),
              ]
            })()
          }
        </ul>
      </div>
      <div id='mobile-menu' className="md:hidden block">
        <ul className="font-headlines uppercase p-2">
          <li className='border-b'>
            <Link href={`/`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Home"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>
          <li className='border-b'>
            <Link href={`/services`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Services"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>
          <li className='border-b'>
            <Link href={`/services`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Services"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>
          <li className='border-b'>
            <Link href={`/services`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Services"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>
          <li className='border-b'>
            <Link href={`/services`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Services"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>
          <li className='border-b'>
            <Link href={`/services`} className={megaMenuStyling.cardHead}>
              <div className={megaMenuStyling.titleCard}>
                <span>{"Services"}</span>
                <span>
                  <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                </span>
              </div>
              {/* <span className="text-sm text-body">{description}</span> */}
            </Link>
          </li>




          <li><Link href={'/portfolio/'} className={[linkStyling, (activeLink === 'portfolio' ? activeLinkStyling : '')].join(' ')}>Portfolio</Link></li>
          <li><Link href={'/lets-work/'} className={[linkStyling, (activeLink === 'lets-work' ? activeLinkStyling : '')].join(' ')}>Let&apos;s&nbsp;Work</Link></li>
          <li><Link href={'/contact/'} className={[linkStyling, (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</Link></li>
          <li><Link href={'/about/'} className={[linkStyling, (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About</Link></li>
        </ul>
      </div>
    </section>
    <div id='hTop' className={['h-8 ', hTopColor].join(' ')}></div>
    <div id='hBottom' className={['h-8 ', hBottomColor].join(' ')}></div>
  </nav>;
}

export interface MegaMenuCardProps {
  type?: "regular" | "head",
  link: string,
  id: string,
  title: string,
  description: string,
  styling: {
    card: string,
    title: string,
  }

}
export function MegaMenuCard({ type = "regular", link, id, title, description, styling }: Readonly<MegaMenuCardProps>) {
  /* Cleans link to remove the / at the end to avoid having a bad url
  */
  const cleanLink = (url: string): string => {
    const urlLength: number = url.length;
    if (url[urlLength - 1] === "/") {
      const newUrl = url.substring(0, (urlLength - 1));
      return cleanLink(newUrl);
    }
    return url;
  }


  switch (type) {
    case "head":
      return <li>
        <Link href={`${cleanLink(link)}/#${id}`} className={styling.card}>
          <div className={styling.title}>
            <span>{title}</span>
            <span>
              <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
            </span>
          </div>
          <span className="text-sm text-body">{description}</span>
        </Link>
      </li>;

    case "regular":
      return <li>
        <Link href={`${cleanLink(link)}/#${id}`} className={styling.card} >
          <div className={styling.title}>
            <span>{title}</span>
            <span>
              <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
            </span>
          </div>
          <span className="text-sm text-body">{description}</span>
        </Link>
      </li>;
  }
}

export interface MobileMenuCardProps {
  link: string,
  title: string,
  styling: {
    card: string,
    title: string,
  }
}

export function MobileMenuCard({ link, title, styling }: Readonly<MobileMenuCardProps>) {
  return <li className='border-b'>
    <Link href={link} className={styling.card}>
      <div className={styling.title}>
        <span>{title}</span>
        <span>
          <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
        </span>
      </div>
    </Link>
  </li>
}