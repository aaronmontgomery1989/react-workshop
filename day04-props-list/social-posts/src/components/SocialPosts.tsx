import { useState } from "react";
import { Post } from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
//import { defaultPosts } from "../data/DefaultPosts";
import "./SocialPosts.css";

const SocialPosts = () => {
    const [displayPostForm, setDisplayPostForm] = useState(false);
    const [posts, setPosts] = useState<Post[]>(/*defaultPosts*/[]);
    
    const onAdd = (post: Post) => {
        setPosts(prevPosts => [...prevPosts.slice(0, prevPosts.length), post]);
        setDisplayPostForm(false);
    };
    
    const onDelete = (post: Post, index: string) => {
        posts.splice(Number(index), 1);
        setPosts([...posts]);
    };
    
    const onClosePostForm = () => {
        setDisplayPostForm(false);
    };
    
    return (
        <div>
            <div className="SocialPosts">
                <h1>My Thoughts</h1>
                <button onClick={() => setDisplayPostForm(!displayPostForm)}>New Thought</button>
                <PostInList posts={posts} onDelete={onDelete} />
            </div>
            {displayPostForm === true ?
            <PostForm posts={posts} onAdd={onAdd} onClosePostForm={onClosePostForm} /> :
            <></>}
        </div>
    );
}

export default SocialPosts;
