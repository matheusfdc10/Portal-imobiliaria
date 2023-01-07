import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'


export const bankSlipPdf = (billingData) => {
    console.log(billingData)
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const content = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*', 150],
                // keepWithHeaderRows: 1,
                body: [
                    [{ text: 'Imobiliaria teste', style: 'tableHeader', colSpan: 7, alignment: 'center' }],
                    [{ text: 'local do\nPAGAVEL EM QUARLER AGENCIA BANCARIA, APOS VENCIMENTO SOMENTE NAS AGENCIAS DO ITAU', fontSize: 8, colSpan: 6}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}, {text: 'Valor\nR$ 1.500,00', fontSize: 8}]
                ]
            }
        }
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
        pageMargins: [15, 50, 15, 40],
        content,
        footer,
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 16,
                color: 'black',
                margin: [0, 20]
            }
        },
        defaultStyle: {
            // alignment: 'justify'
        }
    }

    pdfMake.createPdf(docDefinitions).open();
}