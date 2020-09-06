import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId}= useParams();
    const [post, setPost]= useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then (data=> setPost(data))
    },[])

    return (
        <div>
                
            <React.Fragment>
                <CssBaseline />
                    <Container fixed>
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100%', width:'900px',borderRadius:'10px' }}>
                        <h1>Post Title : {post.title}</h1>
                        <p> Post Body: {post.body}</p>
                        <h4>Post By User: {post.id}</h4>
                        <h1 style={{textAlign: 'center'}}> COMMENTS</h1> 
                        <Comment></Comment> 
                        </Typography>
                        
                        
                </Container>                
            </React.Fragment>

        </div>
    );
};

export default PostDetail;