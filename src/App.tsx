import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Search from './Components/Search';
import Results from './Components/Results';
import Pagination from './Components/Pagination'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function App() {
  const [results, setResults] = useState("")
  const [pageIndex, setPageIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const onResults = (res: any) => {
    if (res) {
      // console.log('res---', );
      setTotalItems(res.data.totalItems);
      setResults(res);
    }
  }
  const PageIndexChange = (index: number) => {
    setPageIndex(index);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Google Books Search
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Search onResults={onResults} pageIndex={pageIndex} />
        <Results list={results} />
        <Container>
          {results ? <Pagination onPageIndexChange={PageIndexChange} totalItems={totalItems}/> : ""}
        </Container>
      </Container>
    </div>
  );
}

export default App;
