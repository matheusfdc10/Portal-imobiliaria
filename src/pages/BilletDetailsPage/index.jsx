import Container from "../../components/Container";
import { StyledBilletDetailsPage } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Table from "../../components/Table";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { formatDate, formatDateNumber } from "../../utils/formatDate";
import { useParams } from "react-router-dom";

const todos_boletos = [
  {
    id: 3,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: null,
    data_vencimento: addDays(new Date(), -1),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Dezembro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1200.0,
    valor_pago: null,
    valor_taxa: null,
    linha_digitavel: "656759876785 567548975687 764764 67567476764",
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
    valor_boleto: 1200.0,
    valor_pago: 1200.0,
    valor_taxa: null,
    linha_digitavel: "656759876785 567548975687 764764 67567476764",
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
    data_vencimento: addDays(new Date(), -1),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Outubro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1200.0,
    valor_pago: 1300.0,
    valor_taxa: null,
    linha_digitavel: "656759876785 567548975687 764764 67567476764",
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

function addDays(date, days) {
  if(!date) return date
  date.setDate(date.getDate() + days);
  return date;
}


const BilletDetailsPage = () => {
  const { id } = useParams()
  const date = new Date();
  const today = formatDateNumber(date);
  const { lastTicket } = useContext(AuthContext);
  const [descriptions, setDescriptions] = useState(lastTicket.descricao_boleto);

  

  const todos_Boletos = [...todos_boletos, lastTicket]

  const [ boleto ] = todos_Boletos.filter(boleto => {
    return boleto.id == id
  })


  useEffect(() => {
    if ((boleto.data_pagamento > boleto.data_vencimento) || today > formatDateNumber(boleto.data_vencimento)) {
      setDescriptions([
        ...boleto.descricao_boleto,
        {
          descricao_taxa: "Multa",
          ref_pagamento: `Venceu em ${formatDateNumber(boleto.data_vencimento)}`,
          valor_taxa: boleto.multa,
        },
      ]);
    }
  }, []);

  return (
    <StyledBilletDetailsPage>
      <Container title={`Seu boleto de ${boleto.mes_ref}`}>
        <Table data={descriptions} />
        <span
          className={`status ${
            boleto.valor_pago
              ? "paid"
              : today > formatDateNumber(boleto.data_vencimento)
              ? "delay"
              : null
          }`}
        >
          {boleto.valor_pago
            ? `Boleto pago em ${formatDateNumber(boleto.data_pagamento)}`
            : today > formatDateNumber(boleto.data_vencimento)
            ? "Em atraso"
            : "Aguardando pagamento"}
        </span>
        {!boleto.valor_pago && (
          <>
            <span className="dueDate">
              {`${today > formatDateNumber(boleto.data_vencimento)? 'Venceu' : 'Vencen'} em ${formatDate(boleto.data_vencimento)}`}
            </span>
            <span className="textBarcode">Pague com código de barras:</span>
            <span className="barcode">{boleto.linha_digitavel}</span>
            <CopyToClipboard text={boleto.linha_digitavel}>
              <button className="copy">Copiar</button>
            </CopyToClipboard>
          </>
        )}
      </Container>
    </StyledBilletDetailsPage>
  );
};

export default BilletDetailsPage;
