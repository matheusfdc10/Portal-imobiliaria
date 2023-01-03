import { StyledTable } from "./style";

const Table = ({ data }) => {

    const cashFormt = (number) => {
        return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number)
    }

    const soma = () => {
        var total = null
        data.map((item => {
            total += item.value
        }))
        return cashFormt(total)
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
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td className="date">{item.date}</td>
                                <td>{cashFormt(item.value)}</td>
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