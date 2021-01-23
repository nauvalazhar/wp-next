export default function Container({ children }) {
    return (
        <div className="w-full px-10 mx-auto xl:w-5/12 lg:w-7/12">
            {children}
        </div>
    );
}
