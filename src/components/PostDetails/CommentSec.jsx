import React, {useState, useRef} from "react";
// import { Typography, Button, TextField } from "@material-ui/core";
import { Typography, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
    const dispatch = useDispatch();    
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentsRef = useRef(null);


    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        // console.log(finalComment);
        const newComments = await dispatch(commentPost( finalComment, post._id ));
        setComments(newComments);
        setComment('');    


        commentsRef.current.scrollIntoView({ behavior:'smooth' });
    }

    return (        
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography variant="h6" gutterBottom>COMMENTS</Typography>
                    {comments.map((c, i) => (
                        <Typography gutterBottom variant="subtitle1" key={i}>
                            {/* <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]} */}
                            {c}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </ div>
                {(user?.result?.name) && (
                <div  style={{ width: '70%' }}>                    
                     <Typography gutterBottom variant="subtitle1">Write a Comment</Typography>
                     <TextField
                     minRows={4}  
                     fullWidth 
                     multiline 
                     variant="outlined"  
                     label="Comment" 
                     value={comment} 
                     onChange={(e) => setComment(e.target.value)}
                    /> 
                <Button style={{ marginTop: '10px' }} color="primary" variant="contained" fullWidth disabled={!comment} onClick={handleClick}>
                Comment
                </Button>
                </div>
                )}
            </div>
        </div>
        
                
    );
};

export default CommentSection;