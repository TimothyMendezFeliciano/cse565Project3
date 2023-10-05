import PageTemplate from "@/components/pageTemplate";
import {useRouter} from "next/router";
import {navigation} from "@/components/navbar";

export default function Home() {

    const {push} = useRouter()
    const cta = {
        title: 'Random Page',
        action: () => {
            push(navigation[Math.floor(Math.random() * 3)].href)
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
