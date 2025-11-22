import type { Metadata } from 'next';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: 'B2B Design Agency | Maki Creative Studio',
};

export default function Page() {
  return <HomePage/>;
}