import { Container, Paragraph, TextInput } from './styles';
export default function Calendar() {
    return (
        <Container>
            <Paragraph>Calendário:</Paragraph>
            <TextInput type="date" />
        </Container>
    );
}
