import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Search from './Components/Search';
import Results from './Components/Results';
import Pagination from './Components/Pagination'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import API from './Service/API';


function App() {
  const [results, setResults] = useState("")
  const [pageIndex, setPageIndex] = useState(0);
  const [pageRow, setPageRow] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const onResults = (res: any, searchedKey: string) => {
    if (res) {
      setTotalItems(res.data.totalItems);
      setResults(res);
      setSearchKey(searchedKey)
    }
  }
  const PageIndexChange = async (index: number) => {
    setPageIndex(index);
    const res: any = searchKey && await API(searchKey, pageRow, pageIndex);
    setResults(res);
  };
  const onPageRowChange = async (row: number) => {
    alert('row'+row);
    setPageRow(row);
    const res: any = searchKey && await API(searchKey, pageRow, pageIndex);
    setResults(res);
  }
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
        <Search onResults={onResults} />
        <Results list={results} />
        <Container>
          {results ? <Pagination onPageIndexChange={PageIndexChange} onPageRowChange={onPageRowChange} totalItems={totalItems} /> : ""}
        </Container>
      </Container>
    </div>
  );
}

export default App;
