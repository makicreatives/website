import type { Metadata } from 'next';
import MarketingPage from './marketing-page';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return <MarketingPage />;
}