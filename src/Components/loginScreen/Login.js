import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";

export default function Login() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: isMobile ? "center" : "center",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: "#0866FF",
                            fontSize: isMobile ? "40px" : "60px",
                            fontWeight: "bold",
                            marginTop: isMobile ? "30px" : "none",
                            textAlign: isMobile ? "center" : "initial",
                        }}
                    >
                        Facebook
                    </Typography>

                    <Typography
                        sx={{
                            width: isMobile ? "100%" : "63%",
                            color: "#1C1E21",
                            fontSize: isMobile ? "23px" : "30px",
                            textAlign: isMobile ? "center" : "initial",
                        }}
                    >
                        Facebook helps you connect and share with the people in your life.
                    </Typography>
                </Box>

                <Box>
                    <Box
                        sx={{
                            boxShadow: 2,
                            width: isMobile ? "90%" : "28rem",
                            height: isMobile ? "22rem" : "22rem",
                            bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
                            color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
                            p: 1,
                            m: 1,
                            marginTop: isMobile ? "30px" : "26%",
                            borderRadius: 2,
                            textAlign: "center",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                        }}
                    >
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": { m: 1, width: isMobile ? "90%" : "90%" },
                            }}
                            noValidate
                        >
                            <Box>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Email address or phone number"
                                    multiline
                                    maxRows={4}
                                />

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Password"
                                    multiline
                                    maxRows={4}
                                />
                            </Box>
                            <br />
                            <Button
                                variant="contained"
                                sx={{
                                    width: isMobile ? "100%" : "90%",
                                    height: "3rem",
                                    color: "#1877F2",
                                    borderRadius: "8px",
                                }} >
                                <Typography sx={{ color: "white", fontWeight: "700" }}>Login</Typography>
                            </Button>
                            <br />
                            <Box sx={{ "& button": { m: 1 } }}>
                                <Button href="#text-buttons">Forgotten password?</Button>
                            </Box>
                            <br />
                            <Box sx={{ borderTop: "1px solid #bbb" }}></Box>
                            <br />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#42B72A",
                                    color: "#FFFFFF",
                                    height: "50px",
                                    width: isMobile ? "100%" : "55%",
                                    fontWeight: "bold",
                                    "&:hover": {
                                        backgroundColor: "#42B72A",
                                    },
                                }}
                            >
                                Create New Account
                            </Button>
                        </Box>

                    </Box>
                    <Typography sx={{ textAlign: "center", marginTop: isMobile ? "30px" : "30px", paddingBottom: isMobile ? "30px" : "none" }}>
                        <Button href="#text-buttons" sx={{ fontWeight: "bold", color: "black" }}>Create a Page </Button>
                        for a celebrity, brand, or business.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}