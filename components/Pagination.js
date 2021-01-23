import Link from 'next/link';

export default function Pagination({
    totalPages,
    current
}) {
    return (
        <div className="flex justify-center mb-10">
            {Array.from({ length: totalPages }, (x, i) => i+1).map(page => (
                <Link href={`?page=${page}`}>
                    <a 
                        className={`flex items-center justify-center w-8 h-8 mx-2 border border-gray-600 dark:text-gray-300 ${page==current ? 'bg-black dark:bg-gray-300 text-white dark:text-gray-600' : ''}`.trim()}
                    >
                        {page}
                    </a>
                </Link>
            ))}
        </div>
    );
}
