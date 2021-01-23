import Head from 'next/head'
import wp from '../lib/wp';
import Link from 'next/link';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleItem from '../components/ArticleItem';
import Pagination from '../components/Pagination';

export async function getServerSideProps({ query: { page=1 } }) {
    const posts = await wp.posts().perPage(10).page(page);
    
    const { total, totalPages } = posts._paging;

    return {
        props: {
            posts,
            paging: { total, totalPages, current: page },
        },
    }
}

export default function Home({ 
    posts, 
    paging: { total, totalPages, current } 
}) {
    return (
        <Container>
            <Head>
                <title>Next.js + WordPress = 🕺</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="py-20">
                {posts.map(post => <ArticleItem key={post.id} post={post} />)}
            </main>

            <Pagination 
                totalPages={totalPages}
                current={current}
            />

            <Footer />
        </Container>
    );
}
