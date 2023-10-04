import PageTemplate from "@/components/pageTemplate";
import {useRouter} from "next/router";
import {navigation} from "@/components/navbar";

export default function Second() {

    const {push} = useRouter()
    const cta = {
        title: 'Who Knows Where',
        action: () => {
            push(navigation[Math.floor(Math.random() * 3)].href)
        }
    }
    return (
        <>
            <h1 className={'text-red-500'}>GUI Test. Project 3.</h1>
            <PageTemplate imgUrl={'https://img.pokemondb.net/artwork/avif/bulbasaur.avif'}
                          callToAction={cta}
            />
        </>
    )
}
