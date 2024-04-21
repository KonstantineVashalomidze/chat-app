import React, { useState } from "react";
import {EnvelopeSimple, Eye, EyeSlash, LockSimple} from "phosphor-react";
import {Box, Button, IconButton, InputAdornment, Link, Stack, TextField, Typography} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import SocialAuth from "./SocialAuth";
import { Link as RouterLink } from "react-router-dom";




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <Box
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                boxShadow={5}
                borderRadius={8}
                p={4}
            >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{width: "100%"}}>
                    <Typography variant={"h5"}>
                        Login
                    </Typography>
                    <img style={{height: 64, width: 64}} src={Logo} alt={"Logo"}/>
                </Stack>
                <Typography variant="subtitle2" p={1}>
                Don't you have an account? <Link style={{ cursor: "pointer" }} component={RouterLink} to="/auth/signup">Sign Up</Link>
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box pb={4}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EnvelopeSimple size={20} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box pb={2}>
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockSimple size={20} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position={"end"} >
                                        {showPassword
                                            ? <IconButton onClick={() => {setShowPassword((prev) => !prev)}}><Eye size={20} /></IconButton>
                                            : <IconButton onClick={() => {setShowPassword((prev) => !prev)}}><EyeSlash size={20} /></IconButton>}
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box pt={2}  >
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                        <Typography
                            variant="subtitle2"
                            align="center"
                        >
                            Forgot password? <Link style={{ cursor: "pointer" }} component={RouterLink} to="/">Reset</Link>
                        </Typography>
                    </Box>
                </form>
            </Box>
            <SocialAuth />
        </Box>
    );
};

export default Login;