import Container from "../../components/Container";
import { StyledBilletPage } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { formatDate, formatDateNumber } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";
import { GoCheck, GoX } from "react-icons/go";

const todos_boletos = [
  {
    id: 3,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: null,
    data_vencimento: new Date(),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Dezembro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1491.00,
    valor_pago: null,
    valor_taxa: null,
    linha_digitável: "656759876785 567548975687 764764 67567476764",
    descricao_boleto: [
      {
        descricao_taxa: "Aluguel",
        ref_pagamento: "01/2023",
        valor_taxa: 1200,
      },
      {
        descricao_taxa: "Condomínio",
        ref_pagamento: "01/2023",
        valor_taxa: 230.5,
      },
      {
        descricao_taxa: "IPTU",
        ref_pagamento: "01/10",
        valor_taxa: 120.5,
      },
      {
        descricao_taxa: "Reembolso",
        ref_pagamento: "conserto da pia",
        valor_taxa: -60,
      },
    ],
  },
  {
    id: 2,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: new Date(),
    data_vencimento: new Date(),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Novembro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1491.00,
    valor_pago: 1491.00,
    valor_taxa: null,
    linha_digitável: "656759876785 567548975687 764764 67567476764",
    descricao_boleto: [
      {
        descricao_taxa: "Aluguel",
        ref_pagamento: "01/2023",
        valor_taxa: 1200,
      },
      {
        descricao_taxa: "Condomínio",
        ref_pagamento: "01/2023",
        valor_taxa: 230.5,
      },
      {
        descricao_taxa: "IPTU",
        ref_pagamento: "01/10",
        valor_taxa: 120.5,
      },
      {
        descricao_taxa: "Reembolso",
        ref_pagamento: "conserto da pia",
        valor_taxa: -60,
      },
    ],
  },
  {
    id: 1,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: new Date(),
    data_vencimento: new Date(),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Outubro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1491.00,
    valor_pago: 1611.50,
    valor_taxa: null,
    linha_digitável: "656759876785 567548975687 764764 67567476764",
    descricao_boleto: [
      {
        descricao_taxa: "Aluguel",
        ref_pagamento: "01/2023",
        valor_taxa: 1200,
      },
      {
        descricao_taxa: "Condomínio",
        ref_pagamento: "01/2023",
        valor_taxa: 230.5,
      },
      {
        descricao_taxa: "IPTU",
        ref_pagamento: "01/10",
        valor_taxa: 120.5,
      },
      {
        descricao_taxa: "Reembolso",
        ref_pagamento: "conserto da pia",
        valor_taxa: -60,
      },
    ],
  },
];

const BilletPage = () => {
  const navigate = useNavigate()
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
        className="ultimoBoleto"
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
        <Link className="details" to={`details/${lastTicket.id}`}>
          {"Detalhes do boleto >"}
        </Link>
      </Container>

      <Container className="historic" title="Histórico de boletos">
        {todos_boletos.map((boleto) => {
          return (
            <div onClick={() => navigate(`details/${boleto.id}`)} key={boleto.id}>
              <div>
                {boleto.data_pagamento ? <GoCheck color="green"/> : <GoX color="red" />}
                <span>{boleto.mes_ref}</span>
              </div>
              <span>{boleto.data_pagamento ? `${formatCurrency(boleto.valor_pago)} >` : `${formatCurrency(boleto.valor_boleto + boleto.multa)} >`}</span>
            </div>
          );
        })}
      </Container>
    </StyledBilletPage>
  );
};

export default BilletPage;
