import { Container } from "react-bootstrap";

const SeccionCategoria = ({ children, titulo }) => {
  return (
    <Container>
      <h3>{titulo}</h3>
      <div className="row d-flex flex-wrap gap-3 p-3 rounded mb-5 w-100 justify-content-center ">
        {children}
      </div>
    </Container>
  );
};

export default SeccionCategoria;
