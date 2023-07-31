## Projecte en Sveltekit per gestonar festes locals

Aquesta app es fará servir per poder gestionar pagaments realitzats i per ubicar les persones segons el numero de taula assignada

Estará allotjada en Vercel i la BBDD hi será a supabase codificada en prisma

## TO-DO

<ul>
    <li>[X] Codi HTML del formulari amb noms, pagat/no pagat, i num de taula</li>
        <ul>
            <li>[X] Formulari amb dades: nom, telefon, taula, pagat(fale, per default), nens</li>
            <li>[X] Si sel.lecciona una taula, desapareixen opcions</li>
            <li>[] Minim de persones/taula de 4</li>
            <li>[] Asignar els grups de menys de 4 a taules de menys de 10</li>
        </ol>
    <li>[] Codi i diagrama de la BBDD</li>
    <li>[] Taula "persona" (id, nom, telefon, pagat(boolean), taula)</li>
    <li>[] Taula "taula" (array "persona")</li>
 <ol>

## Maybe
[] Dibuix (diagrama) de les taules y les persones. Es pot fer una taula tipus excel en el seu defecte per taula.
