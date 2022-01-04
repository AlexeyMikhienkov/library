import Book from "../../components/book/book";

function BookPage({book}) {


    return <Book book={book}/>
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:8080/book/list");
    const books = await res.json();

    const paths = books.map((book) => ({
        params: {id: book.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:8080/book/${params.id}`);
    const book = await res.json();

    return {
        props: {
            book
        }
    }
}

export default BookPage