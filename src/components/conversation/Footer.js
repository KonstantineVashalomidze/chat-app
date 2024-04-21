import {Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {File, Camera, Image, LinkSimpleHorizontal, PaperPlaneRight, Smiley, Sticker, User} from "phosphor-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {useState} from "react";


const StyledInput = styled(TextField) (({theme}) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))


const ChatInput = ({setShowPicker}) => {
    const theme = useTheme();
    const [showActions, setShowActions] = useState(false);

    return (
        <StyledInput variant="standard" fullWidth placeholder={"Write message..."}  InputProps={{
            startAdornment:
                <Stack sx={{width: "max-content"}} >
                    <Stack sx={{position: "relative", display: showActions ? "inline-block" : "none"}}>
                        <Tooltip title={"Image/Video"} placement={"right"}>
                            <Fab sx={{position: "absolute", top: -102, backgroundColor: theme.palette.primary.main}} >
                                <Image size={24} />
                            </Fab>
                        </Tooltip>
                        <Tooltip title={"Stickers"} placement={"right"}>
                            <Fab sx={{position: "absolute", top: -172, backgroundColor: theme.palette.primary.main}} >
                                <Sticker size={24} />
                            </Fab>
                        </Tooltip>
                        <Tooltip title={"Camera"} placement={"right"}>
                            <Fab sx={{position: "absolute", top: -242, backgroundColor: theme.palette.primary.main}} >
                                <Camera size={24} />
                            </Fab>
                        </Tooltip>
                        <Tooltip title={"Files"} placement={"right"}>
                            <Fab sx={{position: "absolute", top: -312, backgroundColor: theme.palette.primary.main}} >
                                <File size={24} />
                            </Fab>
                        </Tooltip>
                        <Tooltip title={"Contacts"} placement={"right"}>
                            <Fab sx={{position: "absolute", top: -382, backgroundColor: theme.palette.primary.main}} >
                                <User size={24} />
                            </Fab>
                        </Tooltip>
                    </Stack>
                    <InputAdornment >
                        <IconButton >
                            <LinkSimpleHorizontal onClick={() => { setShowActions((prev) => !prev) }} color={theme.palette.primary.main} />
                        </IconButton>
                    </InputAdornment>
                </Stack>,
            endAdornment:
                <InputAdornment >
                    <IconButton onClick={() => { setShowPicker((prev) => !prev) }} >
                        <Smiley color={theme.palette.primary.main} />
                    </IconButton>
                    <IconButton >
                        <PaperPlaneRight color={theme.palette.primary.main} />
                    </IconButton>
                </InputAdornment>
        }} />
    )
}


const Footer = () => {
    const theme = useTheme();
    const [showPicker, setShowPicker] = useState(false);
    return (
        <Stack direction={"row"} alignItems={"center"} >
            <Box sx={{display: showPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 70, right: 340}}>
                <Picker previewPosition="none" theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
            </Box>
            <ChatInput setShowPicker={ setShowPicker } />
        </Stack>
    )
}



export default Footer