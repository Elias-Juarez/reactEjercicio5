import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <Container className="my-4">
      <h1 className="text-center">Bienvenido</h1>
      <FormularioTarea></FormularioTarea>
    </Container>
  );
}

export default App;
