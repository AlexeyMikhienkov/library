import {addUserButtonText, addUserHeader} from "../../constants/copyright";
import {useState} from "react";
import {userData} from "../../constants/constants";
import Header from "../header/header";

export default function CreateUser({onCreateQuery}) {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [birthday, setBirthday] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onCreateQuery(lastName, firstName, thirdName, birthday);
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
            <div className={"add-user"}>
                <form onSubmit={handleSubmit}>
                    {Object.entries(userData).map(([title, text]) => {
                        if (title === "books")
                            return null;

                        return (
                            <div key={title}>
                                <label htmlFor={title}>{text}</label><br/>
                                <input type={"text"} id={title} value={titleToStateConverter(title)}
                                       onChange={event => {
                                           titleToSetterConverter(title)(event.target.value)
                                       }}/><br/>
                            </div>
                        )
                    })}

                    <button type={"submit"}>{addUserButtonText}</button>
                </form>
            </div>
        </>
    )
}