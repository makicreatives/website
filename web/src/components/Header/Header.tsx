import React from 'react';
// import Image from 'next/image'
// import styles from './Header.css';
import primaryLogo from '@/src/icons/primaryLogo.svg'
// import Link from 'next/link';

export interface HeaderProps {
  hTopColor?: string;
  hBottomColor?: string;
  activeLink: 'home' | 'portfolio' | 'lets-work' | 'contact' | 'about' | '404'
}

export function Header({ activeLink, hTopColor = 'bg-primary1B', hBottomColor = 'bg-primary' }: HeaderProps) {
  const activeLinkStyling: string = 'border-b-4 border-b-primary';
  const linkStyling: string = 'hover:text-primary1B hover:duration-150';

  return <header>
    <div className='min-h-32 items-center md:h-32 md:px-16 bg-primary0 text-white dark:text-off-white '>
      <nav id="navbar-default" className={'p-4'}>
        <ul className="font-headlines text-headline-small font-bold uppercase p-4 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:w-min  md:mx-auto items-center md:space-x-8 rtl:space-x-reverse md:mt-0 ">
          <li className='w-36'><a href={'/'} className={"w-10"}><img className='h-20' src={primaryLogo.src} alt="primary-logo" /></a></li>
          <li><a href={'/'} className={[linkStyling, (activeLink === 'home' ? activeLinkStyling : '')].join(' ')}>Home</a></li>
          <li><a href={'/portfolio/'} className={[linkStyling, (activeLink === 'portfolio' ? activeLinkStyling : '')].join(' ')}>Portfolio</a></li>
          <li><a href={'/lets-work/'} className={[linkStyling, (activeLink === 'lets-work' ? activeLinkStyling : '')].join(' ')}>Let&apos;s&nbsp;Work</a></li>
          <li><a href={'/contact/'} className={[linkStyling, (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</a></li>
          <li><a href={'/about/'} className={[linkStyling, (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About</a></li>
        </ul>
      </nav>
    </div>
    <div id='hTop' className={['h-8 ', hTopColor].join(' ')}></div>
    <div id='hBottom' className={['h-8 ', hBottomColor].join(' ')}></div>
  </header>;
}
