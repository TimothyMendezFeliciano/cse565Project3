import PageTemplate from "@/components/pageTemplate";

export default function Third() {

    const cta = {
        title: 'Final Page',
        action: () => {
            alert('Nothing else.')
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
