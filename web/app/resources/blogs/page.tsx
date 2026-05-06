import type { Metadata } from 'next';
import BlogsPage from './blogs-page';

export const metadata: Metadata = {
    title: 'Blogs',
};

export default function Page() {
    return <BlogsPage />;
}