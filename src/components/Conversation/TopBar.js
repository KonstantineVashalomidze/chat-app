import react from 'react';
import {Avatar, Badge, Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import {faker} from "@faker-js/faker";
import {styled, useTheme} from "@mui/material/styles";
import {CaretDown, MagnifyingGlass, Phone, VideoCamera} from "phosphor-react";




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




const TopBar = () => {
    const theme = useTheme();


    return (
        <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{width: "100%", height: "100%"}}>
            <Stack direction={"row"} spacing={2} >
                <StyledBadge overlap={"circular"} anchorOrigin={{vertical: "bottom", horizontal: "right"}} variant={"dot"}>
                    <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />

                </StyledBadge>
                <Stack spacing={0.2} >
                    <Typography variant={"subtitle2"}>
                        {faker.name.fullName()}
                    </Typography>
                    <Typography variant={"caption"}>
                        Online
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
                <Divider orientation={"vertical"} flexItem />
                <IconButton >
                    <CaretDown color={theme.palette.primary.main} />
                </IconButton>
            </Stack>
        </Stack>
    )
}



export default TopBar