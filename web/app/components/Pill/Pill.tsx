import React from 'react';

// import styles from './Pill.css';

export interface PillProps {
  children?: string | React.JSX.Element | React.JSX.Element[];//| (() => React.JSX.Element);
  color?: 'primary' | 'accent' | 'info' | "warn" | "textLight";
  textCase?: 'capitalize' | 'uppercase';
}

export function Pill({ children, color = "accent", textCase = "capitalize" }: Readonly<PillProps>) {
  return <span className={` ${textCase} m-0.5 p-0.5 px-2 text-${color}-800 bg-${color}-50 font-bold border-2 border-${color}-100 rounded-xs`}>
    {children}
  </span>;
}
