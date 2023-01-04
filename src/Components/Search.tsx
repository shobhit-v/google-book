import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ICONSearch from '@mui/icons-material/Search';
import API from '../Service/API';

const Search = (props: any) => {
  const [searchKey, setSearchKey] = useState("");

  const searchHandler = async (e: any) => {
    setSearchKey(e.target.value);
    const res = searchKey && await API(searchKey,10, props.pageIndex);
    props.onResults(res);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <br />
      <TextField
        id="input-with-icon-textfield"
        fullWidth
        label="Book Name"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ICONSearch />
            </InputAdornment>
          ),
        }}
        onChange={searchHandler}
        value={searchKey}
      />
    </Box>
    )     
}
export default Search;  