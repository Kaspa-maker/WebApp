import driverModel from "./api/drivers/driverModel";

const drivers = [
    {
        id: 1,
        name: "Lewis Hamilton",
        description: "Lewis Carl Davidson Hamilton(born 7 January 1985) is a British racing driver who races in Formula One for Mercedes-AMG Petronas Motorsport. A six-time Formula One World Champion",
        linkInsta: "https://www.instagram.com/lewishamilton/?hl=pl",
        linkBackground: "https://en.wikipedia.org/wiki/Lewis_Hamilton",
        image: "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.640.medium.jpg/1554818913486.jpg" 
    },
    {
        id: 2,
        name: "Valteri Bottas",
        description: "Valtteri Viktor Bottas (born 28 August 1989) is a Finnish racing driver currently competing in Formula One with Mercedes, having previously driven for Williams from 2013 to 2016.",
        linkInsta: "https://www.instagram.com/valtteribottas/?hl=pl",
        linkBackground: "https://en.wikipedia.org/wiki/Valtteri_Bottas",
        image: "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1554818929157.jpg"
    },
    {
        id: 3,
        name: "Charles Leclerc",
        description: "Charles Leclerc (born 16 October 1997) is a Monégasque racing driver, currently driving in Formula One for Ferrari. Leclerc won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017.",
        linkInsta: "https://www.instagram.com/charles_leclerc/?hl=pl",
        linkBackground: "https://en.wikipedia.org/wiki/Charles_Leclerc",
        image: "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1567179277948.jpg"
    }
];

export default async function loadDrivers() {
    try {
      await driverModel.deleteMany();
      await driverModel.collection.insertMany(drivers);
      console.info(`${drivers.length} Drivers were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load Driver Data: ${err}`);
    }
  }