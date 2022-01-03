import Reader from "../../components/reader/reader";
import {readers} from "../../constants/constants";

function ReaderPage({user}) {
    return <Reader reader={user} />
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:8080/user/list");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: {id: user.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:8080/user/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}

export default ReaderPage