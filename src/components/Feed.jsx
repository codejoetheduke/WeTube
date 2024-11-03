import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("Home");
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{
                height: { sx: "auto", md: "92vh" },
                p: { sx: 0, md: 2 },
            }}>
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className='copyright'
                    variant='body2'
                    sx={{ mt: 1.5, color: "#fff" }}>
                    Copyright &copy; 2023 WeTube
                </Typography>
            </Box>
            <Box p={2}
                sx={{ overflowY: "auto", flex: 2, height: "90vh" }}
            >
                <Typography variant='h4'
                    fontWeight="bold" mb={2}
                    sx={{ color: "white" }}
                >
                    {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>

                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed;