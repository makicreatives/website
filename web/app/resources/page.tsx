import type { Metadata } from 'next';
import ResourcesPage from './resources-page';

export const metadata: Metadata = {
    title: 'Resources',
};

export default function Page() {
    return <ResourcesPage />;
}