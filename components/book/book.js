import {bookHeader} from "../../constants/copyright";
import {bookData, genres} from "../../constants/constants";
import Wrapper from "../wrapper/wrapper";
import Header from "../header/header";

export default function Book({book}) {
    const {writer, title, id, genre, ageLimit, count} = book;

    return (
        <Wrapper>
            <Header headerTitle={bookHeader} />
            <div className={"book"}>
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
        </Wrapper>
    )
}