import Container from "../../components/Container";
import { StyledBilletPage } from "./style"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from "react-router-dom";
 
const BilletPage = () => {
    const barCode = '03399.00904 58000.000107 16479.001014 9 92260000038457'

    return(
        <StyledBilletPage>
            <Container title={'Último boleto - 01/2023'}>
                <span className="value">R$ 1298,75</span>
                <span className="status">Aguardando pagamento</span>
                <span className="dueDate">Vence dia 10 de janeiro</span>
                <span className="textBarcode">Pague com código de barras:</span>
                <span className="barcode">{barCode}</span>
                <CopyToClipboard text={barCode}>
                    <button className="copy">Copiar</button>
                </CopyToClipboard>
                <Link to='details'>{'Detalhes do boleto >'}</Link>
            </Container>
        </StyledBilletPage>
    )
}

export default BilletPage;