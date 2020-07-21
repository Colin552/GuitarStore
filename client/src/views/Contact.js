import React from 'react';
import styled from 'styled-components';


const Contact = () => {

    return (
        <React.Fragment>
            <Title>Contact Us</Title>
            <br/>
            <p>Send us an email and we'll get right back to you!</p>
            <Form>
                <label>
                    From:   <Input
                        placeholder='Email'
                    >
                    </Input>

                </label>
                <br />
                <TextArea></TextArea>
                <Submit>Submit</Submit>
            </Form>
        </React.Fragment>
    )
}

export default Contact;

const Submit = styled.button`
    width: 150px;
    margin-top: 20px;
    border-radius: 3px;
    color: white;
    background: #568CE8;
    border: 1px;
    padding: 5px;
    margin-right: 0;
    margin-left: 1;
`

const TextArea = styled.textarea`
    background-color: #f8f8f8;
    padding: 5px;
    border-radius: 3px;
    margin-top: 20px;
    width: 100%;
    min-height: 300px;
    resize: none;
`


const Form = styled.form`

`

const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    margin-top: 20px;
    width: 200px;
`
const Title = styled.h3`
    margin-top: 10px;
`