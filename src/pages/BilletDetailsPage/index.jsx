import Container from "../../components/Container";
import { StyledBilletDetailsPage } from "./style"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Table from "../../components/Table";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
 
const BilletDetailsPage = () => {
    const { lastTicket } = useContext(AuthContext);

    return(
        <StyledBilletDetailsPage>
            <Container title={'Seu boleto de janeiro'}>
                <Table data={lastTicket.descricao_boleto}/>
                <span className={`status ${lastTicket.valor_pago && 'paid'}`}>{lastTicket.valor_pago? 'Boleto pago' : 'Aguardando pagamento'}</span>
                {!lastTicket.valor_pago &&
                    <>
                        <span className="dueDate">Vence dia 10 de janeiro</span>
                        <span className="textBarcode">Pague com código de barras:</span>
                        <span className="barcode">{lastTicket.linha_digitavel}</span>
                        <CopyToClipboard text={lastTicket.linha_digitavel}>
                            <button className="copy">Copiar</button>
                        </CopyToClipboard>
                    </>
                }
            </Container>
        </StyledBilletDetailsPage>
    )
}

export default BilletDetailsPage;