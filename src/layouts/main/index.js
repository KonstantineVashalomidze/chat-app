import React from "react";
import { Outlet } from "react-router-dom";
import {Container} from "@mui/material";



const MainLayout = () => {


    return (
        <Container sx={{ height: "100vh", alignContent: "center" }} maxWidth={"sm"} >
            <Outlet />
        </Container>
    );
};

export default MainLayout;
