import ajaxDeVercel from "~/assets/ajax-de-vercel.png";
import dynamometre from "~/assets/dynamometre.png";
import elFarique from "~/assets/el-farique.png";
import fcPirates from "~/assets/fc-pirates.png";
import laMysteam from "~/assets/la-mysteam.png";
import laTroisiemeMiTemps from "~/assets/la-troisieme-mi-temps.png";
import leRealDesSaucisses from "~/assets/le-real-des-saucisses.png";
import lesCucurbitaces from "~/assets/les-cucurbitaces.png";
import lesMagixs from "~/assets/les-magixs.png";
import lesOutsiders from "~/assets/les-outsiders.png";
import lesPiedsCarres from "~/assets/les-pieds-carres.png";
import theSpicySpacePotatoes from "~/assets/the-spicy-space-potatoes.png";

export const teams: { name: string; icon: string }[] = [
  {
    name: "Le Real des Saucisses",
    icon: leRealDesSaucisses,
  },
  {
    name: "La 3ème Mi-Temps",
    icon: laTroisiemeMiTemps,
  },
  {
    name: "Les Cucurbitacés",
    icon: lesCucurbitaces,
  },
  {
    name: "FC Pirates",
    icon: fcPirates,
  },
  {
    name: "El Farique",
    icon: elFarique,
  },
  {
    name: "Les Magix's",
    icon: lesMagixs,
  },
  {
    name: "Les Outsiders",
    icon: lesOutsiders,
  },
  {
    name: "Ajax de Vercel",
    icon: ajaxDeVercel,
  },
  {
    name: "The Spicy Space Potatoes",
    icon: theSpicySpacePotatoes,
  },
  {
    name: "Dynamo Mètre",
    icon: dynamometre,
  },
  {
    name: "La Mysteam",
    icon: laMysteam,
  },
  {
    name: "Les Pieds Carrés",
    icon: lesPiedsCarres,
  },
];

export const matchHistory: {
  name: string;
  date: Date;
  teams: number[];
  score: number[];
}[] = [
  {
    name: "Quart de finale n°1",
    date: new Date(1718706600000),
    teams: [0, 3],
    score: [6, 0],
  },
  {
    name: "Quart de finale n°2",
    date: new Date(1718707800000),
    teams: [7, 5],
    score: [1, 2],
  },
];

export const matchProgram: { name: string; date: Date; teams: number[] }[] = [
  {
    name: "Quart de finale n°3",
    date: new Date(1718879400000),
    teams: [1, 10],
  },
  {
    name: "Quart de finale n°4",
    date: new Date(1718880600000),
    teams: [8, 6],
  },
  {
    name: "Demi finale n°1",
    date: new Date(1719225000000),
    teams: [3, 5],
  },
  {
    name: "Demi finale n°2",
    date: new Date(1719226200000),
    teams: [],
  },
  {
    name: "Petite finale",
    date: new Date(1719312300000),
    teams: [],
  },
  {
    name: "Finale",
    date: new Date(1719485100000),
    teams: [],
  },
];
