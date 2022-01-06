import TableHead from "./table-head";
import TableBody from "./table-body";

export default function BooksTable({books, className, bookAction, actionText}) {
    return (
        <div className={`${className}__table-container`}>
            <table className={`${className}__table table`}>
                <TableHead bookAction={bookAction} />
                <TableBody books={books} bookAction={bookAction} actionText={actionText} />
            </table>
        </div>
    )
}