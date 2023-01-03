import { StyledTable } from "./style";

const Table = ({ data }) => {

    const soma = () => {
        var total = null
        data.map((item => {
            total += item.value
        }))
        return total
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
                                <td>R$ {item.value}</td>
                            </tr>
                        )
                    })

                }
            </tbody>
            <tfoot>
                <tr className="total">
                    <td>Total</td>
                    <td className="date"></td>
                    <td>R$ {soma()}</td>
                </tr>
            </tfoot>
        </StyledTable>
    )
}

export default Table;