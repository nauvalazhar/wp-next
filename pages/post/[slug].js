import wp from '../../lib/wp';
import DOMPurify from 'isomorphic-dompurify';
import Head from 'next/head'
import Link from 'next/link';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { dateOptions } from '../../lib/config';

export async function getServerSideProps({ query: { slug } }) {
    const [post=false] = await wp.posts().slug(slug);

    return {
        props: { post },
        notFound: !post 
    }
}

export default function Post({ post }) {
    const safeHTML = DOMPurify.sanitize(post.content.rendered.replace(/^<hr>/g, ''));

    return (
        <Container>
            <Head>
                <title>{post.title.rendered}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="py-20">
                <article>
                    <header className="mb-10">
                        <Link href="/"><a className="inline-block mb-4 text-gray-600">&lsaquo; Back to posts</a></Link>
                        <h1 className="mb-2 text-3xl font-semibold dark:text-gray-300">{post.title.rendered}</h1>
                        <div className="flex items-center text-sm dark:text-gray-600">
                            <time>{new Date(post.date).toLocaleDateString('en-US', dateOptions)}</time>
                        </div>
                    </header>
                    <div 
                        className="max-w-full prose dark:prose-light"
                        dangerouslySetInnerHTML={{ __html: safeHTML }}
                    />
                </article>
            </main>

            <Footer />
        </Container>
    );
}
