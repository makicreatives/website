import React, { Children } from 'react';

// import styles from './Button.css';

export interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: string | React.JSX.Element | React.JSX.Element[] ;//| (() => React.JSX.Element);
}

export function Button({ className, type, children }: ButtonProps) {
  return <button className={className ?? ""} type={type ?? "button"}>{children}</button>;
}
