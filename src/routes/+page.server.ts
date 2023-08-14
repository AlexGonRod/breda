import {fail, redirect, type Actions} from '@sveltejs/kit'
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

        if(!nom) return fail(400, {nom, missing: true})
        if(!telefon) return fail(400, {telefon, missing: true})

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
        throw redirect(303, '/')
        return { success: true}
    },
    update: async ({request, url}) => {
        const form = await request.formData();
        const id = url.searchParams.get("id");
        const adults = Number(form.get("adults"));
        const nens = Number(form.get("nens"));
        const veggi = Boolean(form.get("veggi"));
        const veggiNum = Number(form.get("veggiNum"));

        if (!id) return fail(400, { id, missing: true })
        if (!adults) return fail(400, { adults, missing: true })
        if (!nens) return fail(400, { nens, missing: true })

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
        throw redirect(303, '/')
        return {
            success: true
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
