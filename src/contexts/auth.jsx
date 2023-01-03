import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuario = {
  id: 1,
  nome: 'João silva',
  cpf: '12345678987',
  endereco: 'Rua São João',
  bairro: 'Vista Alegre',
  cep: 12120770,
  cidade: 'Rio de Janeiro',
  Complemento: 'Ap 101',
  login: 'joao123',
  senha: '123',
  numero: '21999999999',
  telefone: '2199999999',
  tipo_acesso: 'LOC',
  ultimo_boleto: {
    id: 5,
    banco_nosso_numero: 12324,
    cod_remessa: 423532,
    cod_taxa: 10,
    data_emissao: new Date(),
    data_remessa: new Date(),
    data_pagamento: new Date(),
    data_vencimento: new Date(),
    desc_aaxa: '10',
    Juros: 10.5,
    mes_ref: 'Janeiro',
    multa: 120.50,
    observacao_pagamento: 'Não aceitar boleto após 30 dias',
    tipo: ' ',
    valor_boleto: 1200.00,
    valor_pago: 1200.00,
    valor_taxa: null,
    linha_digitável: '656759876785 567548975687 764764 67567476764',
    descricao_boleto: [
      {
        descricao_taxa: 'Aluguel',
        ref_pagamento: '01/2023',
        valor_taxa: 1200
      },
      {
        descricao_taxa: 'Condomínio',
        ref_pagamento: '01/2023',
        valor_taxa: 230.50
      },
      {
        descricao_taxa: 'IPTU',
        ref_pagamento: '01/10',
        valor_taxa: 120.50
      },
      {
        descricao_taxa: 'Reembolso',
        ref_pagamento: 'conserto da pia',
        valor_taxa: -60
      }
    ]
  },
  todos_boletos: [
    {
      id: 3,
      banco_nosso_numero: 12324,
      cod_remessa: 423532,
      cod_taxa: 10,
      data_emissao: new Date(),
      data_remessa: new Date(),
      data_pagamento: new Date(),
      data_vencimento: new Date(),
      desc_aaxa: '10',
      Juros: 10.5,
      mes_ref: 'Janeiro',
      multa: 120.50,
      observacao_pagamento: 'Não aceitar boleto após 30 dias',
      tipo: ' ',
      valor_boleto: 1200.00,
      valor_pago: 1200.00,
      valor_taxa: null,
      linha_digitável: '656759876785 567548975687 764764 67567476764',
      descricao_boleto: [
        {
          descricao_taxa: 'Aluguel',
          ref_pagamento: '01/2023',
          valor_taxa: 1200
        },
        {
          descricao_taxa: 'Condomínio',
          ref_pagamento: '01/2023',
          valor_taxa: 230.50
        },
        {
          descricao_taxa: 'IPTU',
          ref_pagamento: '01/10',
          valor_taxa: 120.50
        },
        {
          descricao_taxa: 'Reembolso',
          ref_pagamento: 'conserto da pia',
          valor_taxa: -60
        }
      ]
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
      desc_aaxa: '10',
      Juros: 10.5,
      mes_ref: 'Janeiro',
      multa: 120.50,
      observacao_pagamento: 'Não aceitar boleto após 30 dias',
      tipo: ' ',
      valor_boleto: 1200.00,
      valor_pago: 1200.00,
      valor_taxa: null,
      linha_digitável: '656759876785 567548975687 764764 67567476764',
      descricao_boleto: [
        {
          descricao_taxa: 'Aluguel',
          ref_pagamento: '01/2023',
          valor_taxa: 1200
        },
        {
          descricao_taxa: 'Condomínio',
          ref_pagamento: '01/2023',
          valor_taxa: 230.50
        },
        {
          descricao_taxa: 'IPTU',
          ref_pagamento: '01/10',
          valor_taxa: 120.50
        },
        {
          descricao_taxa: 'Reembolso',
          ref_pagamento: 'conserto da pia',
          valor_taxa: -60
        }
      ]
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
      desc_aaxa: '10',
      Juros: 10.5,
      mes_ref: 'Janeiro',
      multa: 120.50,
      observacao_pagamento: 'Não aceitar boleto após 30 dias',
      tipo: ' ',
      valor_boleto: 1200.00,
      valor_pago: 1200.00,
      valor_taxa: null,
      linha_digitável: '656759876785 567548975687 764764 67567476764',
      descricao_boleto: [
        {
          descricao_taxa: 'Aluguel',
          ref_pagamento: '01/2023',
          valor_taxa: 1200
        },
        {
          descricao_taxa: 'Condomínio',
          ref_pagamento: '01/2023',
          valor_taxa: 230.50
        },
        {
          descricao_taxa: 'IPTU',
          ref_pagamento: '01/10',
          valor_taxa: 120.50
        },
        {
          descricao_taxa: 'Reembolso',
          ref_pagamento: 'conserto da pia',
          valor_taxa: -60
        }
      ]
    }
  ]
}

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const login = async (email, password) => {
    try{
      if (email === usuario.login && password === usuario.senha){
        loadUser()
      } else {
        alert('email ou senha invalido!')
      }
    } catch(err){
      logout()
      console.log(err)
    }
  }

  const loadUser = async () => {
    try {
      setUser(usuario)
      navigate('/home')
    } catch(err){
      logout()
      console.log(err)
    }
  }

  const logout = async () => {
    try {
      setUser(null)
      navigate('/login')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}