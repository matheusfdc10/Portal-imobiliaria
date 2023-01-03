import Container from "../../components/Container";
import { StyledTicketPage } from "./style"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from "react-router-dom";
 
const TicketPage = () => {
    const barCode = '76324783652478324782364328gfdgdfgdfgfdgdfgdfgdf746234879'

    return(
        <StyledTicketPage>
            <Container title={'Última fatura - 01/2023'}>
                <span className="value">R$ 99,99</span>
                <span className="status">Aguardando pagamento</span>
                <span className="dueDate">Vence dia 10 de janeiro</span>
                <span className="textBarcode">Pague com código de barras:</span>
                <span className="barcode">{barCode}</span>
                <CopyToClipboard text={barCode}>
                    <button className="copy">Copiar</button>
                </CopyToClipboard>
                <Link>{'Detalhes da fatura >'}</Link>
            </Container>
        </StyledTicketPage>
    )
}

export default TicketPage;