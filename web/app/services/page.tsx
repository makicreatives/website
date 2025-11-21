import type { Metadata } from 'next';
import ServicesPage from './services-page';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return <ServicesPage />;
}