import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  // State variables to store channel details and videos
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  // Get the channel id from the route parameters
  const { id } = useParams();

  // Fetch channel details and videos when the id changes
  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Fetch channel details
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(channelData?.items[0]);

        // Fetch videos for the channel
        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Channel header */}
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      
      {/* Video list */}
      <Box p={2} display="flex">
        {/* Spacer */}
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* Display videos */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
