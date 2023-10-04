import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function Wrapper({children}: Props) {

    return (
        <div className={'flex flex-col min-h-screen'}>
            <Navbar/>
            <main className={'flex-grow p-4 bg-gray-100 place-content-center'}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}