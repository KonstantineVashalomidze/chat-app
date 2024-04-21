import React, { useState } from "react";
import { EnvelopeSimple, Eye, EyeSlash, LockSimple, User } from "phosphor-react";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Link as RouterLink } from "react-router-dom";
import SocialAuth from "./SocialAuth";

const PasswordField = ({ label, value, onChange, error, helperText }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            fullWidth
            label={label}
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockSimple size={20} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position={"end"}>
                        {showPassword ? (
                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                <Eye size={20} />
                            </IconButton>
                        ) : (
                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                <EyeSlash size={20} />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});  // Reset errors before validating the form
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Handle registration logic here
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("Confirm Password:", confirmPassword);
        } else {
            setErrors(validationErrors);
        }
    };
    const validateForm = () => {
        const errors = {};

        if (!username.trim()) {
            errors.username = "Username is required";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email address";
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        if (confirmPassword.trim() !== password.trim()) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    return (
        <Box justifyContent={"center"} alignItems={"center"}>
            <Box boxShadow={5} borderRadius={8} p={4}>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{ width: "100%" }}
                >
                    <Typography variant={"h5"}>Registration</Typography>
                    <img style={{ height: 64, width: 64 }} src={Logo} alt={"Logo"} />
                </Stack>
                <Typography variant="subtitle2" p={1}>
                    Already have an account?{" "}
                    <Link style={{ cursor: "pointer" }} component={RouterLink} to="/auth/login">
                        Login
                    </Link>
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box pb={4}>
                        <TextField
                            fullWidth
                            label="Username"
                            type="text"
                            variant="outlined"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
                            }}
                            error={!!errors.username}
                            helperText={errors.username}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <User size={20} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box pb={4}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                            }}
                            error={!!errors.email}
                            helperText={errors.email}
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
                        <PasswordField
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Box>
                    <Box pb={2}>
                        <PasswordField
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />
                    </Box>
                    <Box pt={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Box>
                </form>
                <Box pt={2} pb={2}>
                    <Typography variant="body2" align="center">
                        By signing up, you agree to our{" "}
                        <Link
                            component={RouterLink}
                            to="/terms-of-service"
                            style={{ textDecoration: "underline" }}
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            component={RouterLink}
                            to="/privacy-policy"
                            style={{ textDecoration: "underline" }}
                        >
                            Privacy Policy
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <SocialAuth />
        </Box>
    );
};

export default Registration;