import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: "5%", backgroundColor: "black" }}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '358px' }, height: 180, borderRadius: "5%" }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "black", height: '106px', borderRadius: "5%" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ borderRadius: "5%" }}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ borderRadius: "5%" }}>
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard