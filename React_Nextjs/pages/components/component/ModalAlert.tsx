// Componente modal traído de: "https://react-bootstrap.netlify.app/docs/components/modal"
// Descripción: El modal alerta se muestra cuando el dato ingresado en "segmento_id" es superior a la longitud de la lista
// "Segmentos" ya que no sería posible relacionar las tablas ya sea "Calzadas" o "Bordillos" con "Segmentos"

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/ModalAlert.module.css";
import { useEffect } from "react";

// Definición del tipo para las propiedades que acepta el componente ModalAlert
type ModalAlertProps = {
  show: boolean;
  onClick: () => void;
  onHide: () => void;
  tableSegmentLength?: number;

  purpose: string;
  //alert1 = Hace referencia a cuando hay un error al momento de crear un dato en la tabla de "Calzadas" o "Bordillos", se muestra en caso de ingresar un "segmento_id" el cuál no existe y se pueda relacionar
  //alert2 = Hace referencia a cuando hay un error al momento de modificar un dato.
  //alert3 = Hace referencia a cuando faltan datos en el momento de crear nuevos datos (Petición POST)
  //delete = Mensaje de si está seguro de eliminar el dato
  //deletemessage = Mensaje de que la eliminación fue exitosa.
  //creationmessage = Mensaje de que la creación fue exitosa.
};

// Componente ModalAlert que acepta props para controlar el estado, el propósito y el tamaño de la tabla de segmentos
function ModalAlert({
  show,
  onClick,
  onHide,
  tableSegmentLength,
  purpose, //Se añadio esta propiedad de "purpose" para que el componente de "ModalAlert" fuese Re-usable y así evitar el ingreso de otros componentes, es decir, codigo innecesario.
}: ModalAlertProps) {
  let title;
  let body;

  if (purpose === "alert1") {
    title = "Error: Dato No válido";
    body = (
      <>
        El número que ingresó como "Id. segmento" es inválido, debe de ser un
        Id. de segmento que se encuentre actualmente creado
      </>
    );
  } else if (purpose === "delete") {
    title = "Confirmar eliminación";
    body = (
      <>
        <p>¿Estás seguro de que deseas eliminar este segmento?</p>
        <Button variant="danger" onClick={() => onClick()}>
          Eliminar
        </Button>
      </>
    );
  } else if (purpose === "alert2") {
    title = "Error: Dato no válido";
    body = (
      <>
        <p>
          No es posible modificar el dato, el nuevo "Id. segmento" no es válido.
          <br />
          Creando un segmento: Verificar que el Número Id. sea único. <br />
          Creando una calzada o bordillo: Verificar que el Segmento Id. exista.
        </p>
      </>
    );
  } else if (purpose === "alert3") {
    title = "Error: Datos vacios";
    body = (
      <>
        <p>
          No es posible crear un registro si no se almacenan todos los datos
          correspondientes.
        </p>
      </>
    );
  } else if (purpose === "deletemessage") {
    title = "Se elimino exitosamente";
  } else if (purpose === "creationmessage") {
    title = "Se creó exitosamente";
  }

  //Hook para el uso del "Enter" en los diferentes mensajes
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (purpose === "delete") {
          //Si está en el modal de "delete" y da click se ejecuta la accion "onClick()"
          onClick();
        }
        if (
          //Accion destinada al "Enter" en los diferentes tipos de "purpose" del modal, en este caso los esconde/cierra
          purpose === "alert1" ||
          purpose === "alert2" ||
          purpose === "alert3" ||
          purpose === "deletemessage" ||
          purpose === "creationmessage"
        ) {
          onHide();
        }
      }
    };

    // Añadir el evento de teclado cuando el modal está visible
    if (show) {
      document.addEventListener("keydown", handleKeyPress);
    }

    // Limpiar el evento de teclado cuando el modal se oculta
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [show, purpose, onClick]);

  return (
    <>
      {/* Modal que cambia su contenido dependiendo del propósito */}
      <Modal
        size="sm"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          {/* Cambia el título según la propiedad "purpose" */}
          <Modal.Title id="example-modal-sizes-title-sm">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAlert;
