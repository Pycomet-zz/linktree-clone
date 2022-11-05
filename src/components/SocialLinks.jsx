import React from "react";
import { Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

import SlackIcon from "../assets/slack.svg"
import GithubIcon from "../assets/github.svg"


const SocialLinks = () => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Button id="twitter" href="https://twitter.com/code_fredy">
                <Typography variant="h4">
                    Twitter Link
                </Typography>
            </Button>

            <Button id="btn__zuri" href="https://training.zuri.team/">
                <Typography variant="h4">
                    Zuri Team
                </Typography>
            </Button>


            <Button id="books" href="https://books.zuri.team/">
                <Typography variant="h4">
                    Zuri Books
                </Typography>
            </Button>

            <Button id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=codefred">
                <Typography variant="h4">
                    Python Books
                </Typography>
            </Button>

            <Button id="pitch" href="https://background.zuri.team/">
                <Typography variant="h4">
                    Background Check for Coders
                </Typography>
            </Button>

            <Button id="book__design" href="https://books.zuri.team/design-rules">
                <Typography variant="h4">
                    Design Books
                </Typography>
            </Button>


            <Button id="contact" onClick={() => navigate("/contact")}>
                <Typography variant="h4">
                    Contact Me
                </Typography>
            </Button>

            <Stack direction={'row'} marginY={'1.5em'} spacing={4}>
                <img
                id="slack"
                alt="slack"
                src={SlackIcon}
                />
                <img
                alt="github"
                src={GithubIcon}
                />
            </Stack>
        </React.Fragment>
    )

}

export default SocialLinks