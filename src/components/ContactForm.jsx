import React, { useState } from "react"
import { Box, Button, Checkbox, FormControl, Stack, TextField, Typography, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"
import { debounce } from "lodash"

const SubmitButton = styled(Button)`
    font-weight: bolder;
    text-transform: none;
    font-size: 1em;
    paddingY: 1em;
    background-color: #175CD3;
    color: #FFFFFF;

    &:hover: {
        background-color: #1570EF
    }
`


const ContactForm = () => {
    const isMobile = useMediaQuery('(max-width: 600px')

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        agreed: false
    })

    const [formError, setFormError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        agreed: false
    })

    const handleUpdate = debounce(( keyname, value ) => {
        console.log(value)
        switch (keyname) {
            case "firstName":
                setFormData({...formData, [keyname]: value })
                setFormError({...formError, [keyname]: false })
                break
            case "lastName":
                setFormData({...formData, [keyname]: value })
                setFormError({...formError, [keyname]: false })
                break
            case "email":
                if (value.includes('@')) {
                    setFormData({...formData, [keyname]: value })
                    setFormError({...formError, [keyname]: false })
                    break
                } else {
                    setFormError({ ...formError, [keyname]: true})
                    break
                }

            case "message":
                setFormData({...formData, [keyname]: value })
                setFormError({...formError, [keyname]: false })
                break
            default:
                break
        }
    }, 2000)

    const handleSubmit = () => {
        if ( formData.firstName === ""|| formData.lastName === "" || formData.message === "" || formData.email === "" || formData.agreed === false) {
            setFormError({
                firstName: formData.firstName === "" ? true : false,
                lastName: formData.lastName === "" ? true : false,
                email: formData.email === "" ? true : false,
                message: formData.message === "" ? true : false,
                agreed: !formData.agreed
            })
            return
        } else {
            alert('Form Submitted')
            console.log(formData, "Form Data")
        }
    }
    

    return (
        <React.Fragment>
            <Box component={'div'} textAlign={'left'} marginBottom={'3em'}>

                <Typography variant="h2" paddingX={'0'} paddingBottom={'0'}>Contact Me</Typography>

                <Typography variant="h4" paddingX={'0'} paddingY={'1em'}>
                    Hi there, contact me to ask me about anything you have in mind.
                </Typography>

                <FormControl component={'form'} autoComplete="off">
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={!isMobile ? 'row' : 'column'} spacing={2}>
                            <div>
                                <Typography variant="h6">First name</Typography>
                                <TextField
                                    id="first_name"
                                    variant="outlined"
                                    placeholder="Enter your first name"
                                    error={formError.firstName}
                                    helperText={formError.firstName && "Please enter your first name"}
                                    onChange={e => {
                                        console.log(e)
                                        handleUpdate('firstName', e.target.value)
                                    }}
                                    fullWidth
                                    required
                                />
                            </div>

                            <div>
                                <Typography variant="h6">Last name</Typography>
                                <TextField
                                    id="last_name"
                                    variant="outlined"
                                    placeholder="Enter your last name"
                                    error={formError.lastName}
                                    helperText={formError.lastName && "Please enter your last name"}
                                    onChange={e => handleUpdate('lastName', e.target.value)}
                                    fullWidth
                                    required
                                />
                            </div>
                        </Stack>


                        <div>
                            <Typography variant="h6">Email</Typography>
                            <TextField
                                id="email"
                                variant="outlined"
                                type="email"
                                placeholder="yourname@email.com"
                                error={formError.email}
                                helperText={formError.email && "Please enter your email"}
                                onChange={e => handleUpdate('email', e.target.value)}
                                fullWidth
                                required
                            />
                        </div>


                        <div>
                            <Typography variant="h6">Message</Typography>
                            <TextField
                                id="message"
                                variant="outlined"
                                placeholder="Send me a message and i'll reply you as soon as possible..."
                                error={formError.email}
                                helperText={formError.email && "Please enter a message"}
                                onChange={e => handleUpdate('message', e.target.value)}
                                rows={5}
                                fullWidth
                                multiline
                                required
                            />
                        </div>


                        <Stack direction={'row'}>
                            <Checkbox id="agree_terms" onChange={e => handleUpdate('agreed', e.target.value)} required />
                            <Typography variant="h5" paddingY={'1em'}>You agree to providing your data to {`{name}`} who may contact you.</Typography>
                        </Stack>

                        <SubmitButton variant="contained" id="btn__submit" type="submit" onClick={handleSubmit}>
                            Send message
                        </SubmitButton>

                    </Stack>

                </FormControl>
            </Box>
        </React.Fragment>
    )
}

export default ContactForm