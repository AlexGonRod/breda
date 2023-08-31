// @ts-nocheck
import { describe, expect, it } from 'vitest'
import {render} from '@testing-library/svelte'
import {toBeInTheDocument } from '@testing-library/jest-dom'
import Toast from '../Toast.svelte'

describe('Dropdown', () => {

    it('Renders toast', () => {
        const {getByText} = render(Toast, {type: 'success', message: 'ok'})
       expect(getByText(/ok/i))
    })
    it('renders bad type', () => {
        const {getByText} = render(Toast, {type: 'fail', message: 'Error al guardar'})
        expect(getByText(/Error al guardar/i)).toBeInTheDocument()
    })
})
