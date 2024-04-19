import React, {useState} from 'react';
import {Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {DotsThreeOutline, Download, Image} from "phosphor-react";
import {Message_options} from "../../data";


const TimeLine = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
            <Divider width={"46%"} />
            <Typography variant={"caption"} sx={{color: theme.palette.text}} >{el.text}</Typography>
            <Divider width={"46%"} />
        </Stack>
    )
}

const TextMessage = ({el}) => {
    const theme = useTheme();
    const [showOptions, setShowOptions] = useState(false);
    return (
        <Stack onMouseEnter={() => setShowOptions(true)}
               onMouseLeave={() => setShowOptions(false)}
               direction={"row"} justifyContent={el.incoming ? "start" : "end"} alignItems={"center"} spacing={1}>
            {!el.incoming &&  <MessageOptions show={showOptions} />}
            <Box p={1.5}
                 sx={{
                     backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                     borderRadius: 1.5,
                     width: "max-content",
                     boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
            }} >
                <Typography variant={"body2"} color={el.incoming ? theme.palette.text : "#fff"} >
                    {el.message}
                </Typography>
            </Box>
            {el.incoming &&  <MessageOptions show={showOptions} />}
        </Stack>
    )
}




const MediaMessage = ({el}) => {
    const theme = useTheme();
    const [showOptions, setShowOptions] = useState(false);
    return (
        <Stack onMouseEnter={() => setShowOptions(true)}
               onMouseLeave={() => setShowOptions(false)}
               direction={"row"} justifyContent={el.incoming ? "start" : "end"} alignItems={"center"} spacing={1}>
            {!el.incoming &&  <MessageOptions show={showOptions} />}
            <Box p={1.5}
                 sx={{
                     backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                     borderRadius: 1.5,
                     width: "max-content",
                     boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                 }} >
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                    <Typography variant={"body2"} color={el.incoming ? theme.palette.text : "#fff"} >
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            {el.incoming &&  <MessageOptions show={showOptions} />}
        </Stack>
    )
}


const ReplyMessage = ({el}) => {
    const theme = useTheme();
    const [showOptions, setShowOptions] = useState(false);
    return (
        <Stack onMouseEnter={() => setShowOptions(true)}
               onMouseLeave={() => setShowOptions(false)}
               direction={"row"} justifyContent={el.incoming ? "start" : "end"} alignItems={"center"} spacing={1}>
            {!el.incoming &&  <MessageOptions show={showOptions} />}
            <Box p={1.5}
                 sx={{
                     backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                     borderRadius: 1.5,
                     width: "max-content",
                     boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                 }} >
                <Stack spacing={2} >
                    <Stack p={2} direction={"column"} spacing={3} alignItems={"center"} sx={{backgroundColor: theme.palette.background.paper, borderRadius: 1}}>
                        <Typography variant={"body2"} color={theme.palette.text}>
                            {el.message}
                        </Typography>
                    </Stack>
                    <Typography variant={"body2"} color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
            {el.incoming &&  <MessageOptions show={showOptions} />}
        </Stack>
    )
}



const LinkMessage = ({el}) => {
    const theme = useTheme();
    const [showOptions, setShowOptions] = useState(false);

    return (
        <Stack onMouseEnter={() => setShowOptions(true)}
               onMouseLeave={() => setShowOptions(false)}
               direction={"row"} justifyContent={el.incoming ? "start" : "end"} alignItems={"center"} spacing={1}>
            {!el.incoming &&  <MessageOptions show={showOptions} />}
            <Box p={1.5}
                 sx={{
                     backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                     borderRadius: 1.5,
                     width: "max-content",
                     boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                 }} >
                <Stack spacing={2} >
                    <Stack p={2} spacing={3} alignItems={"center"} sx={{backgroundColor: theme.palette.background.paper, borderRadius: 2}}>
                        <img src={el.preview}  alt={el.message} style={{maxHeight: 210, borderRadius: "10px"}} />
                        <Stack spacing={2} >
                            <Typography variant={"subtitle2"} >
                                Creating Chat App
                            </Typography>
                            <Typography variant={"subtitle2"} sx={{color: theme.palette.primary.main}} component={Link} to={"https://www.facebook.com/"} >
                                www.facebook.com
                            </Typography>
                        </Stack>
                        <Typography variant={"body2"} color={el.incoming ? theme.palette.text : "#fff"}>
                            {el.message}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            {el.incoming &&  <MessageOptions show={showOptions} />}
        </Stack>
    )
}




const DocumentMessage = ({el}) => {
    const theme = useTheme();
    const [showOptions, setShowOptions] = useState(false);
    return (
        <Stack onMouseEnter={() => setShowOptions(true)}
               onMouseLeave={() => setShowOptions(false)}
               direction={"row"} justifyContent={el.incoming ? "start" : "end"} alignItems={"center"} spacing={1}>
            {!el.incoming &&  <MessageOptions show={showOptions} />}
            <Box p={1.5}
                 sx={{
                     backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                     borderRadius: 1.5,
                     width: "max-content",
                     boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                 }} >
                <Stack spacing={2}>
                    <Stack p={2} direction={"row"} spacing={2} alignItems={"center"} sx={{ backgroundColor: theme.palette.background.paper }}>
                        <Image size={32} />
                        <Typography variant={"caption"}>
                            Abstract.png
                        </Typography>
                        <IconButton >
                            <Download />
                        </IconButton>
                    </Stack>
                    <Typography variant={"body2"} sx={{color: el.incoming ? theme.palette.text : "#fff"}}>
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            {el.incoming &&  <MessageOptions show={showOptions} />}
        </Stack>
    )
}


const MessageOptions = ({ show }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();

    return (
        <>
            {show && (
                <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <DotsThreeOutline color={theme.palette.primary.main} />
                </IconButton>
            )}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                transformOrigin={{vertical: "bottom", horizontal: "left"}}
            >
                <Stack spacing={1} px={1}>
                    {Message_options.map((el) => (
                        <MenuItem key={el.title} onClick={handleClose}>
                            {el.title}
                        </MenuItem>
                    ))}
                </Stack>
            </Menu>
        </>
    );
};



export { TimeLine, TextMessage, MediaMessage, ReplyMessage, LinkMessage, DocumentMessage };