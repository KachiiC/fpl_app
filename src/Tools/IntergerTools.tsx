export const parseIntChecker = (num: any) =>{
    return !isNaN(num)
}

export const SiteReducer = (array: number[]) => array.reduce((a,b) => a + b)

export const IntSorter = (array: any[], by: string, type?: "ascending" | "descending") => {
    if (type === "descending"){
        return array.sort((a, b) => b[by] - a[by])
    }
    return array.sort((a, b) => a[by] - b[by])
}