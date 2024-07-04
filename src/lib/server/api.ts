import type { Taules } from "$lib/interfaces";
import { prisma } from "../prisma";

export async function getTaules(): Promise<Taules> {
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
