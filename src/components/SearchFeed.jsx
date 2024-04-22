import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  // State to hold the videos data
  const [videos, setVideos] = useState(null);
  
  // Get the search term from URL params
  const { searchTerm } = useParams();

  // Fetch videos data from API when searchTerm changes
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]); // Set videos to empty array in case of error
      }
    };
    fetchVideos();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      {/* Display search term and results count */}
      <Typography variant="h4" fontWeight={900} color="white" mb={3}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        {/* Spacer to align content */}
        <Box mr={{ sm: '100px' }} />
        {/* Render videos component with fetched data */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
