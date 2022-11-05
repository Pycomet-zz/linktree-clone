import { Container } from "@mui/material"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SocialLinks from "../components/SocialLinks"

class IndexPage extends React.PureComponent {
    render () {
        return <React.Fragment>

            <Container fixed>
                <Header />
                <SocialLinks />
            </Container>

            <Footer />

        </React.Fragment>
    }
}

export default IndexPage