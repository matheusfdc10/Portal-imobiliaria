import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuario = {
  id: 1,
  nome: "João silva",
  cpf: "12345678987",
  endereco: "Rua São João",
  bairro: "Vista Alegre",
  cep: 12120770,
  cidade: "Rio de Janeiro",
  Complemento: "Ap 101",
  login: "joao123",
  senha: "123",
  numero: "21999999999",
  telefone: "2199999999",
  tipo_acesso: "LOC",
};

function addDays(date, days) {
  if(!date) return date
  date.setDate(date.getDate() + days);
  return date;
}

const ultimo_boleto = {
  id: 5,
  banco_nosso_numero: 12324,
  cod_remessa: 423532,
  cod_taxa: 10,
  data_emissao: addDays(new Date(), 1),
  data_remessa: addDays(new Date(), 2),
  data_pagamento: null,
  data_vencimento: addDays(new Date(), 0),
  desc_aaxa: "10",
  Juros: 10.5,
  mes_ref: "Janeiro",
  multa: 120.5,
  observacao_pagamento: "Não aceitar boleto após 30 dias",
  tipo: " ",
  valor_boleto: 1491.00,
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
};

const todos_boletos = [
  {
    id: 3,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: new Date(),
    data_vencimento: new Date(),
    desc_aaxa: "10",
    Juros: 10.5,
    mes_ref: "Janeiro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1200.0,
    valor_pago: 1200.0,
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
    mes_ref: "Janeiro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1200.0,
    valor_pago: 1200.0,
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
    mes_ref: "Janeiro",
    multa: 120.5,
    observacao_pagamento: "Não aceitar boleto após 30 dias",
    tipo: " ",
    valor_boleto: 1200.0,
    valor_pago: 1200.0,
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
]

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [lastTicket, setLastTicket] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const login = async (email, password) => {
    try {
      // const response = await getUser(email, password)
      // loadUser(response.data);
      if (email === usuario.login && password === usuario.senha) {
        loadUser();
      } else {
        alert("email ou senha invalido!");
      }
    } catch (err) {
      logout();
      console.log(err);
    }
  };

  const loadUser = async () => {
    try {
      setUser(usuario);
      setLastTicket(ultimo_boleto);
      navigate("/home");
    } catch (err) {
      logout();
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        user,
        lastTicket,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
