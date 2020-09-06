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
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=> res.json())
        .then(data=>setComment(data))
    },[])
  
    return (

        <div> 
               { comment.map((comment)=>{
                   return (
                    
                    <React.Fragment>    
                    <CssBaseline />
                        <Container fixed>    
                            <Typography  style={{borderBottom:'1px solid red'}}>
                                
                                <h2> NAME : {comment.name}</h2>
                                <h3> BODY: {comment.body}</h3>
                                <h4> No: {comment.id}</h4>
                                <h5> Email: {comment.email}</h5>  
                            </Typography>    
                        </Container>                
                </React.Fragment>
                   )
               })

               }    
            
        </div>
    );
};

export default Comment;