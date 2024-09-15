//Descripción: Tabla inicial que muestra la data de Postgresql mediante el backend Play Framework
//Extra a esto tiene las funcionalidades de los metodos "POST" y "DELETE" del CRUD

//Librerias externas
import React, { useEffect, useState } from "react";
//Componentes
import ModalModifyData from "./ModalModifyData";
import ModalAlert from "./ModalAlert";
//CSS
import style from "@/pages/components/styles/Table.module.css";

//Propiedades del componente Table
type TableProps = {
  data: any[];
  columns: string[];
  onRowClick?: (id: number) => void; // Propiedad para el "clic" en las filas
  tableName: string;
  onDataChange: (newData: any[]) => void; // Propiedad para Actualizar los datos cuando se debe (Petición POST, PUT o DELETE)
};

type dataJSON = {
  id?: number;
  segmento_id?: number;
  numero?: number;
  longitud?: number;
  nomenclatura?: string;
  descripcion?: string;
};

const Table: React.FC<TableProps> = ({
  data,
  columns,
  onRowClick,
  tableName,
  onDataChange,
}) => {
  const [data1, setData] = useState(data); //Data no alterada para modificar está data y no verse afectada por los filtros.
  const [showmodalDelete, setShowModalDelete] = useState<boolean>(false); //Estado para mostrar el Modal de alerta
  const [showmodalEdit, setShowModalEdit] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0); //Estado para mostrar el Id de la fila seleccionada
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showmodalalertEdit, SetShowModalAlertEdit] = useState<boolean>(false);
  const [showmodalalertdelete, SetShowModalAlertDelete] =
    useState<boolean>(false);

  const handleClickModify = (row: any) => {
    setSelectedRow(row);
    setShowModalEdit(true);
  };

  const handleClickDelete = (id: number) => {
    setSelectedId(id); //Extrae el "id" del elemento de la tabla (fila) que se selecciona.
    setShowModalDelete(true); //Muestra el modal
  };

  const handlePetitionDelete = async () => {
    //Petición DELETE a Play Framework para eliminarlo en Postgresql

    const url = `http://localhost:9000/${tableName.toLowerCase()}/${selectedId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Ha ocurrido un error con la petición DELETE");
      }
      // Actualiza el estado despues de la petición DELETE, esto con el fin de actualizar(ocultar) la data a tiempo real desde la vista del usuario.
      onDataChange(data.filter((item) => item.id !== selectedId));

      SetShowModalAlertDelete(true); //Mostrar modal de Eliminación exitosa
    } catch (error) {
      // console.error(`Error en la petición: ${error}`);
    } finally {
      setShowModalDelete(false); //Cierra modal
    }
  };

  const handlePetitionPut = async (dataJSON: dataJSON) => {
    //Manejor de petición HTTPS de "PUT"
    const url = `http://localhost:9000/${tableName?.toLowerCase()}/${
      selectedRow?.id
    }`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataJSON),
      });
      if (!response.ok) {
        throw new Error("Ha ocurrido un error con la petición PUT.");
      } else {
        if (tableName != "Segmentos") {
          data = data1.map((item) =>
            item.id === selectedRow.id
              ? {
                  ...item,
                  segmento_id: dataJSON.segmento_id,
                  longitud: dataJSON.longitud,
                  descripcion: dataJSON.descripcion,
                }
              : item
          );
        } else {
          data = data1.map((item) =>
            item.id === selectedRow.id
              ? {
                  ...item,
                  numero: dataJSON.numero,
                  longitud: dataJSON.longitud,
                  nomenclatura: dataJSON.nomenclatura,
                }
              : item
          );
        }
        onDataChange(data);
        setShowModalEdit(false);
      }
      //Cambio de la data al usuario (Con este metodo se evíta enviar más peticiones https)
    } catch (error) {
      // console.error("Error en la petición PUT:", error);
      SetShowModalAlertEdit(true); //Mostrar modal de error para el usuario
    }
  };

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={style.th}>
                {column}
              </th>
            ))}
            <th className={style.th}></th>
            <th className={style.th}></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={style.td}
                  onClick={() => onRowClick?.(row.id)} //Obtener el id del elemento para los metodos de "Post" y "Delete", a su vez para funcionalidades como el filtro
                >
                  {/* Se compará el nombre de la columna que se administra desde "index.tsx" con la de la data,
                 y se hacen los reemplazos necesarios. Segmento id ->  segmento_id y Número-> numero*/}
                  {
                    row[
                      column
                        .toLowerCase()
                        .replace(" ", "_")
                        .replace("ú", "u") //Reemplaza la ú con u, evitando este caracter especial
                        .replace("ó", "o") //Reemplaza la ó con o, evitando este caracter especial
                    ]
                  }
                </td>
              ))}
              {/* Se separán para evitar que las funcionalidades se junten */}
              <td className={style.tdButton}>
                <button onClick={() => handleClickModify(row)}>
                  Modificar
                </button>
              </td>
              <td className={style.tdButton}>
                <button onClick={() => handleClickDelete(row.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalAlert
        show={showmodalDelete}
        onHide={() => setShowModalDelete(false)}
        onClick={handlePetitionDelete}
        purpose="delete" //Se mostrará el contenido de "delete" del componente Modal en este caso.
      ></ModalAlert>

      <ModalModifyData
        onClickSave={handlePetitionPut}
        data={data}
        show={showmodalEdit}
        handleClose={() => setShowModalEdit(false)}
        tableName={tableName}
        rowData={selectedRow}
      />

      <ModalAlert
        show={showmodalalertEdit}
        onHide={() => SetShowModalAlertEdit(false)}
        onClick={() => SetShowModalAlertEdit(false)}
        purpose="alert2" //Se mostrará el contenido de "delete" del componente Modal en este caso.
      ></ModalAlert>

      <ModalAlert
        show={showmodalalertdelete}
        onHide={() => SetShowModalAlertDelete(false)}
        onClick={() => SetShowModalAlertDelete(false)}
        purpose="deletemessage" //Se mostrará el contenido de "delete" del componente Modal en este caso.
      ></ModalAlert>
    </>
  );
};

export default Table;
