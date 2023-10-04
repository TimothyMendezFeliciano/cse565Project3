import PageTemplate from "@/components/pageTemplate";
import {useRouter} from "next/router";

export default function Second() {

    const {push} = useRouter()
    const cta = {
        title: 'Onto Third and Final',
        action: () => {
            push('/third')
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
