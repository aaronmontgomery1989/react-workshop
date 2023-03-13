import { FormEvent } from "react";
import { Post } from "../models/Post";
import "./PostForm.css";

interface Props {
    posts: Post[];
    onAdd: (post: Post) => void;
    onClosePostForm: () => void;
}

const PostForm = ({posts, onAdd, onClosePostForm}: Props) => {
    
    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd({
            title: (e.currentTarget.elements.namedItem("title") as HTMLInputElement).value,
            thought: (e.currentTarget.elements.namedItem("thought") as HTMLInputElement).value
        });
    };

    return (
        <div className="PostForm">
            <div className="material-icons close-button" onClick={onClosePostForm}>delete</div>
            <form onSubmit={onSubmitForm} method="post">
                <p>Title</p>
                <input type="text" name="title"></input>
                <p>Thought</p>
                <div>
                    <textarea name="thought"></textarea>
                </div>
                <button>Add Post</button>
            </form>
        </div>
    );
}

export default PostForm;
