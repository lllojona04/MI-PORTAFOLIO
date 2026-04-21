const IMG = "./img/";

const proyectos = [
  {
    id: 1,
    categoria: "deporte",
    titulo: "Racing - Olímpico de León",
    fecha: "19 DE ABRIL DE 2026",

    descripcion: {
      desktop: "Fútbol femenino en estado puro. Intensidad, lucha y emoción en cada minuto.\n\nDebut en El Sardinero con victoria por 3-2 en un partido muy disputado.",
      mobile: "Fútbol femenino en estado puro. Victoria por 3-2 en El Sardinero."
    },

    portada: IMG + "P1010110.webp",

    galeria: [
      "P1010115 .webp", // Asegúrate que en GitHub NO tenga espacio antes del punto
      "P1010121.png", "P1010111.png", "P1010112.png", "P1010113.png", "P1010114.png",
      "P1010116.png", "P1010118.png", "P1010117.png", "P1010124.png", "P1010125.png",
      "P1010120.png", "P1010122.png", "P1010126.png", "P1010127.png", "P1010128.png",
      "P1010129.png", "P1010130.png", "P1010131.png", "P1010132.png", "P1010133.png",
      "P1010134.png", "P1010154.png", "P1010155.png", "P1010156.png", "P1010135.png",
      "P1010158.png", "P1010136.png", "P1010137.png", "P1010138.png", "P1010139.png",
      "P1010140.png", "P1010157.png", "P1010152.png", "P1010153.png", "P1010141.png",
      "P1010142.png", "P1010143.png", "P1010144.png", "P1010145.png", "P1010146.png",
      "P1010147.png", "P1010148.png", "P1010149.png", "P1010150.png", "P1010151.png"
    ].map(f => IMG + f)
  }
];
