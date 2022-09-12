import Copyright from "./Copyright";

export default function Footer() {
    return (
        <footer className="w-screen bg-black text-white absolute h-auto py-5">
            <div className="flex absolute left-1/2">
                <Copyright />
            </div>
        </footer>
    );
}