import { TotalsLogic } from "../tools/TotalsLogic"
import AveragesLogic from "../tools/AveragesTool"

const TableRows = (props: any) => {

    const {
        type,
        rows,
        averages,
        total_averages
    } = props

    return (
        <>
            {rows}
            <tr>
                <td>-</td>
                <td>Average</td>
                <AveragesLogic data={averages} type={type} />
                {TotalsLogic(type, total_averages)}
            </tr>
        </>
    )
}

export default TableRows