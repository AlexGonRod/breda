// @ts-nocheck
import { describe, expect, it } from 'vitest'
import {render, fireEvent } from '@testing-library/svelte'
import {toBeInTheDocument } from '@testing-library/jest-dom'
import Dropdown from '../Dropdown.svelte'

describe('Dropdown', () => {
    const props = {
        optionSelected: { id: 0, nom: 'Taula' },
        options: [{ id: 0, nom: 'Taula' }, { id: 1, nom: 'Alex' }]
    }

    it('Renders Dropdown', () => {
        const {getByRole} = render(Dropdown, props)
       expect(getByRole('button', {nom: 'Taula'})).toBeInTheDocument()
    })
    it('Open the dropdown', async () => {
        const {getByRole} = render(Dropdown, props)
        const button = getByRole('button', {nom: 'Taula'})
        await fireEvent.click(button)
        expect(getByRole('menu')).toBeInTheDocument()
    })
    it('Render list of options', async () => {
        const {getByRole} = render(Dropdown, props)
        const button = getByRole('button', {nom: 'Taula'})
        await fireEvent.click(button)
        expect(getByRole('menu')).toBeInTheDocument()
        expect(getByRole('menuitem', {name: 'Taula'})).toBeInTheDocument()
        expect(getByRole('menuitem', {name: 'Alex'})).toBeInTheDocument()
    })
})
