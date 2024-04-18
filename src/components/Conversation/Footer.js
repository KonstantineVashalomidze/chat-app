import {IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {LinkSimple, LinkSimpleHorizontal, PaperPlaneRight, PaperPlaneTilt, Smiley} from "phosphor-react";


const StyledInput = styled(TextField) (({theme}) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))




const Footer = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} alignItems={"center"} >
            <StyledInput variant="standard" fullWidth placeholder={"Write message..."}  InputProps={{
                startAdornment:
                <InputAdornment >
                    <IconButton >
                        <LinkSimpleHorizontal color={theme.palette.primary.main} />
                    </IconButton>
                </InputAdornment>,
                endAdornment:
                    <InputAdornment >
                        <IconButton >
                            <Smiley color={theme.palette.primary.main} />
                        </IconButton>
                        <IconButton >
                            <PaperPlaneRight color={theme.palette.primary.main} />
                        </IconButton>
                    </InputAdornment>
            }} />
        </Stack>
    )
}



export default Footer