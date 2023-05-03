import { Container, Content, Field, FieldCollumn, FieldLine, FooterDiv, FooterLogo, Image, IndicatorText, MainText, SecondField, SecondFieldCollumn, Text, ThreeFieldLine } from "./styles";
import Movetrak from '../../Cyidob-W8AAb1bE.png';


function Relatorio(props) {
    return (
        <Container>
            <Content>
                <FieldLine>
                    <FieldCollumn>
                        <Field>
                            <MainText>Nome do Proprietário</MainText>
                        </Field>
                        <Field>
                            <Text>{props.nome}</Text>
                        </Field>
                    </FieldCollumn>
                    <FieldCollumn>
                        <Field>
                            <MainText>Placa</MainText>
                        </Field>
                        <Field>
                            <Text>{props.placa}</Text>
                        </Field>
                    </FieldCollumn>
                </FieldLine>
                <ThreeFieldLine>
                    <SecondFieldCollumn>
                        <SecondField>
                            <MainText>KM da Rota</MainText>
                        </SecondField>
                        <SecondField>
                            <Text>{props.rota}</Text>
                        </SecondField>
                    </SecondFieldCollumn>
                    <SecondFieldCollumn>
                        <SecondField>
                            <MainText>KM Total Diária</MainText>
                        </SecondField>
                        <SecondField>
                            <Text>{props.diaria}</Text>
                        </SecondField>
                    </SecondFieldCollumn>
                    <SecondFieldCollumn>
                        <SecondField>
                            <MainText>Turnos</MainText>
                        </SecondField>
                        <SecondField>
                            <Text>{props.turnos}</Text>
                        </SecondField>
                    </SecondFieldCollumn>
                </ThreeFieldLine>
                <Image src={props.foto} />
                <FooterDiv>
                    <FooterLogo src={Movetrak} />
                    <IndicatorText>{props.indicador}</IndicatorText>
                </FooterDiv>
            </Content>
        </Container>
    );
};

export default Relatorio;