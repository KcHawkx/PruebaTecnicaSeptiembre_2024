//Librerias externas
import { useRef, useState } from "react";

//Componentes
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//CSS
import style from "../styles/ModalCRUDData.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

type dataJSON = {
  id?: number;
  segmento_id?: number;
  numero?: number;
  longitud?: number;
  nomenclatura?: string;
  descripcion?: string;
};

type ModalModifyDataProps = {
  data: any[];
  show: boolean;
  handleClose: () => void;
  tableName?: string;
  rowData?: dataJSON;
  onClickSave: (JSON: dataJSON) => void;
  setSegmentoId?: boolean;
};

function ModalModifyData({
  show,
  handleClose,
  tableName,
  rowData,
  onClickSave,
}: ModalModifyDataProps) {
  const [showAlert, setShowAlert] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[.,]/g, "");
  };

  const IdSegmentoRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);
  const segmento_IdRef = useRef<HTMLInputElement>(null);
  const longitudRef = useRef<HTMLInputElement>(null);
  const nomenclaturaRef = useRef<HTMLTextAreaElement>(null);

  const descripcion =
    tableName === "Segmentos" ? rowData?.nomenclatura : rowData?.descripcion;

  const handleSave = () => {
    if (tableName === "Segmentos") {
      const dataJSON = {
        numero: parseInt(numeroRef.current?.value || "0", 10),
        longitud: parseInt(longitudRef.current?.value || "0", 10),
        nomenclatura: nomenclaturaRef.current?.value,
      };
      onClickSave(dataJSON);
    } else {
      const dataJSON = {
        segmento_id: parseInt(segmento_IdRef.current?.value || "0", 10),
        longitud: parseInt(longitudRef.current?.value || "0", 10),
        descripcion: nomenclaturaRef.current?.value,
      };
      onClickSave(dataJSON);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className={style.ModalMain}>
        <Modal.Header closeButton className={style.ModalHeader}>
          <Modal.Title>Modificar elemento</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.ModalBody}>
          <Form>
            <Form.Group
              className={`mb-3 ${style.customGroup}`}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Identificador base de datos</Form.Label>
              <Form.Control
                type="text"
                defaultValue={rowData?.id}
                readOnly
                className={style.ModalIdData}
                ref={IdSegmentoRef}
              />
            </Form.Group>

            {tableName === "Segmentos" && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
              >
                <Form.Label>
                  Número del segmento (Identificador interno)
                </Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={rowData?.numero}
                  required
                  ref={numeroRef}
                  className={style.ModalData}
                  onInput={handleInput}
                />
              </Form.Group>
            )}

            {tableName !== "Segmentos" && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Label>
                  Ingrese el Id. del Segmento al cual pertenece
                </Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={rowData?.segmento_id}
                  required
                  ref={segmento_IdRef}
                  className={style.ModalData}
                  onInput={handleInput}
                />
              </Form.Group>
            )}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea4"
            >
              <Form.Label>Longitud</Form.Label>
              <Form.Control
                type="number"
                defaultValue={rowData?.longitud}
                required
                ref={longitudRef}
                className={style.ModalData}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea5"
            >
              <Form.Label>
                {tableName === "Segmentos" ? "Nomenclatura" : "Descripción"}
              </Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={descripcion}
                rows={3}
                ref={nomenclaturaRef}
                className={style.ModalData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={style.ModalFooter}>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>
      {showAlert && (
        <div className="alert alert-danger">Error al modificar el dato.</div>
      )}
    </>
  );
}

export default ModalModifyData;
