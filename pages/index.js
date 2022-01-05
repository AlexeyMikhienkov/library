import styles from '../styles/Home.module.css'
import Link from "next/link"
import {booksTitle, usersTitle} from "../constants/copyright";

export default function Home() {
  return (
      <div className={"wrapper"}>
        <Link href={'/users'}><a>{usersTitle}</a></Link><br />
        <Link href={'/books'}><a>{booksTitle}</a></Link>
      </div>
  )
}
