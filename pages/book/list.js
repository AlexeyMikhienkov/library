const List = ({books}) => {
    return (
        <ul>
            {books.map(book => {
                return <li>{book.title}</li>
            })}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:8080/book/list");
    const books = await res.json();

    return {
        props: {
            books
        }
    }
}

export default List