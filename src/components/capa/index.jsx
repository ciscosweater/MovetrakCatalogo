import { Container, Content } from "./styles";
import CapaImagem from "../../capa.png";

function Capa() {
    return (
        <Container>
            <Content src={CapaImagem} />
        </Container>
    );
};

export default Capa;