import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
    <>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Search for Movies and hit Enter.." id="fullWidth" />
    </Box>
    </>
  )
}

export default SearchBar;