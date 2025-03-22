import Navbar from "../components/Navbar";

export default function Layout({ children }: Readonly<{
    children:React.ReactNode}>) {
        return (
            <main className="container mx-auto my-7">
                <Navbar />
                {children}
            </main>
        )
    }