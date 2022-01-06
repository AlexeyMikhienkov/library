import {addUserButtonText, addUserHeader, typeData} from "../../constants/copyright";
import {useState} from "react";
import {userFormFields} from "../../constants/constants";
import Header from "../header/header";

export default function CreateUser({onCreateUser, className}) {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [birthday, setBirthday] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onCreateUser(lastName, firstName, thirdName, birthday);
    }

    function titleToStateConverter(propTitle) {
        switch (propTitle) {
            case "lastName":
                return lastName;
            case "firstName":
                return firstName;
            case "thirdName":
                return thirdName;
            case "birthday":
                return birthday;
            default:
                return;
        }
    }

    function titleToSetterConverter(propTitle) {
        switch (propTitle) {
            case "lastName":
                return setLastName;
            case "firstName":
                return setFirstName;
            case "thirdName":
                return setThirdName;
            case "birthday":
                return setBirthday;
            default:
                return;
        }
    }

    return (
        <>
            <Header headerTitle={addUserHeader}/>
            <div className={`${className} create-user`}>
                <h3 className={"create-user__text"}>{typeData}</h3>
                <form className={"create-user__form form"} onSubmit={handleSubmit}>
                    {userFormFields.map(fieldObj => {
                        const {title, text} = fieldObj;

                        return (
                            <div key={title}>
                                <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                                <input className={"form__input"} type={"text"} id={title}
                                       value={titleToStateConverter(title)}
                                       onChange={event => {
                                           const func = titleToSetterConverter(title);
                                           if (typeof func === "function")
                                               func(event.target.value);
                                       }}/><br/>
                            </div>
                        )
                    })}

                    <button className={"form__button"} type={"submit"}>{addUserButtonText}</button>
                </form>
            </div>
        </>
    )
}