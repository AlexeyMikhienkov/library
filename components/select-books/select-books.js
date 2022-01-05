import {noBooksFound, search, selectBooksHeader} from "../../constants/copyright";
import {filterBy, filterParams, genres} from "../../constants/constants";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from "../header/header";
import Wrapper from "../wrapper/wrapper";

export default function SelectBooks({genres: serverGenres, writers: serverWriters, onSearch, books}) {
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
        <Wrapper>
            <Header headerTitle={selectBooksHeader} />
            <div className={"select-books"}>
                <form onSubmit={searchResults}>
                    <label htmlFor={title}>{text}</label><br/>
                    <select value={filterParam} onChange={event => {
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
                            <select disabled={!filterParam.length}
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

                    <button type={"submit"}>{search}</button>
                </form>

                <div className={"select-books__result"}>
                    {books.length ?
                        books.map(book => {
                            return (
                                <div key={book.id}>
                                    <p>{book.title}</p>
                                </div>
                            )
                        }) :
                        <p>{noBooksFound}</p>}
                </div>
            </div>
        </Wrapper>
    )
}