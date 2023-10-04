import {InputBox} from "@/components/InputBox";
import Image from "next/image";
import {useRouter} from "next/router";
import {useMemo, useState} from "react";

interface Props {
    imgUrl: string,
    callToAction: { title: string, action: () => void },

}

interface Pokemon {
    id: number;
    name: string;
    generation: string;
    image: string;
}

export default function PageTemplate({
                                         imgUrl, callToAction
                                     }: Props) {
    const {pathname} = useRouter()

    const [selectedColor, setSelectedColor] = useState('')

    const starterPokemon: Pokemon[] = useMemo(() => {
        if (pathname.includes('second')) {
            return [
                {
                    id: 252,
                    name: 'Treecko',
                    generation: 'Gen 3',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png'
                },
                {
                    id: 255,
                    name: 'Torchic',
                    generation: 'Gen 3',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png'
                },
                {
                    id: 258,
                    name: 'Mudkip',
                    generation: 'Gen 3',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png'
                },
            ]
        } else if (pathname.includes('third')) {
            return [
                {
                    id: 152,
                    name: 'Chikorita',
                    generation: 'Gen 2',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
                },
                {
                    id: 155,
                    name: 'Cyndaquil',
                    generation: 'Gen 2',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
                },
                {
                    id: 158,
                    name: 'Totodile',
                    generation: 'Gen 2',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
                },
            ]
        } else {
            return [
                {
                    id: 1,
                    name: 'Bulbasaur',
                    generation: 'Gen 1',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                },
                {
                    id: 4,
                    name: 'Charmander',
                    generation: 'Gen 1',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                },
                {
                    id: 7,
                    name: 'Squirtle',
                    generation: 'Gen 1',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
                },
            ]
        }
    }, [pathname])

    return (
        <>
            <Image src={imgUrl} alt={'Charizard'} className={'h-32 w-32'} height={100} width={100}/>
            <InputBox name={`${pathname.slice(1).toSentence() || 'First'} DiaryEntry`}/>
            <div className="space-y-2 grid-cols-1 justify-around">
                <>
                    <label className="flex items-center space-x-2">
                        <input type="radio" className="form-radio text-red-500" name="color" value="bg-red-500"
                               onClick={(e) => setSelectedColor(e.currentTarget.value)}/>
                        <span className="text-red-500">Red</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input type="radio" className="form-radio text-blue-500" name="color" value="bg-blue-500"
                               onClick={(e) => setSelectedColor(e.currentTarget.value)}/>
                        <span className="text-blue-500">Blue</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input type="radio" className="form-radio text-white" name="color" value="bg-yellow-500"
                               onClick={(e) => setSelectedColor(e.currentTarget.value)}/>
                        <span className="text-gray-900">Yellow</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input type="radio" className="form-radio text-green-500" name="color" value="bg-green-500"
                               onClick={(e) => setSelectedColor(e.currentTarget.value)}/>
                        <span className="text-green-500">Green</span>
                    </label>
                </>
                <div className={`h-12 w-12 ${selectedColor || 'bg-black'}`}></div>
            </div>

            <ol className="grid grid-rows-1 gap-4 list-none">
                {starterPokemon.map((pokemon) => (
                    <li key={pokemon.id} className="bg-white p-4 rounded-lg shadow-md list-none">
                        <Image src={pokemon.image} alt={pokemon.name} className="mx-auto" height={100} width={100}/>
                        <p className="text-center mt-2">{pokemon.name}</p>
                        <p className="text-center text-gray-500 text-xs">{pokemon.generation}</p>
                    </li>
                ))}
            </ol>
            <button
                type="button"
                onClick={callToAction.action}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {callToAction.title}
            </button>
        </>
    )
}