import {bookData, bookHeader} from "../../constants/copyright";
import {genres} from "../../constants/constants";

export default function Book({book}) {
    const {writer, title, id, genre, ageLimit, count} = book;

    return (
        <div className={"book"}>
            <h3 className={"book__header"}>{bookHeader}</h3>
            <div className={"book__info"}>
                <p className={"book__writer"}>
                    {`${bookData.writer} ${writer}`}
                </p>
                <p className={"book__title"}>
                    {`${bookData.title} ${title}`}
                </p>
                <p className={"book__id"}>
                    {`${bookData.id} ${id}`}
                </p>
                <p className={"book__genre"}>
                    {`${bookData.genre} ${genres[genre]}`}
                </p>
                <p className={"book__age-limit"}>
                    {`${bookData.ageLimit} ${ageLimit}`}
                </p>
                <p className={"book__count"}>
                    {`${bookData.count} ${count}`}
                </p>
            </div>
        </div>
    )
}