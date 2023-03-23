import { useEffect, useState } from "react";
import { getRedditData, Response } from "../services/RedditService";
import "./Reddit.css";

const Reddit = () => {
    const [reddit, setReddit] = useState<Response>();
    
    useEffect(() => {
        getRedditData().then((res: Response) => {
            setReddit(res);
        });
    }, []);

    return (
        <ul>
            <>
            {reddit?.data.children.slice(0, 9).map((x, i) => {
                return (
                    <li key={i}>
                        {x.data.title}
                        <br></br>
                        {x.data.url}
                        <br></br>
                        <img src={x.data.thumbnail} alt=""></img>
                    </li>
                )
            })}
            </>
        </ul>
    );
};

export default Reddit;
