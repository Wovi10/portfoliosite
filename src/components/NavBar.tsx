function HomeButton() {
    return (
        <h2 className="my-auto cursor-pointer hover:text-gray-400 font-extrabold text-2xl text-white" id="title">
            Home
        </h2>
    );
}

export default function NavBar() {
    return (
        <header>
            <nav className="w-screen flex justify-between overflow-hidden px-4 md:px-20 lg:px-36 align-middle justify-center
            h-20 bg-black inset-0 mb-1 fixed z-40">
                <HomeButton />
            </nav>
        </header>
    );
}