import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image'

import subMark from '@/src/icons/submark.svg'
import instagramIcon from '@/src/icons/social/instagram.svg'
import xIcon from '@/src/icons/social/x.svg'
import linkedinIcon from '@/src/icons/social/linkedin.svg'
import facebookIcon from '@/src/icons/social/facebook.svg'
import behanceIcon from '@/src/icons/social/behance.svg'
import dribbleIcon from '@/src/icons/social/dribble.svg'

// import styles from './Footer.css';


export interface FooterProps {
  fTopColor?: string;
  fBottomColor?: string;
}

export function Footer({ fTopColor = 'bg-secondary', fBottomColor = 'bg-secondaryRegal' }: Readonly<FooterProps>) {
  const linkStyling: string = ' hover:text-secondary hover:duration-150 ';
  const iconLinkStyling: string = 'hover:bg-secondary hover:p-1 hover:duration-200 hover:rounded-sm';

  return <footer className='bg-primary0 text-white dark:text-off-white'>
    <div id='fTop' className={['h-10 ', fTopColor].join(' ')}></div>
    <div id='fBottom' className={['h-10 ', fBottomColor].join(' ')}></div>
    <div className={'min-h-64 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-evenly border-t border-t-white dark:border-t-off-white'}>
      <div className={'flex p-4 lg:p-0 items-center justify-center'}>
        <img src={subMark.src} alt='logo mark' className='h-28 p-1' />
      </div>
      <div className={'flex items-center justify-center p-4 md:p-1 px-8 border-t md:border-t-0 md:border-l border-l-white dark:border-l-off-white font-headlines text-headline-large'}>
        <div className=''>
          <p className='hidden'><a href={'tel:0000000000'} className={'underline' + linkStyling}>Phone +000000000</a></p>
          <p><a href={'mailto:hello@makistudio.online?subject=Hello%20MCS'} className={'underline' + linkStyling}>hello@makistudio.online</a></p>
        </div>
      </div>
      <div className={'flex items-center justify-center p-4 lg:p-1 px-8 border-t md:border-t-0 lg:border-l border-l-white dark:border-l-off-white'}>
        <ul className={'font-headlines text-headline-large uppercase space-y-1'}>
          <li><a href={'/'} className={'' + linkStyling}>Home</a></li>
          <li><a href={'/portfolio'} className={'' + linkStyling}>Our work</a></li>
          <li><a href={'/about/privacy-policy'} className={'' + linkStyling}>Privacy Policy</a></li>
          <li><a href={'/about/terms-and-conditions'} className={'' + linkStyling}>Terms and Conditions</a></li>
          {/* <li><a href={'/about/affiliates'} className={'' + linkStyling}>Affiliate Program</a></li> */}
          <li><a href={'/contact'} className={'' + linkStyling}>Contact</a></li>
          <li><a href={'/about'} className={'' + linkStyling}>About</a></li>
        </ul>
      </div>
      <div className={'md:border-l border-l-white dark:border-l-off-white'}></div>

    </div>
    <div className={'p-4 md:p-1.5 px-8 flex flex-wrap border-t border-t-white dark:border-t-off-white align-middle'}>
      <p className={'uppercase font-headlines text-headline-large mb md:mb-0 md:mr-8'}>&copy; 2024 — {(new Date().getFullYear()) + ''}&nbsp;&nbsp; <br className='md:hidden' />Maki Creative Studio</p>
      <ul className={'flex justify-between flex-row space-x-8 rtl:space-x-reverse items-center'}>
        {/*TODO: use personal instagram account*/}
        <li><a href={'https://www.linkedin.com/company/maki-creative-studio'} target='_blank'><img src={linkedinIcon.src} alt='linkedin icon' className={'h-8 ' + iconLinkStyling} /></a></li>
        <li><a href={'https://www.instagram.com/'} target='_blank'><img src={instagramIcon.src} alt='instagram icon' className={'h-8 ' + iconLinkStyling} /></a></li>
        <li><a href={'https://www.facebook.com/hellostudiomaki'} target='_blank'><img src={facebookIcon.src} alt='facebook icon' className={'h-8 ' + iconLinkStyling} /></a></li>
        <li><a href={'https://x.com/hellostudiomaki'} target='_blank'><img src={xIcon.src} alt='X or twitter icon' className={'h-8 ' + iconLinkStyling} /></a></li>
        <li><a href={'https://dribbble.com/hellostudiomaki'} target='_blank'><img src={dribbleIcon.src} alt='dribble icon' className={'h-8 ' + iconLinkStyling} /></a></li>
        <li><a href={'https://www.behance.net/hellostudiomaki'} target='_blank'><img src={behanceIcon.src} alt='behance icon' className={'h-8 ' + iconLinkStyling} /></a></li>
      </ul>
    </div>
    <div className={' border-t border-y-white dark:border-y-off-white flex justify-center'}>
      <a className={'p-3 px-20 uppercase font-headlines text-headline-large border-x border-x-white text-accent2 hover:text-secondary hover:bg-off-white1B hover:duration-150'} href={'/contact'}>Get in touch</a>
    </div>
  </footer>;
}
