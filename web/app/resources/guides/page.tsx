import type { Metadata } from 'next';
import GuidesPage from './guides-page';

export const metadata: Metadata = {
    title: 'Guides',
};

export default function Page() {
    return <GuidesPage />;
}