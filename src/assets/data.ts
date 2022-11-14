export type Tree = {
  id: number;
  name: string;
  icon: string;
  co2: number;
  guessId: string;
};
type ApiTree = Omit<Tree, "guessId">;
const apiTrees: Array<ApiTree> = [
  {
    id: 2301,
    name: "Acacia Mangium",
    icon: "https://medias.treedom.net/images/large/cb588be51046311e676746ad51a9fd32.jpg",
    co2: 200,
  },
  {
    id: 2288,
    name: "Banano",
    icon: "https://www.treedom.net/images/large_428690",
    co2: 50,
  },
  {
    id: 2287,
    name: "Longan",
    icon: "https://medias.treedom.net/images/large/30973e7f39481dd72775b183b5723bb7.jpg",
    co2: 100,
  },
  {
    id: 2285,
    name: "Pomelo ",
    icon: "https://www.treedom.net/images/large_1102635",
    co2: 100,
  },
  {
    id: 2282,
    name: "Moringa",
    icon: "https://www.treedom.net/images/large_2139085",
    co2: 200,
  },
  {
    id: 1902,
    name: "Leucena",
    icon: "https://medias.treedom.net/images/large/005b4fdd25d08d7063823343454d02ad.jpg",
    co2: 300,
  },
  {
    id: 2160,
    name: "Neem",
    icon: "https://www.treedom.net/images/large_1244610",
    co2: 900,
  },
  {
    id: 1750,
    name: "Caffè",
    icon: "https://www.treedom.net/images/large_428740",
    co2: 50,
  },
  {
    id: 994,
    name: "Albero dello Scorpione",
    icon: "https://medias.treedom.net/images/large/36872d96fc999a9d4af1944b45346a51.jpg",
    co2: 10,
  },
  {
    id: 502,
    name: "Jackfruit",
    icon: "https://www.treedom.net/images/large_428765",
    co2: 200,
  },
  {
    id: 2105,
    name: "Albero della Bilancia",
    icon: "https://medias.treedom.net/images/large/3f764a84158aaf169b96c5e805d53e29.jpg",
    co2: 200,
  },
  {
    id: 2254,
    name: "Guava",
    icon: "https://www.treedom.net/images/large_428703",
    co2: 200,
  },
  //   {
  //
  //     id: 430,
  //     name: "Macadamia",
  //     icon: "https://www.treedom.net/images/large_428807",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 2190,
  //     name: "Grevillea",
  //     icon: "https://www.treedom.net/images/large_428774",
  //     co2: 800,
  //   },
  //   {
  //
  //     id: 2012,
  //     name: "BabyTree",
  //     icon: "https://medias.treedom.net/images/large/abf8cec16119f95c33fdc6491874cd21.jpg",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 1719,
  //     name: "Anacardo",
  //     icon: "https://www.treedom.net/images/large_876236",
  //     co2: 300,
  //   },
  //   {
  //
  //     id: 2098,
  //     name: "Albero del Leone",
  //     icon: "https://medias.treedom.net/images/large/3df35617391d77903e2c9da4bdb7871e.jpg",
  //     co2: 250,
  //   },
  //   {
  //
  //     id: 1612,
  //     name: "Albero del Cancro",
  //     icon: "https://medias.treedom.net/images/large/d876e575335e6e1cde3cca83b72faee8.jpg",
  //     co2: 100,
  //   },
  //   {
  //
  //     id: 2116,
  //     name: "Albero del Sagittario",
  //     icon: "https://medias.treedom.net/images/large/57db594c03d733e92e28cf8c613915d3.jpg",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 2097,
  //     name: "Albero dei Gemelli",
  //     icon: "https://medias.treedom.net/images/large/c1b08274c60824ca15a717eda0e18a68.jpg",
  //     co2: 50,
  //   },
  //   {
  //
  //     id: 955,
  //     name: "Albero del Capricorno",
  //     icon: "https://medias.treedom.net/images/large/5632c7f415f1a00217b2cef3e48e0471.jpg",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 2200,
  //     name: "Albero dell'Acquario",
  //     icon: "https://medias.treedom.net/images/large/3085c2361ec298c203e46b6c59b5f531.jpg",
  //     co2: 300,
  //   },
  //   {
  //
  //     id: 2069,
  //     name: "Albero del Toro",
  //     icon: "https://medias.treedom.net/images/large/d82fe26fd9ea202e7c1b14e7df188982.jpg",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 967,
  //     name: "Albero dei Pesci",
  //     icon: "https://medias.treedom.net/images/large/87e15961947b1b9b3aaa04bfa0911021.jpg",
  //     co2: 55,
  //   },
  //   {
  //
  //     id: 1296,
  //     name: "Albero della Vergine",
  //     icon: "https://medias.treedom.net/images/large/5e46e4b0f0292f4006c73283b36fe3cd.jpg",
  //     co2: 200,
  //   },
  //   {
  //
  //     id: 1780,
  //     name: "Albero dell'Ariete",
  //     icon: "https://medias.treedom.net/images/large/0183df408b5791df653321fb0c115a8a.jpg",
  //     co2: 50,
  //   },
];

export const trees: Array<Tree> = [
  ...apiTrees.map((tree) => ({ ...tree, guessId: `A_${tree.id}` })),
  ...apiTrees.map((tree) => ({ ...tree, guessId: `B_${tree.id}` })),
];
