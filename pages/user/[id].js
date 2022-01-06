import User from "../../components/user/user";
import {get} from "../../utils/requests"

function UserPage({user}) {
    return <User user={user} />
}

export async function getStaticPaths() {
    const res = await get("/user/list");
    const users = res.data;

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

export default UserPage