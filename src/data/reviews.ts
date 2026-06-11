export interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
  isLocalGuide?: boolean;
  photoCount?: number;
  reviewCount?: number;
}

export const reviews: Review[] = [
  {
    name: "Esteban Henríquez",
    date: "Hace 2 años",
    text: "Ideal para sesionar o grabar, equipado con lo necesario para una jornada de creación, muy buena onda, calidez de hogar, y lo mejor; un anfitrión comprometido, amable y dispuesto.",
    rating: 5,
  },
  {
    name: "Joaquín Valdés Valenzuela",
    date: "Hace 2 años",
    text: "El lugar más cómodo en el que he ensayado, sala bien equipada, espaciosa y esto es muy valioso porque lo hace versátil, la decoración es atractiva y agradable, el anfitrión muy buena onda y muy cordial, 10 de 10.",
    rating: 5,
    reviewCount: 2,
  },
  {
    name: "Christian Ramos",
    date: "Hace un año",
    text: "Tremendo lugar, muy acogedor, buen espacio para hacer música, una muy buena sala. Dani el mejor anfitrión 🙌👏",
    rating: 5,
  },
  {
    name: "Pipe Ponce",
    date: "Hace 2 años",
    text: "Es un lugar increíble, es fantástico el reino de Daniel, es un lugar inimaginable. Totalmente recomendable la experiencia.",
    rating: 5,
    isLocalGuide: true,
    reviewCount: 28,
    photoCount: 18,
  },
  {
    name: "Trinidad Paz",
    date: "Hace 2 años",
    text: "Muy buen estudio para ensayo y grabación, amplio, adaptable y su dueño muy buena onda.",
    rating: 5,
    reviewCount: 5,
  },
  {
    name: "Jorge Miguel Soto Olave",
    date: "Hace 2 años",
    text: "Todo muy bacán, excelente disposición del dueño y excelente sonido también.",
    rating: 5,
    reviewCount: 2,
  },
  {
    name: "Felipe Rodríguez",
    date: "Hace 6 años",
    text: "Buena onda y pro.",
    rating: 5,
    reviewCount: 2,
  },
  {
    name: "DroneChile",
    date: "Hace 6 años",
    text: "Se ve muy bien equipado.",
    rating: 5,
    isLocalGuide: true,
    reviewCount: 262,
    photoCount: 264,
  },
];
