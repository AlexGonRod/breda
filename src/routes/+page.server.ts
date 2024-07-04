import {fail, type Actions } from '@sveltejs/kit'
import { getTaules } from '$lib/server/api';
import {prisma } from '$lib/prisma'

export async function load() {
    const taules = await getTaules()
    return { taules }
}

export const actions: Actions = {
    add: async ({request}) => {
        const form = await request.formData();
        const nom = String(form.get("nom"));
        const telefon = String(form.get("telefon"));
        const adults = Number(form.get("adults"));
        const nens = Number(form.get("nens"));
        const veggi = Boolean(form.get('veggi'));
        const veggiNum = Number(form.get("veggiNum"));

        const error: Record<string,unknown> = {};

        if(!nom) error.nom = 'requerit'
        if (!telefon || telefon?.length !== 9) error.telefon = 'incorrecte'
        try {
            if (Object.keys(error).length > 0) {
                const errors = {
                    error
                }
                return fail(404, errors)

            }
            await prisma.persona.create({
                data: {
                    nom,
                    telefon,
                    adults,
                    nens,
                    veggi,
                    veggiNum,
                }
            })

            return {success: true}

        } catch (err) {
            error.db = 'error al guardar'
            return fail(500, error)
        }


    },
    update: async ({request, url}) => {
        const form = await request.formData();
        const id = url.searchParams.get("id");
        const adults = Number(form.get("adults"));
        const nens = Number(form.get("nens"));
        const veggi = Boolean(form.get("veggi"));
        const veggiNum = Number(form.get("veggiNum"));

        const error: Record<string,unknown> = {};
        try {
            if (!id) return fail(404, { id, error: true });
            if (!adults) error.adults = 'requerit';
            if (!nens) error.nens = 'requerit';


            if (Object.keys(error).length > 0) {
                const errors = {
                    error
                }
                return fail(404, errors)

            } else {
                await prisma.persona.update({
                    where: {
                        id: Number(id)
                    },
                    data: {
                        adults,
                        nens,
                        veggi,
                        veggiNum,
                    }
                })
                return {success: true}
            }
        } catch (err) {
            error.db = 'error al guardar'
            return fail(500, error)
        }
    },
    test: async ({request}) => {
        const form = await request.formData()
        const result = {
            nom: String(form.get("nom")),
            telefon: Number(form.get("telefon")),
            adults: Number(form.get("adults")),
            nens: Number(form.get("nens")),
            veggi: Boolean(form.get('veggi')),
            veggiNum: Number(form.get("veggiNum")),
        }
        console.log(result)

        return {
            success: true,
            data: result
        }
    }
};
