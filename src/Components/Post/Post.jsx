import React, {useState} from 'react';

const Post = ({post}) => {
    const [liked, setLiked] = useState(post.liked);
    const [disliked, setDisliked] = useState(post.setDisliked);

    const handleLike = () => {
        setLiked(true);
        setDisliked(false);
    };

    const handleDislike = () => {
        setLiked(false);
        setDisliked(true);
    };
    

    return ( 
    <div className="post">
        <h2>{post.name}</h2>
        <p>{post.body}</p>
        <button onClick={handleLike} disabled={liked}>Like</button>
        <button onClick={handleDislike} disabled={disliked}>Dislike</button>
    </div> 
    );
}
 
export default Post;