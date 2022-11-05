import { Container } from "@mui/material"
import React from "react"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

class ContactPage extends React.PureComponent {
    render () {
        return <React.Fragment>

            <Container fixed>
                <ContactForm />
            </Container>

            <Footer />

        </React.Fragment>
    }
}

export default ContactPage