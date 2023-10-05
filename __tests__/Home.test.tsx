import {render, fireEvent, screen, getByRole, within} from "@testing-library/react";
import {describe, jest, test} from "@jest/globals";
import Home from "@/pages";
import {RouterContext} from "next/dist/shared/lib/router-context.shared-runtime";
import {createMockRouter} from "@/test-utils/createMockRouter";
import '../customStringMethod'
import {list} from "postcss";

describe('Home Page Tests', () => {

    const router = createMockRouter({
        pathname: '/' as String
    })
    const {container} = render(
        <RouterContext.Provider value={router}>
            <Home/>
        </RouterContext.Provider>
    )
    const starterPokemon = [
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
    const radioValues = ["bg-red-500", "bg-blue-500", "bg-white", "bg-green-500"]
    const baseUrl = 'img.pokemondb.net'
    const character = 'charizard.avif'


    const homePageButton = screen.getByText('Next Page')
    const image = screen.getByAltText('Charizard')
    const label = screen.getByText('First DiaryEntry')
    const listItems = screen.getByRole('list')
    const radioInputs = screen.getAllByRole('radio')


    it('should navigate to the second page', () => {
        fireEvent.click(homePageButton)
        expect(router.push).toHaveBeenCalledWith('/second')
    })

    it('should have the correct button size', () => {
        const computedStyle = getComputedStyle(homePageButton)
        expect(computedStyle.padding).toBe('2px 6px 3px 6px')
    })

    it('should display the correct image size', () => {
        expect(image.className).toContain('h-64 w-64')
    })

    it('should have the correct image url', () => {
        expect(image.getAttribute('src')).toContain(baseUrl)
        expect(image.getAttribute('src')).toContain(character)
    })

    it('should have First Diary Entry', () => {
        expect(label.textContent).toEqual('First DiaryEntry')
    })

    it('should have correct list', () => {
        const {getAllByRole} = within(listItems)
        const items = getAllByRole("listitem")

        items.forEach((item, index) => {
            expect(item.textContent).toContain(starterPokemon[index].name)
        })

        expect(items.length).toBe(3)
    })

    it('should display list as a column', () => {
        expect(listItems.className).toBe("grid grid-cols-3 gap-4 list-none")
    })

    it('should display checkbox in correct order', () => {

        radioInputs.forEach((item, index) => {
            expect(item.getAttribute('value')).toBe(radioValues[index])
        })

        expect(radioInputs.length).toBe(4)
    })
})