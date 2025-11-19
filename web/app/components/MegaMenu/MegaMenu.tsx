"use client"

import React, { useEffect, useRef, useState } from 'react';

// import styles from './MegaMenu.css';
import Image from 'next/image'
import primaryLogo from '@/app/icons/primaryLogo.svg'
import Link from 'next/link';
import { Button } from '@/app/components/';

export interface MegaMenuProps {
  hTopColor?: string;
  hBottomColor?: string;
  activeLink: 'home' | 'portfolio' | 'pricing' | 'resources' | 'lets-work' | 'contact' | 'about' | '404'
}


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

    // const panel = document.querySelector('#mega-menu-full-dropdown')

    const toggle = () => setIsOpen(prev => !prev);

    // panel?.classList.add("hidden")
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


  const preLinkStyling: string = "block py-2 px-3 text-heading hover:text-primary1B  hover:bg-neutral-secondary-soft md:hover:bg-transparent  md:hover:text-primary1B md:p-0";
  const activeLinkStyling: string = preLinkStyling + 'border-b-4 border-primary text-primary1B font-headlines text-headline-small font-bold';
  const linkStyling: string = preLinkStyling + 'hover:text-primary1B hover:duration-150';


  return <nav className="bg-primary0 text-white dark:text-off-white border-default">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={"/images/site/logoicon.png"} className="h-12 inline-flex" alt="Maki Creative Studio Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-heading">Maki Creative Studio</span>
      </Link>
      <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
      </button>
      <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col mt-4 align-middle font-bold md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse uppercase place-content-center">
          {/* <li>
            <Link href="#" className="block py-2 px-3 text-heading hover:text-primary1B border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-primary1B md:p-0" aria-current="page">Home</Link>
          </li> */}

          <li className='place-content-center'><Link href={'/'} className={[linkStyling, (activeLink === 'home' ? activeLinkStyling : '')].join(' ')}>Home</Link></li>

          {/* <li><Link href={'/lets-work/'} className={[linkStyling, (activeLink === 'lets-work' ? activeLinkStyling : '')].join(' ')}>Let&apos;s&nbsp;Work</Link></li> */}




          <li className="place-content-center">
            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-primary1B md:p-0 uppercase" onClick={() => setIsOpen(!isOpen)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
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
          <li className="place-content-center">
            <Link href={'/resources'} className={[linkStyling, (activeLink === 'resources' ? activeLinkStyling : '')].join(' ')}>Resources</Link>
          </li>
          {/* <li className="place-content-center">
            <Link href={'/about'} className="block py-2 px-3 text-heading hover:text-primary1B border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-primary1B md:p-0">About</Link>
          </li> */}
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
    <section id="mega-menu-full-dropdown" className={"mt-1 bg-neutral-primary-soft border-default shadow-xs border-y transition-all" + (!isOpen && " hidden")} onFocus={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-heading sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-labelledby="mega-menu-full-dropdown-button">
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
        </ul>
        <ul className="hidden md:block">
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Audience Management</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Creative Tools</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
              <div className="font-semibold">Marketing Automation</div>
              <span className="text-sm text-body">Connect with third-party tools that you're already using.</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <div id='hTop' className={['h-8 ', hTopColor].join(' ')}></div>
    <div id='hBottom' className={['h-8 ', hBottomColor].join(' ')}></div>
  </nav>;
}
