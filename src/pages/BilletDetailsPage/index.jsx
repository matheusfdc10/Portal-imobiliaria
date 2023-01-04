import Container from "../../components/Container";
import { StyledBilletDetailsPage } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Table from "../../components/Table";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { formatDate, formatDateNumber } from "../../utils/formatDate";

const BilletDetailsPage = () => {
  const date = new Date();
  const today = formatDateNumber(date);
  const { lastTicket } = useContext(AuthContext);
  const [descriptions, setDescriptions] = useState(lastTicket.descricao_boleto);

  useEffect(() => {
    if (lastTicket.data_pagamento > lastTicket.data_vencimento) {
      setDescriptions([
        ...lastTicket.descricao_boleto,
        {
          descricao_taxa: "Multa",
          ref_pagamento: `PG ${formatDateNumber(lastTicket.data_pagamento)}`,
          valor_taxa: lastTicket.multa,
        },
      ]);
    }
  }, []);

  return (
    <StyledBilletDetailsPage>
      <Container title={"Seu boleto de janeiro"}>
        <Table data={descriptions} />
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
            ? `Boleto pago em ${formatDateNumber(lastTicket.data_pagamento)}`
            : today > formatDateNumber(lastTicket.data_vencimento)
            ? "Em atraso"
            : "Aguardando pagamento"}
        </span>
        {!lastTicket.valor_pago && (
          <>
            <span className="dueDate">
              {`Vence em ${formatDate(lastTicket.data_vencimento)}`}
            </span>
            <span className="textBarcode">Pague com código de barras:</span>
            <span className="barcode">{lastTicket.linha_digitavel}</span>
            <CopyToClipboard text={lastTicket.linha_digitavel}>
              <button className="copy">Copiar</button>
            </CopyToClipboard>
          </>
        )}
      </Container>
    </StyledBilletDetailsPage>
  );
};

export default BilletDetailsPage;
