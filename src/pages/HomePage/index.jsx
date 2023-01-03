import { BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { StyledHomePage } from "./style"

const HomePage = () => {
    return(
        <StyledHomePage>
            <h1 className="name">Olá, Matheus</h1>
            <span>Bem vindo ao poral do locatário</span>

            <Container title={'Imobiliária Matheus'}>
                <div className="contacCompany">
                    <a href="https://api.whatsapp.com/send/?phone=5521999999999">
                        <FaWhatsapp />
                        <span>21 99999-9999</span>
                    </a>
                    <a href="tel:9999999999">
                        <BiPhone />
                        <span>21 99999-9999</span>
                    </a>
                </div>
            </Container>

            <Container title={'Última fatura'}>
                <div className="lastTicket">
                    <div className="value">
                        <h3>R$ 99,99</h3>
                        <span>Aguardando pagamento</span>
                    </div>
                    <div className="dueDate">
                        <span>vencimento:</span>
                        <span>10/01/2023</span>
                    </div>
                    <Link to='/ticket'>{'Visualizar Fatura >'}</Link>
                </div>
            </Container>

            <Container title={'Home'}>
                <p>uybuybuybuybniunb</p>
                <p>uybuybuybuybniunb</p>
                <p>uybuybuybuybniunb</p>
                <p>uybuybuybuybniunb</p>
            </Container>
        </StyledHomePage>
    )
}

export default HomePage;