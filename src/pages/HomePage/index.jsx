import { useContext, useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { AuthContext } from "../../contexts/auth";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateNumber } from "../../utils/formatDate";
import { StyledHomePage } from "./style";

const HomePage = () => {
  const date = new Date();
  const today = formatDateNumber(date);
  const { user } = useContext(AuthContext);
  const { lastTicket } = useContext(AuthContext);
  const [valorBoleto, setValorBoleto] = useState(lastTicket.valor_boleto);

  useEffect(() => {
    // adiciona a multa no valor do boleto caso não tenha pago ate o ecncimento
    if (
      today > formatDateNumber(lastTicket?.data_vencimento) &&
      !lastTicket.data_pagamento
    ) {
      setValorBoleto(lastTicket.valor_boleto + lastTicket.multa);
    }
  }, []);

  return (
    <StyledHomePage>
      <h1 className="name">Olá, {user.nome.split(" ")[0]}</h1>
      <span>Bem vindo ao portal do locatário</span>

      <Container title={"Imobiliária Matheus"}>
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

      <Container title={"Último boleto"}>
        <div className="lastTicket">
          <div className="value">
            <h3>
              {lastTicket.valor_pago
                ? formatCurrency(lastTicket.valor_pago)
                : formatCurrency(valorBoleto)}
            </h3>
            <span
              className={
                lastTicket.valor_pago
                  ? "paid"
                  : today > formatDateNumber(lastTicket.data_vencimento)
                  ? "delay"
                  : null
              }
            >
              {lastTicket.valor_pago
                ? "Boleto pago"
                : today > formatDateNumber(lastTicket.data_vencimento)
                ? "Em atraso"
                : "Aguardando pagamento"}
            </span>
          </div>
          <div className="dueDate">
            <span>
              {lastTicket.data_pagamento ? "Pago em:" : "Vencimento:"}
            </span>
            <span>
              {lastTicket.data_pagamento
                ? formatDateNumber(lastTicket.data_pagamento)
                : formatDateNumber(lastTicket.data_vencimento)}
            </span>
          </div>
          <Link to="/billet">{"Visualizar Boleto >"}</Link>
        </div>
      </Container>

      <Container title={"Home"}>
        <p>uybuybuybuybniunb</p>
        <p>uybuybuybuybniunb</p>
        <p>uybuybuybuybniunb</p>
        <p>uybuybuybuybniunb</p>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
