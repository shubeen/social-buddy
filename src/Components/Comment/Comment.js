import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const Comment = () => {
    
    const {postId}= useParams();
    
    // to Fetch comment 
    const [comment, setComment] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
        .then(res=> res.json())
        .then(data=>setComment(data))
    },[])
  
    return (

        <div>            
            <React.Fragment>
                <CssBaseline />
                    <Container fixed>
                            
                        <Typography >
                            <h1> Show Comments</h1>
                            <h1>Comment Name : {comment.name}</h1>
                            <h4> Comment Body: {comment.body}</h4>
                            <h5>Comment ID: {comment.id}</h5>
                            <h4>Email: {comment.email}</h4>  
                        </Typography>    
                    </Container>                
            </React.Fragment>


        </div>
    );
};

export default Comment;