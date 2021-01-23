import Link from 'next/link';
import { dateOptions } from '../lib/config';

export default function ArticleItem({ 
    post,
    ...props 
}) {
    return (
        <article className="mb-10 last:mb-0">
            <h2 className="text-2xl font-semibold">
                <Link href={`/post/${post.slug}`}><a className="dark:text-gray-300">{post.title.rendered}</a></Link>
            </h2>
            <time className="text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', dateOptions)}
            </time>
        </article>
    );
}
