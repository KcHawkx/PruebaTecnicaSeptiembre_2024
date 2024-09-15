import { GetServerSideProps } from "next";

// Datos estructurados desde Postgresql y manejados por PlayFramework
export type Segmentos = {
  id: number;
  numero: number;
  longitud: number;
  nomenclatura: string;
};

export type Calzadas = {
  id: number;
  segmento_id: number;
  longitud: number;
  descripcion: string;
};

export type Bordillos = {
  id: number;
  segmento_id: number;
  longitud: number;
  descripcion: string;
};

// Tipo de datos para trabajar localmente (Ya definidos en la parte superior del código) que se obtendrán de la petición HTTP
export type Datos = {
  Segmentos: Segmentos[];
  Calzadas: Calzadas[];
  Bordillos: Bordillos[];
};

// Función para obtener los datos de la tabla "Segmentos" de PostgreSQL mediante PlayFramework
export async function fetchSegmentos(): Promise<Segmentos[]> {
  const urlSegmentos = "http://localhost:9000/segmentos";
  try {
    const response = await fetch(urlSegmentos);
    if (!response.ok) {
      throw new Error("Ha ocurrido un error con la petición HTTP");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error de la peticion tabla segmentos: ", error);
    return [];
  }
}

// Función para obtener los datos de la tabla "Calzadas" de PostgreSQL mediante PlayFramework
export async function fetchCalzadas(): Promise<Calzadas[]> {
  const urlCalzadas = "http://localhost:9000/calzadas";
  try {
    const response = await fetch(urlCalzadas);
    if (!response.ok) {
      throw new Error("Ha ocurrido un error con la petición HTTP");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error de la peticion tabla calzadas: ", error);
    return [];
  }
}

// Función para obtener los datos de la tabla "Bordillos" de PostgreSQL mediante PlayFramework
export async function fetchBordillos(): Promise<Bordillos[]> {
  const urlBordillos = "http://localhost:9000/bordillos";
  try {
    const response = await fetch(urlBordillos);
    if (!response.ok) {
      throw new Error("Ha ocurrido un error con la petición HTTP");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error de la peticion tabla bordillos: ", error);
    return [];
  }
}

// Unificación de la data para un manejo más optimo.
export const getServerSideProps: GetServerSideProps = async () => {
  const [dataSegmentos, dataCalzadas, dataBordillos] = await Promise.all([
    fetchSegmentos(),
    fetchCalzadas(),
    fetchBordillos(),
  ]);

  // Ordenar los datos por id de menor a mayor.
  const sortedSegmentos = dataSegmentos.sort((a, b) => a.id - b.id);
  const sortedCalzadas = dataCalzadas.sort((a, b) => a.id - b.id);
  const sortedBordillos = dataBordillos.sort((a, b) => a.id - b.id);

  return {
    props: {
      data: {
        Segmentos: sortedSegmentos,
        Calzadas: sortedCalzadas,
        Bordillos: sortedBordillos,
      },
    },
  };
};
