import type { Taules } from "$lib/interfaces";
import { prisma } from "../prisma";
import { json } from '@sveltejs/kit'

export async function getTaules() {
    const taules = await prisma.persona.findMany({
        select: {
            id: true,
            nom: true,
            telefon: true,
            adults: true,
            nens: true,
            veggi: true,
            veggiNum: true,
        },
        orderBy: {
            id: 'asc'
        }
    })

    return taules
}
