export interface Service {
  title: string;
  description: string;
  price: string;
  note?: string;
}

export interface ClassItem {
  name: string;
  price: string;
}

export interface VideoService {
  title: string;
  description: string;
  price: string;
  note?: string;
  features?: string[];
}

export const serviciosGrabacion: Service[] = [
  {
    title: "Grabación maqueta vocal",
    description: "1 hora de estudio",
    price: "Desde $15.000 CLP",
  },
  {
    title: "Grabación vocal o instrumental",
    description: "2 horas de estudio",
    price: "Desde $40.000 CLP",
  },
  {
    title: "Grabación sesión banda en vivo multipista",
    description: "2 horas de estudio",
    price: "Desde $50.000 CLP",
  },
  {
    title: "Grabación, Mezcla y Master — Producción Urbano",
    description: "3 horas de estudio",
    price: "Desde $120.000 CLP",
  },
  {
    title: "Grabación, Mezcla y Master — Grupo Musical",
    description: "4 horas de estudio",
    price: "Desde $150.000 CLP",
  },
  {
    title: "Grabación multipista en locaciones",
    description: "Grabación fuera del estudio",
    price: "Desde $200.000 CLP",
    note: "No incluye transporte, catering o alojamiento",
  },
];

export const salaEnsayo = {
  title: "Sala de ensayo",
  price: "$8.000 CLP",
  unit: "/ hora",
};

export const clasesMusica: ClassItem[] = [
  { name: "Canto", price: "$25.000 CLP" },
  { name: "Guitarra", price: "$15.000 CLP" },
  { name: "Piano", price: "$15.000 CLP" },
  { name: "Saxo", price: "$15.000 CLP" },
  { name: "Bajo", price: "$15.000 CLP" },
  { name: "Batería", price: "$15.000 CLP" },
  { name: "Producción musical", price: "$20.000 CLP" },
  { name: "Ableton Live", price: "$20.000 CLP" },
];

export const videoServicios: VideoService[] = [
  {
    title: "Videos musicales",
    description: "Guión, dirección, rodaje y postproducción completa",
    price: "Desde $250.000 CLP",
  },
  {
    title: "Video sesión musical",
    description: "Captura multicámara en vivo en nuestro estudio con postproducción de audio y video",
    price: "Desde $210.000 CLP",
  },
  {
    title: "Videos de eventos",
    description: "",
    price: "Desde $180.000 CLP",
    features: [
      "Cobertura del evento con edición de highlights",
      "Registro multicámara completo del evento",
    ],
  },
  {
    title: "Transmisión en directo",
    description: "",
    price: "Desde $25.000 CLP",
    note: "valor por hora",
    features: [
      "Transmisión en vivo con mezcla de audio y video en tiempo real",
      "Transmisión multicámara con producción en vivo",
    ],
  },
  {
    title: "Video sesión musical",
    description: "Captura en vivo de tu sesión en el estudio",
    price: "Desde $210.000 CLP",
  },
  {
    title: "Producción de videos de eventos",
    description: "Cobertura completa con múltiples cámaras",
    price: "Desde $180.000 CLP",
  },
  {
    title: "Transmisión en directo",
    description: "Streaming en vivo multicámara para tu evento",
    price: "Desde $25.000 CLP",
    note: "valor por hora",
  },
];
