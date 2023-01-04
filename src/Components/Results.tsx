import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Books from './Books';
import { Box } from '@mui/system';

const Results = (props: any) => {
    if (!props.list || !props.list.data) {
        return (
            <div>
                Empty
            </div>)
    }
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#eeecff;',
                    '&:hover': {
                        backgroundColor: '#b8b3e7',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                <p>The total number of results: {props.list.data.totalItems ? props.list.data.totalItems : 0}</p>
                <p>Most commonly Author: {props.list.data.items[0].volumeInfo.authors}</p>
                <div>
                    <p>Earliest Publication Date: </p>
                    <p>Most Recent Publication Date: </p>
                </div>
                <p>Server Response Time: {props.list.duration} ms</p>
            </Box>
            <Container>
                {props.list.data.items &&
                    <Books bookList={props.list.data.items} />
                }
            </Container>
        </Container>
    );
};

export default Results;