export default function TableBody({books, bookAction, actionText}) {
    return (
        <tbody>
        {
            books.map((book, index) => {
                return (
                    <tr key={index} className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                        <>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{book.writer}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{book.title}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{book.count}</p>
                            </td>
                            {
                                bookAction ?
                                    <td className={"table__cell"}>
                                        <button className={"table__delete-button"}
                                                onClick={() => bookAction(book.id)}>{actionText}</button>
                                    </td> :
                                    null
                            }
                        </>
                    </tr>
                )
            })
        }
        </tbody>
    )
}