import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Ajoute quelques brasseries
    const brasserie1 = await prisma.brewery.create({
        data: {
            name: 'Brasserie du Mont Blanc',
        },
    });

    const brasserie2 = await prisma.brewery.create({
        data: {
            name: 'BrewDog',
        },
    });

    // Ajoute des bières pour chaque brasserie
    await prisma.beers.createMany({
        data: [
            {
                beer: 'Blanche du Mont Blanc',
                price: 4.5,
                brewery_id: brasserie1.id,
                imageUrl: 'https://example.com/blanche.jpg',
            },
            {
                beer: 'IPA BrewDog',
                price: 5.2,
                brewery_id: brasserie2.id,
                imageUrl: 'https://example.com/ipa.jpg',
            },
            {
                beer: 'Pale Ale BrewDog',
                price: 4.9,
                brewery_id: brasserie2.id,
                imageUrl: 'https://example.com/paleale.jpg',
            },
        ],
    });
}

main()
    .then(() => {
        console.log('Données insérées avec succès');
        return prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        return prisma.$disconnect().finally(() => process.exit(1));
    });
