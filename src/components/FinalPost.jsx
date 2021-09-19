import React, { useEffect, useState } from "react";
import "./css/FinalPost.css";
import { UserContext } from "../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LocalSeeOutlined, Update } from "@material-ui/icons";
import HtmlParser from "react-html-parser";
import { db } from "../utils/firebase";

function FinalPost() {
    let { id } = useParams();
    const { posts } = useContext(UserContext);
    const [curr, setCurr] = useState(posts);
    let current = [];
    const [result, setResults] = useState([
        {
            id: "",
            post: {
                postTitle: "",
                imageUrl: "",
                postContent: "",
            },
        },
    ]);
    useEffect(() => {
        let unmounted = false;
        console.log(id);
        db.collection("posts")
            .get()
            .then((snapshot) => {
                if (!unmounted) {
                    current = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }));
                    setResults(current.filter((p) => p.id === id));
                }
            });
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <div className="blog__post">
            <div className="blog__title">{result[0].post.postTitle}</div>
            <div className="blog__image">
                <img
                    src={result[0].post.imageUrl}
                    alt="image"
                    style={{
                        objectFit: "contain",
                        minHeight: "50px",
                        maxHeight: "500px",
                    }}
                />
            </div>
            <div className="blog__content">
                <p>{HtmlParser(result[0].post.postContent)}</p>
            </div>
        </div>
    );
}

export default FinalPost;
