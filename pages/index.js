import styles from '../styles/Home.module.css'
import Link from "next/link"
import {booksTitle, mainPageTitle, usersTitle} from "../constants/copyright";
import Header from "../components/header/header";
import Wrapper from "../components/wrapper/wrapper";
import MainPage from "../components/main-page/main-page";

export default function Home() {
    return (
        <Wrapper>
            <Header headerTitle={mainPageTitle}/>
            <MainPage className={"wrapper__main-page"} />
        </Wrapper>
    )
}

//TODO:
// 1. Починить take-book, чтобы не было возможности выдать книгу, если их нет в наличии +++
// 2. Починить revert-book (таблица с взятыми книгами и сроками сдачи - красный фон == просрочено) +++
// 3. Сделать дизайн каждой страницы
// 4. Обработать ошибки с сервера и успешные запросы