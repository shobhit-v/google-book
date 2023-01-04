import BookCard from './Book';
import Grid from '@mui/material/Grid';
import {
    Box
} from "@mui/material";

const Books = (props: any) => {
    return (
        <Box>
            <Grid container spacing={18}>
                {props.bookList && props.bookList.map((book: any, index: number) => {
                    return <BookCard key={index} bookDetails={book}/>
                })}
            </Grid>
        </Box>
    );
};

export default Books;