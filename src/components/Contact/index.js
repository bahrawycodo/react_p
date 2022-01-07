import React from "react";
import './style';
import {Drop, Form, FormInput, Input, Span, Submit, Textarea, Title} from "./style";

const Contact = () => {
        return (
            <Drop>
                <div className="container">
                    <Title><Span>Drop </Span>Me A line</Title>
                    <Form>
                        <FormInput>
                            <Input type="text" placeholder="Your Name" width={49} float="left"/>
                                <Input type="email" placeholder="Your Email" width={49}  float="right"/>
                        </FormInput>
                        <Input type="text" placeholder="Your Subject" />
                            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                            <Submit type="submit" value="Send Message" />
                    </Form>
                </div>
            </Drop>
);


}

export default Contact;