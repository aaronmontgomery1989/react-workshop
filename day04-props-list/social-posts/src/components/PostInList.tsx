import { FormEvent } from "react";
import { Post } from "../models/Post";
import "./PostInList.css";

interface Props {
    posts: Post[];
    onDelete: (post: Post, key: string) => void;
}

const PostInList = ({posts, onDelete}: Props) => {
    
    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onDelete({
            title: (e.currentTarget.elements.namedItem("title") as HTMLInputElement).value,
            thought: (e.currentTarget.elements.namedItem("thought") as HTMLInputElement).value,
        }, (e.currentTarget.elements.namedItem("key") as HTMLInputElement).value);
    };

    return (
        <>
        {posts.length > 0 ?
        <div className="PostInList">
            {posts.map((item, i) => (
                <form key={i} onSubmit={onSubmitForm} method="post">
                    <div>
                        <div>{item.title}</div>
                        <div className="Thought">{item.thought}</div>
                    </div>
                    <button className="material-icons">delete</button>
                    <input type="hidden" name="title" value={item.title}></input>
                    <input type="hidden" name="thought" value={item.thought}></input>
                    <input type="hidden" name="key" value={i}></input>
                </form>
            ))}
        </div>
        : <></>}
        </>
    );
}

export default PostInList;
