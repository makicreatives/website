import type { Metadata } from 'next';
import DesignPage from './design-page';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return <DesignPage />;
}