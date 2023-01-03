import { formatCurrency } from "../../utils/formatCurrency";
import { StyledTable } from "./style";

const Table = ({ data }) => {

    const soma = () => {
        var total = null
        data.map((item => {
            total += item.valor_taxa
        }))
        return formatCurrency(total)
    }

    return(
        <StyledTable>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="date">Refente</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => {
                        return (
                            <tr key={item.descricao_taxa}>
                                <td>{item.descricao_taxa}</td>
                                <td className="date">{item.ref_pagamento}</td>
                                <td>{formatCurrency(item.valor_taxa)}</td>
                            </tr>
                        )
                    })

                }
            </tbody>
            <tfoot>
                <tr className="total">
                    <td>Total</td>
                    <td className="date"></td>
                    <td>{soma()}</td>
                </tr>
            </tfoot>
        </StyledTable>
    )
}

export default Table;