import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    console.log(props.post);
    const {title,body,id}= props.post;
    return (
        <div>
            <React.Fragment>
            <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '350px', width:'900px',borderRadius:'10px' }}>
                      <h1>Post Title : {title}</h1>
                      <p> Post Body: {body}</p>
                      <h4>Post By User: {id}</h4>
                      
                      <Button variant="contained" color="primary"><Link to={`/post/${id}`} style={{color:'white'}}>More Info {id}</Link></Button>
                    </Typography>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Post;