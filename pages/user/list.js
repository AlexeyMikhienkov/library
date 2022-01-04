const List = ({users}) => {
    //TODO: users только в первый раз, далее через get-запрос


    return (
        <ul>
            {users.map(user => {
                return <li>{`${user.lastName} ${user.firstName}`}</li>
            })}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:8080/user/list");
    const users = await res.json();

    return {
        props: {
            users
        }
    }
}

export default List