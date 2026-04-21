const IMG = "./img/";

const proyectos = [
  {
    id: 1,
    categoria: "deporte",
    titulo: "Racing - Olímpico de León",
    fecha: "19 DE ABRIL DE 2026",

    descripcion: {
      desktop:
        "Fútbol femenino en estado puro. Intensidad, lucha y emoción en cada minuto.\n\nDebut en El Sardinero con victoria por 3-2 en un partido muy disputado.\n\nUna mañana para recordar.",
      mobile:
        "Fútbol femenino en estado puro. Intensidad y emoción.\n\nVictoria por 3-2 en El Sardinero."
    },

    portada: IMG + "P1010110.webp",

    galeria: [
      "P1010115.webp", "P1010121.webp", "P1010111.webp", "P1010112.webp", 
      "P1010113.webp", "P1010114.webp", "P1010116.webp", "P1010118.webp", 
      " বরা P1010117.webp", "P1010124.webp", "P1010125.webp", "P1010120.webp", 
      "P1010122.webp", "P1010126.webp", "P1010127.webp", "P1010128.webp", 
      "P1010129.webp", "P1010130.webp", "P1010131.webp", "P1010132.webp", 
      "P1010133.webp", "P1010134.webp", "P1010154.webp", "P1010155.webp", 
      "P1010156.webp", "P1010135.webp", "P1010158.webp", "P1010136.webp", 
      "P1010137.webp", "P1010138.webp", "P1010139.webp", "P1010140.webp", 
      "P1010157.webp", "P1010152.webp", "P1010153.webp", "P1010141.webp", 
      "P1010142.webp", "P1010143.webp", "P1010144.webp", "P1010145.webp", 
      "P1010146.webp", "P1010147.webp", "P1010148.webp", "P1010149.webp", 
      "P1010150.webp", "P1010151.webp"
    ].map(f => IMG + f)
  }
];
