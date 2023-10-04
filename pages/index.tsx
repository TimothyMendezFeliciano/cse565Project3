import PageTemplate from "@/components/pageTemplate";
import {useRouter} from "next/router";

export default function Home() {

    const {push} = useRouter()
    const cta = {
        title: 'Next Page',
        action: () => {
            push('/second')
        }
    }

    return (
        <>
            <h1 className={'text-red-500'}>GUI Test. Project 3.</h1>
            <PageTemplate imgUrl={'https://img.pokemondb.net/artwork/avif/charizard.avif'}
                          callToAction={cta}
            />
        </>
    )
}
