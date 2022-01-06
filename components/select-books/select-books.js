import {noBooksFound, search, selectBooksHeader} from "../../constants/copyright";
import {filterBy, filterParams, genres} from "../../constants/constants";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from "../header/header";
import BooksTable from "../books-table/books-table";

export default function SelectBooks({genres: serverGenres, writers: serverWriters, onSearch, books, className}) {
    const {title, text} = filterBy;
    const router = useRouter();

    const [filterParam, setFilterParam] = useState(Object.keys(filterParams)[0]);
    const [currentWriter, setCurrentWriter] = useState(serverWriters[0]);
    const [currentGenre, setCurrentGenre] = useState(serverGenres[0]);
    const [currentServerParams, setCurrentServerParams] = useState(serverWriters);

    useEffect(() => {
        setCurrentServerParams(filterParam === "genre" ? serverGenres : serverWriters);
    }, [filterParam])

    function searchResults(event) {
        event.preventDefault();

        if (filterParam === "genre")
            onSearch(filterParam, currentGenre);
        else
            onSearch(filterParam, currentWriter)
    }

    return (
        <>
            <Header headerTitle={selectBooksHeader} />
            <div className={`${className} select-books`}>
                <form className={"select-books__form form"} onSubmit={searchResults}>
                    <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                    <select className={"form__select"} value={filterParam} onChange={event => {
                        setFilterParam(event.target.value)
                    }}>
                        {
                            Object.entries(filterParams).map(([title, type]) => {
                                return <option key={title} value={title}>{type}</option>
                            })
                        }
                    </select><br/>

                    {
                        <>
                            <select className={"form__select"} disabled={!filterParam.length}
                                    value={filterParam === "genre" ? currentGenre : currentWriter}
                                    onChange={event => {
                                        filterParam === "genre" ?
                                            setCurrentGenre(event.target.value) :
                                            setCurrentWriter(event.target.value)
                                    }}>
                                {
                                    currentServerParams.map(param => {
                                        return <option key={param}
                                                       value={param}>
                                            {filterParam === "genre" ? genres[param] : param}</option>
                                    })
                                }
                            </select><br/>
                        </>
                    }

                    <button className={"form__button"} type={"submit"}>{search}</button>
                </form>

                    {books.length ?
                        <BooksTable books={books} className={"select-books"}/> :
                        <p className={"select-books__no-books"}>{noBooksFound}</p>}
            </div>
        </>
    )
}