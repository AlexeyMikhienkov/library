import {addUserButtonText, addUserHeader} from "../../constants/copyright";
import {useState} from "react";
import {userFormFields} from "../../constants/constants";

export default function CreateUser() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [birthday, setBirthday] = useState('');

    const {
        lastName: lastNameField,
        firstName: firstNameField,
        thirdName: thirdNameField,
        birthday: birthdayField
    } = userFormFields;

    function handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        //TODO: обработать клик на добавление пользака
    }

    //TODO: переделать форму без userFormFields
    return (
        <div className={"add-user"}>
            <h3 className={"add-user__header"}>{addUserHeader}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor={lastNameField.title}>{lastNameField.text}</label><br/>
                <input type={"text"} id={lastNameField.title} value={lastName}
                       onChange={event => {
                           setLastName(event.target.value)
                       }}/><br/>

                <label htmlFor={firstNameField.title}>{firstNameField.text}</label><br/>
                <input type={"text"} id={firstNameField.title} value={firstName}
                       onChange={event => {
                           setFirstName(event.target.value)
                       }}/><br/>

                <label htmlFor={thirdNameField.title}>{thirdNameField.text}</label><br/>
                <input type={"text"} id={thirdNameField.title} value={thirdName}
                       onChange={event => {
                           setThirdName(event.target.value)
                       }}/><br/>

                <label htmlFor={birthdayField.title}>{birthdayField.text}</label><br/>
                <input type={"text"} id={birthdayField.title} value={birthday}
                       onChange={event => {
                           setBirthday(event.target.value)
                       }}/><br/>

                <button type={"submit"}>{addUserButtonText}</button>
            </form>
        </div>
    )
}