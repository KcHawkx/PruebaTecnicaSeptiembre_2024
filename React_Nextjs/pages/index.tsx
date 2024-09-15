//Librerias externas
import React, { useEffect, useState } from "react";
import { getServerSideProps, Datos } from "./api/APIPlay";

//Componentes
import { useSegmentoFilter } from "../pages/components/component/UseFilterSegmentos";
import Table from "./components/component/Table";
import Sidebar from "./components/component/SideBar";
import ButtonImage from "./components/component/ButtonImage";
import ModalCRUDData from "./components/component/ModalCRUDData";

//Imagenes
import ImageBorrarFiltro from "@/images/BorrarFiltro.png";
import ImageAgregar from "@/images/Agregar.png";

//CSS
import style from "@/styles/Home.module.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

// Tipo de estructura que tiene "Datos", el cuál es traído desde la petición HTTPS
type Props = {
  data: Datos;
};

export default function Home({ data }: Props) {
  const [showModal, setShowModal] = useState(false); //Estado que abre o cierra modal
  const [modalTableName, setModalTableName] = useState<string>("");
  const [modalLastId, setModalLastId] = useState<number>(0);

  //Manejar la actualización de la data
  const [segmentos, setSegmentos] = useState(data.Segmentos);
  const [calzadas, setCalzadas] = useState(data.Calzadas);
  const [bordillos, setBordillos] = useState(data.Bordillos);
  ///////

  /////////////Para actualizar la data al crear una petición POST:
  const [combinedData, setCombinedData] = useState<any>([]);

  useEffect(() => {
    // Combina los arrays en un solo
    const combined = [
      ...segmentos.map((item) => ({ type: "Segmentos", ...item })),
      ...calzadas.map((item) => ({ type: "Calzadas", ...item })),
      ...bordillos.map((item) => ({ type: "Bordillos", ...item })),
    ];

    setCombinedData(combined);
  }, []);
  /////////////

  const handleButtonClick = (tableName: string, lastId: number) => {
    setModalTableName(tableName);
    setModalLastId(lastId);
    setShowModal(true);
  };

  const {
    segmentoId,
    setSegmentoId,
    handleRowClick,
    filteredCalzadas,
    filteredBordillos,
  } = useSegmentoFilter({
    Segmentos: segmentos,
    Calzadas: calzadas,
    Bordillos: bordillos,
  });

  const handleDataChange = (tableName: string, newData: any[]) => {
    if (tableName === "Segmentos") {
      setSegmentos(newData);
    } else if (tableName === "Calzadas") {
      setCalzadas(newData);
    } else if (tableName === "Bordillos") {
      setBordillos(newData);
    }
  };

  return (
    <>
      <div className={style.DivPricipal}>
        <div>
          <Sidebar />
        </div>
        <div className={style.DivTablas}>
          <div className={style.DivTablaSegmentos}>
            <div className={style.TablaTituloPadre}>
              <div className={style.TablasTitulo}>
                <h1>Segmentos</h1>
                {segmentoId === 0 ? (
                  ""
                ) : (
                  <div
                    data-tooltip-id="tooltip-Quitarfiltros"
                    data-tooltip-content="
                  Eliminar filtro"
                    data-tooltip-place="right"
                  >
                    <ButtonImage
                      image={ImageBorrarFiltro}
                      width={30}
                      height={30}
                      onClick={() => {
                        setSegmentoId(0);
                      }}
                    />
                  </div>
                )}
                <div
                  data-tooltip-id="tooltip-Agregar"
                  data-tooltip-content="
                  Agregar elemento"
                  data-tooltip-place="top"
                >
                  <ButtonImage
                    image={ImageAgregar}
                    width={30}
                    height={30}
                    onClick={() =>
                      handleButtonClick("Segmentos", data.Segmentos.length + 1)
                    }
                  />
                </div>
              </div>
            </div>
            <Table
              data={segmentos}
              columns={["ID", "Número", "Longitud", "Nomenclatura"]}
              onRowClick={handleRowClick}
              tableName="Segmentos"
              onDataChange={(newData) => handleDataChange("Segmentos", newData)}
            />
          </div>
          <div className={style.DivTablaCalzadas}>
            <div className={style.TablaTituloPadre}>
              <div className={style.TablasTitulo}>
                <h1>Calzadas</h1>
                <div
                  data-tooltip-id="tooltip-Agregar"
                  data-tooltip-content="
                  Agregar elemento."
                  data-tooltip-place="right"
                >
                  <ButtonImage
                    image={ImageAgregar}
                    width={30}
                    height={30}
                    onClick={() =>
                      handleButtonClick("Calzadas", data.Calzadas.length + 1)
                    }
                  />
                </div>
              </div>
            </div>
            <Table
              data={filteredCalzadas}
              columns={["ID", "Segmento ID", "Longitud", "Descripción"]}
              tableName="Calzadas"
              onDataChange={(newData) => handleDataChange("Calzadas", newData)}
            />
          </div>
          <div className={style.DivTablaBordillos}>
            <div className={style.TablaTituloPadre}>
              <div className={style.TablasTitulo}>
                <h1>Bordillos</h1>
                <div
                  data-tooltip-id="tooltip-Agregar"
                  data-tooltip-content="
                  Agregar elemento"
                  data-tooltip-place="right"
                >
                  <ButtonImage
                    image={ImageAgregar}
                    width={30}
                    height={30}
                    onClick={() =>
                      handleButtonClick("Bordillos", data.Bordillos.length + 1)
                    }
                  />
                </div>
              </div>
            </div>
            <Table
              data={filteredBordillos}
              columns={["ID", "Segmento ID", "Longitud", "Descripción"]}
              tableName="Bordillos"
              onDataChange={(newData) => handleDataChange("Bordillos", newData)}
            />
          </div>
        </div>
        <div className={style.DivInfo}>
          <h4>Información</h4>
          <p>
            <strong>ID:</strong> hace referencia a un identificador dentro de la
            base de datos (PostgreSQL).
          </p>
          <p>
            <strong>Número(Tabla Segmentos):</strong> hace referencia al
            identificador único interno.
          </p>
          <p>
            <strong>Nomenclatura(Tabla Segmentos):</strong> hace referencia al
            nombre/descripción interna que se le da a cada segmento.
          </p>
          <p>
            <strong>Longitud():</strong> hace referencia al total de longitud
            (Para la prueba técnica no se decidio poner unidades).
          </p>

          <p>
            <strong>Descripción(Tabla Calzadas y Bordillos):</strong>{" "}
            Observaciones internas realizadas.
          </p>
        </div>
      </div>

      <ModalCRUDData
        show={showModal}
        handleClose={() => setShowModal(false)}
        tableName={modalTableName}
        lastId={modalLastId}
        onDataChange={handleDataChange}
        data={combinedData}
      />
      <Tooltip id="tooltip-Agregar" />
      <Tooltip id="tooltip-Quitarfiltros" />
    </>
  );
}

export { getServerSideProps };
