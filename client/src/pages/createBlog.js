import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

const CreateBlog = () => {
    const id = localStorage.getItem("userId") || "";
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            toast.error("User not logged in!");
            return;
        }

        try {
            const { data } = await axios.post("/api/v1/blog/create-blog", {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,
            });

            if (data?.success) {
                toast.success("Blog Created Successfully!");
                navigate("/my-blogs");
            }
        } catch (error) {
            console.error("Error creating blog:", error);
            toast.error("Failed to create blog.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                width={"50%"}
                border={3}
                borderRadius={10}
                padding={3}
                margin="auto"
                boxShadow={"10px 10px 20px #ccc"}
                display="flex"
                flexDirection={"column"}
                marginTop="30px"
            >
                <Typography
                    variant="h2"
                    textAlign={"center"}
                    fontWeight="bold"
                    padding={3}
                    color="gray"
                >
                    Create A Post
                </Typography>
                <InputLabel sx={{ mb: 1, mt: 2, fontSize: "18px", fontWeight: "bold" }}>
                    Title
                </InputLabel>
                <TextField
                    name="title"
                    value={inputs.title}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                />
                <InputLabel sx={{ mb: 1, mt: 2, fontSize: "18px", fontWeight: "bold" }}>
                    Description
                </InputLabel>
                <TextField
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                    multiline
                    rows={3}
                />
                <InputLabel sx={{ mb: 1, mt: 2, fontSize: "18px", fontWeight: "bold" }}>
                    Image URL
                </InputLabel>
                <TextField
                    name="image"
                    value={inputs.image}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                />
                <Button type="submit" color="primary" variant="contained" sx={{ mt: 2, padding: "10px" }}>
                    SUBMIT
                </Button>
            </Box>
        </form>
    );
};

export default CreateBlog;
