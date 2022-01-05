import CreateUser from "../../components/create-user/create-user";
import {post} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";

export default function createUserPage() {
    //TODO: отобразить сообщение не в консоли
    //TODO: дату рождения вводить через react date picker
    function createQuery(lastName, firstName, thirdName, birthday) {
        const data = {
            lastName,
            firstName,
            thirdName,
            birthday,
        }

        post('/user/create', data)
            .then(res => console.log(res))
            .catch(({response}) => {
                console.log(response)
                if (response.status === 400) {
                    const {errors} = response.data;

                    if (errors.length) {
                        errors.map(error => console.log(error.defaultMessage))
                    }
                } else if (response.status === 500) {
                    console.log(response.message)
                }
            })
    }

    return (
        <Wrapper>
            <CreateUser onCreateQuery={createQuery}/>
        </Wrapper>
    )
}