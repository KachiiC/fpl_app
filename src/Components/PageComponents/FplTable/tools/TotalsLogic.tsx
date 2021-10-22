export const TotalsLogic = (type: any, input: any) => {
    if (type !== "points_total" && type !== "team_value") {
        return <td>{input}</td>
    }
}