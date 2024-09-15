//Descripción: Funcionalidad que filtra las tablas "Calzadas" y "Bordillos" al momento de dar click en alguna de las filas

//Librerias externas
import { useState } from "react";
import { Datos } from "@/pages/api/APIPlay";

export const useSegmentoFilter = (data: Datos) => {
  // Estado para almacenar el ID de la fila seleccionada
  const [segmentoId, setSegmentoId] = useState<number>(0);

  // Función para manejar el clic en una fila
  const handleRowClick = (id: number) => {
    // console.log(segmentoId);
    setSegmentoId(id);
  };

  // Filtrar las calzadas y bordillos según el segmento seleccionado
  const filteredCalzadas = segmentoId
    ? data.Calzadas.filter((calzada) => calzada.segmento_id === segmentoId)
    : data.Calzadas;

  const filteredBordillos = segmentoId
    ? data.Bordillos.filter((bordillo) => bordillo.segmento_id === segmentoId)
    : data.Bordillos;

  //Resultado del 'hook' que se envía a index.tsx
  return {
    segmentoId,
    setSegmentoId,
    handleRowClick,
    filteredCalzadas,
    filteredBordillos,
  };
};
