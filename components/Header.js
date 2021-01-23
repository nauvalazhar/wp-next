import { useEffect, useState } from 'react';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        changeMode(localStorage.theme);
    }, []);

    function changeTheme(mode) {
        if(mode === 'dark') {
           return  document.documentElement.classList.add('dark');
        }

        return document.documentElement.classList.remove('dark');
    }

    function changeMode(mode) {
        // update dom
        changeTheme(mode);
    
        // rerender
        setTheme(mode);

        // persistance
        localStorage.theme = mode;
    }

    return (
        <>
            <div className="fixed inset-0 dark:bg-gray-900" style={{ zIndex: -1 }} />
            <header className="py-20 border-b border-gray-200">
                <div className="flex items-center">
                    <h1 className="mb-4 text-4xl dark:text-gray-300">
                        Next.js + WordPress = 🕺
                    </h1>

                    <div className="ml-auto text-3xl">
                        {theme === 'light' ?
                            <span onClick={changeMode.bind(this, 'dark')} className="cursor-pointer">🌙</span>
                        :
                            <span onClick={changeMode.bind(this, 'light')} className="cursor-pointer">☀️</span>}
                    </div>
                </div>

                <p className="text-xl font-light dark:text-gray-300">
                    why so dramatic about PHP or NodeJS, when they can fellowship.
                </p>
            </header>
        </>
    );
}
