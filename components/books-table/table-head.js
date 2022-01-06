import {booksTableHeader} from "../../constants/copyright";

export default function TableHead({bookAction}) {
    return (
        <thead>
        <tr className={"table__row"}>
            {
                booksTableHeader.map(header => {
                    return <th key={header} className={"table__header"}>{header}</th>
                })
            }
            {
                bookAction ? <th/> : null
            }
        </tr>
        </thead>
    )
}