import Container from "../../components/Container";
import { StyledBilletDetailsPage } from "./style"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from "react-router-dom";
import Table from "../../components/Table";

const descrição = [
    {name: 'Aluguel', date: '01/2023', value: 1000.00},
    {name: 'Condomínio', date: '01/2023', value: 200.00},
    {name: 'IPTU', date: '5/10', value: 98.75},
    {name: 'Água', date: '5/10', value: 120.50},
    {name: 'Reembolso', date: 'conserto banheiro', value: -200},
]
 
const BilletDetailsPage = () => {
    const barCode = '03399.00904 58000.000107 16479.001014 9 92260000038457'

    return(
        <StyledBilletDetailsPage>
            <Container title={'Seu boleto de janeiro'}>
                <Table data={descrição}/>
                {/* <span className="value">R$ 99,99</span> */}
                {/* <span className="status">Aguardando pagamento</span> */}
                <span className="dueDate">Vence dia 10 de janeiro</span>
                <span className="textBarcode">Pague com código de barras:</span>
                <span className="barcode">{barCode}</span>
                <CopyToClipboard text={barCode}>
                    <button className="copy">Copiar</button>
                </CopyToClipboard>
                {/* <Link>{'Detalhes do boleto >'}</Link> */}
            </Container>
        </StyledBilletDetailsPage>
    )
}

export default BilletDetailsPage;