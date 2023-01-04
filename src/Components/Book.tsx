import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Books(prop: any) {
    const book = prop.bookDetails;
    const volumeInfo = book.volumeInfo;
    if (book && volumeInfo) {
        // console.log('book--', volumeInfo);
        return (
            <Grid item md={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="span">
                                {volumeInfo.authors && volumeInfo.authors.toString(',')} - {volumeInfo.title && volumeInfo.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {volumeInfo.subtitle ? volumeInfo.subtitle: <span>No description</span>}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
    return (
        <div>loading..</div>
    );
}
