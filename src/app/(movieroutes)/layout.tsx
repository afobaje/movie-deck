import Header from "@/components/Header"
import clsx from "clsx"






export default async function MovieLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className={clsx('py-10')}>
            {children}
            </main>
            
        </>
    )
}