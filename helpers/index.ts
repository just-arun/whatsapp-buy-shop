export const InRs = (va: any) => Number(va).toLocaleString("en-IN", {
    style: "currency",
    currency: 'INR'
}).replace('.00', '')



export const CsvToJson = (arg: string) => {
    let allData = String(arg).split("\r\n")
    let header = allData[0].split('\t')
    let body = allData.splice(1,).map((e) => {
        let arr = e.split('\t')
        let obj: any = {};
        header.forEach((e, i) => {
            obj[e] = arr[i]
        });
        return obj
    })
    return { header, body }
}