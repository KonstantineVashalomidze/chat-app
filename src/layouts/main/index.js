import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {Container} from "@mui/material";

const isAuthenticated = true;

const MainLayout = () => {

    if (isAuthenticated) {
        return <Navigate to={"/app"} />;
    }

    return (
        <Container sx={{ height: "100vh", alignContent: "center" }} maxWidth={"sm"} >
            <Outlet />
        </Container>
    );
};

export default MainLayout;
