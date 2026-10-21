"use client"

import React, { useState } from 'react';
import { Button } from '../Button';

// import styles from './Faq.css';

export type FAQ = {
  question: string,
  answer: string,
}

export interface FaqProps {
  faqs: FAQ[];
}

export function Faq({ faqs }: Readonly<FaqProps>) {
  return (
    <section className="p-8 bg-accent1/40 dark:bg-[#D6F1FF] " style={{
      // backgroundColor:"#D6F1FF",
      backgroundColor: `#c2f4ff`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15l15 15H0V15zM15 0l15 15V0H15z' fill='%23228b22' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  bg-accent1/40 dark:bg-[#D6F1FF] backdrop-blur-lg ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary-900 uppercase rounded-full bg-primary-400">
                Your questions answered!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {/* <span className="relative inline-block">
                          <svg
                              viewBox="0 0 52 24"
                              fill="currentColor"
                              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                          >
                              <defs>
                                  <pattern
                                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                      x="0"
                                      y="0"
                                      width=".135"
                                      height=".30"
                                  >
                                      <circle cx="1" cy="1" r=".7" />
                                  </pattern>
                              </defs>
                              <rect
                                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                  width="52"
                                  height="24"
                              />
                          </svg>
                          <span className="relative">The</span>
                      </span>{' '} */}
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
              {/* These are the most common ones about how we work, our process from start to finish, and how we team up to help you reach your goals. We love  bringing you to making your customers happy—it builds great business and great friendships. */}

              Here are the questions we hear most. They show how we work, step by step, and how we team up with you.
              You are the hero. Your customers are who you serve. We are your guide.
              We help you make them happy. That builds strong business and strong friendships.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map(
              // (faq, index) => <li key={"f-" + index} className="p-8 bg-sec bg-accent2/40 hover:bg-accent1/40 hover:shadow-sm hover:transition-700">
              //     <p className="font-bold"><b>Q:</b>&nbsp; {faq.question} </p>
              //     <br />
              //     <p><b>A:—</b>&nbsp; {faq.answer} </p>
              // </li>

              (faq, index) => <FaqItem key={"f-" + index} title={faq.question}>
                <p>{faq.answer} </p>
              </FaqItem>
            )}

          </div>
          <div id="ctaContent" className=" pt-40  text-gray-900 max-w-xl mb-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary-900 uppercase rounded-full bg-primary-400">
                Ask us
              </p>
            </div>
            <div className="col-span-2">
              <h2 className=" font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl mb-4">
                Still have a question?
              </h2>
              <h3 className="font-headlines text-headline-medium mb-8">We&apos;re happy to help.</h3>
              <a href={'/contact'} >
                <Button className="text-white uppercase  bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none ">Contact us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export interface FaqItemProps {
  title: string;
  children: string | React.JSX.Element | React.JSX.Element[];//| (() => React.JSX.Element);
}

export const FaqItem = ({ title, children }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-900">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none text-gray-900 hover:cursor-pointer hover:text-secondaryRegal-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

