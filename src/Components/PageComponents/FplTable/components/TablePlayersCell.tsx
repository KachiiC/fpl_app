interface TablePlayersCellProps {
    type: string;
    value: number;
    rating: string;
}

export const TablePlayersCell = (props: TablePlayersCellProps) => {

    const {
        type,
        rating,
        value
    } = props
    
    const valueLogic = type === "team_value" ? 
        `${(value /10).toFixed(1)}M` 
        : 
        value

    return (
        <td className={`${rating}-week`}>
            {valueLogic}
        </td>
    )
}

export default TablePlayersCell