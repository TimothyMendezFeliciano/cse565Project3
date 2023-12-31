import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import type {AppProps} from 'next/app'
import Wrapper from "@/components/Wrapper";
import "../customStringMethod"

export default function App({Component, pageProps}: AppProps) {

    return (
        <Wrapper>
            <Component {...pageProps} />
        </Wrapper>
    )
}

