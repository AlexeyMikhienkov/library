import {revertBooksTableHeader} from "../../constants/copyright";

export default function RevertBooksTableHead({}) {
    return (
        <thead>
        <tr className={"table__row"}>
            {
                revertBooksTableHeader.map(header => {
                    return <th key={header} className={"table__header"}>{header}</th>
                })
            }
            <th />
        </tr>
        </thead>
    )
}