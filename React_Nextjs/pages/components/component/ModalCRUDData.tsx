//Componente modal traido de: "https://react-bootstrap.netlify.app/docs/components/modal/"
//Descripción: El modal se muestra al momento de dar "click" al botón dedicado para ingresar nuevos registros a la data en postgresql

//Librerias externas
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Componentes
import ModalAlert from "./ModalAlert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//CSS
import style from "../styles/ModalCRUDData.module.css";

//Estructura de la data JSON que se maneja por peticiones HTTPS
type dataJSON = {
  id?: number | 0;
  segmento_id?: number | 0;
  numero?: number | 0;
  longitud?: number | 0;
  nomenclatura?: string | "";
  descripcion?: string | "";
};

//Propiedades del componente
type ModelAddDataProps = {
  show: boolean;
  handleClose: () => void;
  tableName: string;
  lastId?: number;
  tableSegmentLength?: number;
  data?: any[];
  onDataChange?: (tableName: string, newData: any[]) => void;
};

//Logica
function ModalCRUDData({
  show,
  handleClose,
  tableName,
  tableSegmentLength,
  onDataChange,
  data,
}: ModelAddDataProps) {
  const [showAlert, setShowAlert] = useState<boolean>(false); //Modal alerta1
  const [purposealert, setPurposeAlert] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Evita que los id's ingresados en "Número" y "segmento_id" no sean erroneos, es decir, evita que estos no sean decimales.
    event.target.value = event.target.value.replace(".", "").replace(",", "");
  };

  // const IdSegmentoRef = useRef<HTMLInputElement>(null); //Hace referencia al ID único de todo segmento dado por POSTGRESQL
  const numeroRef = useRef<HTMLInputElement>(null); //Solo se usa en caso de ser un dato a la tabla Segmentos
  const segmento_IdRef = useRef<HTMLInputElement>(null); //campo "segmento_id" de la tabla "bordillos" y "calzadas"
  const longitudRef = useRef<HTMLInputElement>(null); //Campo longitud usado en todas las tablas
  const nomenclaturaRef = useRef<HTMLTextAreaElement>(null); //Si es para la tabla de "bordillos" o "calzadas", entonces nomenclatura hace referencia a la descripción

  const postPetition = async (dataJSON: dataJSON) => {
    //Petición HTTPS POST para agregar un nuevo elemento en la base de datos de Postgresql
    let response1: any;
    let result: any;
    const url = `http://localhost:9000/${tableName?.toLowerCase()}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataJSON),
      });
      response1 = response; //Copia del response
      result = await response.json(); //Deja como resultado la "id"
    } catch (error) {
      // console.log(`Error en la petición: ${error}`);
      // console.log(dataJSON);
      setPurposeAlert("alert2");
      setShowAlert(true); //Mostrar alerta2
    } finally {
      // console.log(response1);
      // console.log(result);
      if (response1.status >= 200 && response1.status < 300) {
        const idresult = [result.id];

        data = data?.filter((item) => item.type === tableName) || [];
        console.log(data);
        if (Array.isArray(data)) {
          data = [
            ...data,
            {
              type: tableName,
              id: idresult,
              segmento_id: dataJSON.segmento_id,
              numero: dataJSON.numero,
              longitud: dataJSON.longitud,
              nomenclatura: dataJSON.nomenclatura,
              descripcion: dataJSON.descripcion,
            },
          ];
          onDataChange?.(tableName, data);
        }
        handleClose();
        setPurposeAlert("creationmessage");
        setShowAlert(true); //Mostrar creationmessage
      }
    }
  };

  const handleSave = () => {
    if (tableName == "Segmentos") {
      //En caso de que se este creando datos en la tabla "Segmentos"
      const dataJSON = {
        // id: parseInt(IdSegmentoRef.current?.value || "0", 10),
        numero: parseInt(numeroRef.current?.value || "0", 10),
        longitud: parseInt(longitudRef.current?.value || "0", 10),
        nomenclatura: nomenclaturaRef.current?.value,
      };
      //Asegurarse que no tenga un espacio vacío (Se cambiaría a petición del cliente)
      if (
        dataJSON.numero === 0 ||
        dataJSON.longitud === 0 ||
        dataJSON.nomenclatura === ""
      ) {
        setPurposeAlert("alert3");
        setShowAlert(true); //Mostrar alerta3
      } else {
        postPetition(dataJSON);
      }
    } else {
      //En caso de que se este creando datos ya sea en "Bordillos" o "Calzadas"
      if (
        //Si se detecta que el segmento_id es mayor al que es posible asignar, entonces se muestra la alerta
        parseInt(segmento_IdRef.current?.value || "0", 10) >
        (tableSegmentLength || 0)
      ) {
        setPurposeAlert("alert3");
        setShowAlert(true); //Mostrar alerta3
      }
      const dataJSON = {
        // id: parseInt(IdSegmentoRef.current?.value || "0", 10), //no usado
        segmento_id: parseInt(segmento_IdRef.current?.value || "0", 10),
        longitud: parseInt(longitudRef.current?.value || "0", 10),
        descripcion: nomenclaturaRef.current?.value,
      };
      if (
        dataJSON.segmento_id === 0 ||
        dataJSON.longitud === 0 ||
        dataJSON.descripcion === ""
      ) {
        setPurposeAlert("alert3");
        setShowAlert(true); //Mostrar alerta3
      } else {
        postPetition(dataJSON);
      }
    }
  };

  let body;
  body = (
    <Form>
      {tableName == "Segmentos" && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Número del segmento (Identificador interno)</Form.Label>
          <Form.Control
            type="number"
            required
            ref={numeroRef}
            className={style.ModalData}
            onInput={handleInput}
          />
        </Form.Group>
      )}

      {tableName != "Segmentos" && (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ingrese el Id. del Segmento al cual pertenece</Form.Label>
          <Form.Control
            type="number"
            required
            ref={segmento_IdRef}
            className={style.ModalData}
            onInput={handleInput}
          />
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Longitud</Form.Label>
        <Form.Control
          type="number"
          required
          ref={longitudRef}
          className={style.ModalData}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          {/* Controlar el label dependiendo de la tabla */}
          {tableName == "Segmentos" ? "Nomenclatura" : "Descripción"}
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          ref={nomenclaturaRef}
          className={style.ModalData}
        />
      </Form.Group>
    </Form>
  );

  return (
    <>
      <Modal show={show} onHide={handleClose} className={style.ModalMain}>
        <Modal.Header closeButton className={style.ModalHeader}>
          <Modal.Title>Agregar elemento: {tableName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.ModalBody}>{body}</Modal.Body>
        <Modal.Footer className={style.ModalFooter}>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalAlert
        show={showAlert}
        onHide={() => setShowAlert(false)}
        onClick={() => setShowAlert(false)}
        tableSegmentLength={tableSegmentLength || 0}
        purpose={purposealert} //Se mostrará el contenido de "alert" del componente Modal en este
      ></ModalAlert>
    </>
  );
}

export default ModalCRUDData;
