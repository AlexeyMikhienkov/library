import CreateBook from "../../components/create-book/create-book";
import post from "../../utils/requests";

export default function createBookPage() {
    //
    function onCreateQuery(writer, title, genre, ageLimit, count) {
        post('/book/create', {
            writer,
            title,
            genre,
            ageLimit,
            count
        }).then(res => console.log(res));
    }

    return (
        <CreateBook onCreateQuery={onCreateQuery}/>
    )
}