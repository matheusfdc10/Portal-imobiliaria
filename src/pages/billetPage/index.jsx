import Container from "../../components/Container";
import { StyledBilletPage } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { formatDate, formatDateNumber } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

const BilletPage = () => {
  const date = new Date();
  const today = formatDateNumber(date);
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
    <StyledBilletPage>
      <Container
        title={`Último boleto - ${
          formatDateNumber(lastTicket.data_vencimento).split("/")[1]
        }/${formatDateNumber(lastTicket.data_vencimento).split("/")[2]}`}
      >
        <span className="value">
          {lastTicket.valor_pago
            ? formatCurrency(lastTicket.valor_pago)
            : formatCurrency(valorBoleto)}
        </span>
        <span
          className={`status ${
            lastTicket.valor_pago
              ? "paid"
              : today > formatDateNumber(lastTicket.data_vencimento)
              ? "delay"
              : null
          }`}
        >
          {lastTicket.valor_pago
            ? "Boleto pago"
            : today > formatDateNumber(lastTicket.data_vencimento)
            ? "Em atraso"
            : "Aguardando pagamento"}
        </span>
        {!lastTicket.valor_pago && (
          <>
            <span className="dueDate">{`Vence em ${formatDate(
              lastTicket.data_vencimento
            )}`}</span>
            <span className="textBarcode">Pague com código de barras:</span>
            <span className="barcode">{lastTicket.linha_digitavel}</span>
            <CopyToClipboard text={lastTicket.linha_digitavel}>
              <button className="copy">Copiar</button>
            </CopyToClipboard>
          </>
        )}
        <Link to="details">{"Detalhes do boleto >"}</Link>
      </Container>
    </StyledBilletPage>
  );
};

export default BilletPage;
