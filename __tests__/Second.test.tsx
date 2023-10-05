import {describe} from "@jest/globals";
import {createMockRouter} from "@/test-utils/createMockRouter";
import {fireEvent, render, screen, within} from "@testing-library/react";
import {RouterContext} from "next/dist/shared/lib/router-context.shared-runtime";
import Second from "@/pages/second";

describe('Second Page Tests', () => {
    const router = createMockRouter({
        pathname: '/second' as String
    })
    const {container} = render(
        <RouterContext.Provider value={router}>
            <Second/>
        </RouterContext.Provider>
    )
    const starterPokemon = [
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
    const radioValues = ["bg-red-500", "bg-blue-500", "bg-white", "bg-green-500"]
    const baseUrl = 'img.pokemondb.net'
    const character = 'bulbasaur.avif'


    const homePageButton = screen.getByText('Onto Third and Final')
    const image = screen.getByAltText('Charizard')
    const label = screen.getByText('Second DiaryEntry')
    const listItems = screen.getByRole('list')
    const radioInputs = screen.getAllByRole('radio')


    it('should navigate to the third page', () => {
        fireEvent.click(homePageButton)
        expect(router.push).toHaveBeenCalledWith('/third')
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
        expect(label.textContent).toEqual('Second DiaryEntry')
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