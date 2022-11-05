import React, { useState } from "react";
import { Typography, Tooltip, tooltipClasses } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from "@emotion/styled";

import ShareIcon from '../assets/share_icon.svg'
import MenuIcon from '../assets/menu_icon.svg'
import Image from "../assets/profile__img.svg"
import EditImage from "../assets/profile__img_edit.svg"

const ShareButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 3em;
    right: 28vw;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px dashed #D0D5DD;
    color: #D0D5DD;
    background: none;
    opacity: 0.8;

    @media only screen and (max-width: 600px) {
        right: 5vw
    }

    &:hover {
        color: black;
        opacity: 1;
        background: #F9FAFB
    };
    &:active {
        opacity: 0.8;
        box-shadow: 0px 0px 0px 4px #F2F4F7
    }
`

const InfoTip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#101828',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#101828',
      padding: '8px 12px',
      lineHeight: '2em',
      fontWeight: '600',
      borderRadius: '10px'
    },
}));


const Header = () => {
    const isMobile = useMediaQuery('(max-width:600px)')

    const [hovered, setHovered] = useState(false)

    return (
        <React.Fragment>
            <img
            id="profile__img"
            onMouseOver={() =>setHovered(true)}
            onMouseOut={() => setHovered(false)}
            alt="profile_img"
            src={hovered ? EditImage : Image}
            />

            {isMobile ? (
                <ShareButton>
                    <img src={MenuIcon} alt="Share" />
                </ShareButton>
            ) : (
                <InfoTip
                    arrow
                    title="Share Link"
                    placement="left-start"
                    enterDelay={200}
                    leaveDelay={200}
                >
                    <ShareButton>
                        <img src={ShareIcon} alt="Share" />
                    </ShareButton>
                </InfoTip>
            )}
            
            <Typography variant='h2'>
                Annette Black
            </Typography>

            <br />
        </React.Fragment>
    )

}

export default Header