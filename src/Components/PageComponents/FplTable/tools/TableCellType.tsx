export const TableCellType = (arg1: number, arg2: number, type?: "reverse") => {
    if (type === "reverse") {
        return arg1 > arg2 ? "bad" : "good"
    }
    return arg1 >= arg2 ? "good" : "bad" 

}

export const TransferCellType = (input: number) => {
    return input === 0 ? "neutral":
        input === 4 ? "hit" : "bad"
} 