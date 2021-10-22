const AveragesLogic = (props: { type: any; data: any }) => {

    const {
        type,
        data
    } = props 
    
    const AverageRows = data.map((average: number, index: number) => {

        const typeLogic = type === "team_value" ? 
            `${(average /10).toFixed(1)}M`
            :
            average.toFixed(1)
        
        return (
            <td>
                {typeLogic}
            </td>
        )
    })

    return <>{AverageRows}</>
}

export default AveragesLogic