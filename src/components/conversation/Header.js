import {Avatar, Badge, Divider, IconButton, Stack, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {CaretDown, MagnifyingGlass, Phone, VideoCamera} from "phosphor-react";
import {toggleSideBar} from "../../redux/slices/app";
import {useDispatch, useSelector} from "react-redux";




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));




const Header = ({isGroup}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {roomId} = useSelector((state) => state.app);
    const toUser = useSelector((state) => state.conversation.individualChat).conversations.find(element => element.id === roomId);


    return (
        <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{width: "100%", height: "100%"}}>
            <Stack direction={"row"} spacing={2} >
                {toUser.online ? (<StyledBadge overlap={"circular"} anchorOrigin={{vertical: "bottom", horizontal: "right"}} variant={"dot"}>
                    <Avatar onClick={() => {if (!isGroup) dispatch(toggleSideBar()); } } alt={toUser.name} src={toUser.avatar} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", cursor: "pointer"}} />
                </StyledBadge>) :
                   (<Avatar onClick={() => {if (!isGroup) dispatch(toggleSideBar()); } } alt={toUser.name} src={toUser.avatar} sx={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", cursor: "pointer"}} />)
                }
                <Stack spacing={0.2} >
                    <Typography variant={"subtitle2"}>
                        {toUser.name}
                    </Typography>
                    <Typography variant={"caption"}>
                        {toUser.online ? "Online" : "Offline"}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <IconButton >
                    <VideoCamera color={theme.palette.primary.main} />
                </IconButton>
                <IconButton >
                    <Phone color={theme.palette.primary.main} />
                </IconButton>
                <IconButton >
                    <MagnifyingGlass color={theme.palette.primary.main} />
                </IconButton>
                <Divider orientation={"vertical"} color={theme.palette.primary.main} flexItem />
                <IconButton >
                    <CaretDown color={theme.palette.primary.main} />
                </IconButton>
            </Stack>
        </Stack>
    )
}



export default Header