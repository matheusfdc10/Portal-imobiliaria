import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { formatCurrency } from './formatCurrency'

const descricao_boleto = [
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
]

const instrucoes = [
    'Não receber com mais de 29 dias de atraso',
    'Não concecer desconto na boleta',
    'Após vencimento multa de 10% e juros de mora de 1,20% ao dia.'
]

export const bankSlipPdf = (billingData) => {
    // console.log(billingData)
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const instructions = (instructions) => {
        return instructions.map(instruction => {
            return `\n${instruction}`
        })
    }

    // const description = {
    //     colSpan: 6,
    //     rowSpan: 3,
    //     style: 'textBody',
    //     table: {
    //         headerRows: 1,
    //         widths: [150, 'auto', 'auto'],
    //         margin: [20, 20],
    //         body: [
    //             ['Descrição', 'Referente', 'Valor'],
    //             ...descricao_boleto.map(descricao => {
    //                 return [descricao.descricao_taxa, descricao.ref_pagamento, formatCurrency(descricao.valor_taxa)]
    //             })
    //         ]
    //     },
    //     layout: 'headerLineOnly'
    // }

    const description2 = {
        colSpan: 7,
        // rowSpan: 3,
        style: 'textBody',
        border: [true, false, true, false],
        columns: [
            {
                margin: [5, 10, 0, 10],
                width: 'auto',
                text: [{ text: 'Descrição', bold: true,}, ...descricao_boleto.map((descricao) => {
                    return `\n${descricao.descricao_taxa}`
                })],
            },
            {
                margin: [15, 10, 0, 10],
                width: 'auto',
                text: [{ text: 'Referente', bold: true,}, ...descricao_boleto.map((descricao) => {
                    return `\n${descricao.ref_pagamento}`
                })],
            },
            {   
                margin: [15, 10, 0, 10],
                width: 'auto',
                text: [{ text: 'Valor', bold: true,}, ...descricao_boleto.map((descricao) => {
                    return `\n${formatCurrency(descricao.valor_taxa)}`
                })],
            }
        ],
    }

    const content = [
        {
            table: {
                headerRows: 1,
                widths: [100, '*', '*', '*', '*', 100, 140],
                body: [
                    [{ text: 'Imobiliaria teste', style: 'tableHeader', colSpan: 7, alignment: 'center' }, {}, {}, {}, {}, {}, {}],
                    [{ text: 'Alguel do imóvel', colSpan: 7, border: [true, false, true, false]}, {}, {}, {}, {}, {}, {}],
                    [description2, {}, {}, {}, {}, {}, {}],
                    [{ text: [{text: 'local de\n', style: 'headerBody'}, 'PAGAVEL EM QUARLER AGENCIA BANCARIA, APOS VENCIMENTO SOMENTE NAS AGENCIAS DO ITAU'], style: 'textBody', colSpan: 6}, {}, {}, {}, {}, {}, { text: ['Vencimento\n' ,{text: '01/01/2023', style: 'valueBody'}], style: 'headerBody'}],
                    [{ text: [{text: 'Beneficiário\n', style:'headerBody'}, 'JOÃO JOSÉ', {text: '\nEndereço\n', style:'headerBody'}, 'RUA SÃO JOÃO'], style: 'textBody', colSpan: 5, rowSpan: 2}, {}, {}, {}, {}, {text: [{text: 'CNPJ / CPF\n', style: 'headerBody'}, '00.000.000/0000-00'], style: 'textBody', rowSpan: 2}, { text: ['Agência/Código do Beneficiário\n' ,{text: '0000', style: 'valueBody'}], style: 'headerBody'}],
                    [{}, {}, {}, {}, {}, {}, { text: ['Nosso Número\n' ,{text: '5647667', style: 'valueBody'}], style: 'headerBody'}],
                    [{ text: [{text: 'Data do Documento\n', style: 'headerBody'}, '01/01/2023'], style: 'textBody'}, { text: [{text :'Número do Documento\n', style: 'headerBody'}, '00000000',], style: 'textBody', colSpan: 2,}, {}, { text: [{text :'Espécie\n', style: 'headerBody'}, 'DM',], style: 'textBody'}, { text: [{text :'Aceite\n', style: 'headerBody'}, 'S',], style: 'textBody'}, { text: [{text :'Data do Processamento\n', style: 'headerBody'}, '01/01/2023',], style: 'textBody'}, { text: ['(=) Valor do Documento\n' ,{text: 'R$1.500,00', style: 'valueBody'}], style: 'headerBody'}],
                    [{ text: [{text: 'Uso do Banco\n', style: 'headerBody'}, ' '], style: 'textBody'}, { text: [{text: 'Carteira\n', style: 'headerBody'}, '109'], style: 'textBody'}, {text: [{text: 'Espécie doc\n', style: 'headerBody'}, 'R$'], style: 'textBody'}, { text: [{text: 'Quantida\n', style: 'headerBody'}, ' '], style: 'textBody', colSpan: 2}, {}, { text: [{text: 'Valor Moeda\n', style: 'headerBody'}, ' '], style: 'textBody'}, { text: ['(-) Desconto / Abatimentos\n' ,{text: ' ', style: 'valueBody'}], style: 'headerBody'}],
                    [{ text: [{text: 'Instruções', style: 'headerBody'}, `\nSenhor(a) caixa ${instructions(instrucoes)}` ], colSpan: 6, rowSpan: 4, style: 'textBody'}, {}, {}, {}, {}, {}, { text: ['(+) Mora / Multa\n' ,{text: ' ', style: 'valueBody'}], style: 'headerBody'}],
                    [{}, {}, {}, {}, {}, {}, { text: ['(+) Juros\n' ,{text: ' ', style: 'valueBody'}], style: 'headerBody'}],
                    [{}, {}, {}, {}, {}, {}, { text: ['(+) Outros Acréscimos\n' ,{text: ' ', style: 'valueBody'}], style: 'headerBody'}],
                    [{}, {}, {}, {}, {}, {}, { text: ['(=) Valor Cobrado\n' ,{text: ' ', style: 'valueBody'}], style: 'headerBody'}],
                    [{text: [{text :'Pagador\n', style: 'headerBody'}, 'JOÃO SILVA - CNJP / CPF (000.000.000-00)\nESTRADA DA AGUA GARNDE, 500 B1 101\nIRAJA - RIO DE JANEIRO - RJ\nCEP: 21212121',], style: 'textBody', colSpan: 6}, {}, {}, {}, {}, {}, {}],
                ]
            }
        },
        '\nCod.\n001 9 05009 401448 1606 0680935031 337370000000100'
    ];

    const footer = (currentPage, pageCounf) => {
        return [
            {
                text: `${currentPage} / ${pageCounf}`,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    };

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 40, 15, 40],
        content,
        footer,
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 16,
                color: 'black',
                margin: [0, 20]
            },
            headerBody: {
                fontSize: 7,
            },
            textBody:{
                fontSize: 8,
            },
            valueBody: {
                fontSize: 8,
                alignment: 'right',
            }
        },
        defaultStyle: {
            alignment: 'justify'
        }
    }

    pdfMake.createPdf(docDefinitions).open();
}





//padding: [0, 0, 0, 0], table: {body: [['tetse'],['teste'],['teste']]}