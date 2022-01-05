import styles from '../styles/Home.module.css'
import Link from "next/link"
import {booksTitle, mainPageTitle, usersTitle} from "../constants/copyright";
import Header from "../components/header/header";
import Wrapper from "../components/wrapper/wrapper";

export default function Home() {
    return (
        <Wrapper>
            <Header headerTitle={mainPageTitle}/>
            <Link href={'/users'}><a>{usersTitle}</a></Link><br/>
            <Link href={'/books'}><a>{booksTitle}</a></Link>
        </Wrapper>
    )
}
