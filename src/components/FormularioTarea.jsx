import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dentro de funcion");
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea != nombreTarea);
    setTareas(tareasFiltradas)
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            required
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="dark" className="ms-3" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
