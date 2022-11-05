import React from "react"
import { Stack, useMediaQuery, Typography } from "@mui/material"
import styled from "@emotion/styled"

import ZuriLogo from "../assets/zuri.svg"
import CongressLogo from "../assets/I4G.svg"


const Wrapper = styled.div`
    position: relative;
    display: block;
    margin: 6em 12em 2em 12em;
    bottom: 0;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        align-items: left;
        justify-content: left;
        margin: 2em
    }

`


const Logo = styled.img`
    @media only screen and (max-width: 600px) {
        margin-right: auto !important;
        height: 30px
    }
`


const Footer = () => {
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <Wrapper>
            <hr style={{ opacity: 0.2 }} />
            <br />
            <Stack
                direction={isMobile ? 'column' : 'row'}
                spacing={isMobile ? 2 : '22vw'}
            >
                <Logo
                    alt="Zuri Logo"
                    src={ZuriLogo}
                />
                <Typography variant="h5">HNG Internship 9 Frontend Task</Typography>
                <Logo
                    alt="Ingressive For Good"
                    src={CongressLogo}
                />
            </Stack>
        </Wrapper>
    )
}

export default Footer