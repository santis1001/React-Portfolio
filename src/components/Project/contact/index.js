import React, { useState, useEffect } from 'react';
import { validateEmail } from "./utils/helpers";
import { sendData } from "./utils/apiData";
import MyPage from "./itsme";

const Contact = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textcontent, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [doneMessage, setDoneMessage] = useState('');
    
    const ownerName = name;
    const isViewingFromYourAccount = ownerName === 'santis1001';
    //console.log(ownerName);

    const handleInputChange = (e) => {
        const { target } = e;

        const inputType = target.name;
        const inputValue = target.value;

        switch (inputType) {
            case 'name':
                setName(inputValue);
                break;
            case 'email':
                setEmail(inputValue);
                break;
            case 'textcontent':
                setText(inputValue);
                break;
                default:break;
        }
    };

    useEffect(() => {
        if (doneMessage) {
            const timer = setTimeout(() => {
                setDoneMessage('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [doneMessage]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name is invalid');
            return;
        }
        if (!textcontent) {
            setErrorMessage('Please fill the message input');
            return;
        }
        const new_entry = {
            name,
            email,
            textcontent
        }
        sendData(new_entry);

        setName('');
        setEmail('');
        setText('');
        setErrorMessage('');
        setDoneMessage('Form submitted successfully!');
    }

    return (
        <div>
            {isViewingFromYourAccount ? (
                < MyPage />
            ) : (
                <section class="Contact">
                    <div class="subtitle">
                        <h2>Contact</h2>
                    </div>
                    <div class='form'>
                        <form>
                            <div>
                                <h3>Name</h3>
                                <input
                                    value={name}
                                    name="name"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <h3>Email Address</h3>
                                <input
                                    value={email}
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <h3>Message</h3>
                                <textarea
                                    value={textcontent}
                                    class="textcontent"
                                    name="textcontent"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Content"
                                />
                            </div>
                            <button type="button" onClick={handleFormSubmit}>Submit</button>
                        </form>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        {doneMessage && (
                            <div>
                                <p className="done-text">{doneMessage}</p>
                            </div>
                        )}
                    </div>
                </section>)}
        </div>
    );
}

export default Contact;