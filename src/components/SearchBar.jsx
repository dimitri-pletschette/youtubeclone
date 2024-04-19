import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  // Initialize the state for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Define the onhandleSubmit function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (searchTerm) { // If the search term is not empty
      navigate(`/search/${searchTerm}`); // Navigate to the search page with the search term as a parameter

      setSearchTerm(''); // Reset the search term to an empty string
    }
  };

  // Return the JSX for the search bar
  return (
    <Paper // Create a Paper component for the search bar
      component='form' // Make the Paper component a form element
      onSubmit={onhandleSubmit} // Attach the onhandleSubmit function to the form's onSubmit event
      sx={{
        // Style the Paper component
        display: 'flex', // Make the Paper component a flex container
        alignItems: 'center', // Align the items in the center vertically
        borderRadius: 20, // Set the border radius to 20
        border: '1px solid #e3e3e3', // Set the border to a light gray
        pl: 2, // Add some padding to the left
        boxShadow: 'none', // Remove the box shadow
        mr: { sm: 2}, // Add some margin right on larger screens
      }}
    >
      <InputBase // Create an InputBase component for the search input
        className='search-bar' // Add a class name for styling
        placeholder='Search...' // Set the placeholder text
        value={searchTerm} // Set the value of the input to the search term
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term when the input value changes
        sx={{ ml: 1, flex: 1, fontFamily: 'Roboto, Arial, sans-serif' }} // Style the InputBase component
      />
      <IconButton // Create an IconButton component for the search icon
        type='submit' // Make the IconButton a submit button
        sx={{ p: '8px', color: 'red' }} // Style the IconButton component
        aria-label='search' // Set the aria-label for accessibility
      >
        <SearchIcon /> {/* Display the SearchIcon */}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;