import CreateUser from "../../components/create-user/create-user";
import {post} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";
import {useState} from "react";

export default function createUserPage() {
    const [errors, setErrors] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    //TODO: отобразить сообщение не в консоли
    function createUser(lastName, firstName, thirdName, birthday) {
        const data = {
            lastName,
            firstName,
            thirdName,
            birthday,
        }

        post('/user/create', data)
            .then(res => {
                setErrors({});
                setButtonClicked(true);
            })
            .catch(({response}) => {
                if (response.status === 400) {
                    const {errors: responseErrors} = response.data;

                    const errors = [];

                    responseErrors.map(error => {
                        errors.push({
                            field: error.field,
                            message: error.defaultMessage
                        })
                    })

                    setErrors(errors);
                    setButtonClicked(true);
                } else if (response.status === 500) {
                    setErrors({
                        field: "default",
                        message: response.message
                    });

                    setButtonClicked(true);
                } else console.log("ИНАЯ ОШИБКА")
            })
    }

    return (
        <Wrapper>
            <CreateUser onCreateUser={createUser} errors={errors} clicked={buttonClicked} className={"wrapper__create-user"}/>
        </Wrapper>
    )
}