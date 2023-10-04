import PageTemplate from "@/components/pageTemplate";
import {navigation} from "@/components/navbar";
import {useRouter} from "next/router";

export default function Third() {

    const {push} = useRouter()

    const cta = {
        title: 'Final Page',
        action: () => {
            push(navigation[Math.floor(Math.random() * 3)].href)
        }
    }
    return (
        <>
            <h1 className={'text-red-500'}>GUI Test. Project 3.</h1>
            <PageTemplate imgUrl={'https://img.pokemondb.net/artwork/avif/squirtle.avif'}
                          callToAction={cta}
            />
        </>
    )
}
