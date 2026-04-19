import type { Metadata } from 'next';
import ProductionPage from './production-page';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return <ProductionPage />;
}