import { Button } from "@material-ui/core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";
import { useState } from "react";
import "./css/createPost.css";
import { db, storage } from "../utils/firebase";

function CreatePost({ history }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [progress, setProgress] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection("posts").doc().set({
                                postTitle: title,
                                imageUrl: url,
                                postContent: content,
                            });
                            setProgress(0);
                            setTitle("");
                            setContent("");
                        })
                        .catch((err) => alert(err.message));
                    history.push("/");
                }
            );
        } else {
            alert("Select an Image!");
        }
    };

    return (
        <div className="create__post">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    type="text"
                    className="form__text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label for="file__choose" className="choose__file">
                    {image ? image.name : "Choose file"}
                </label>
                <input
                    type="file"
                    placeholder="Image"
                    accept="image/*"
                    id="file__choose"
                    style={{
                        visibility: "hidden",
                    }}
                    onChange={(e) => {
                        e.preventDefault();
                        if (e.target.files[0]) {
                            setImage(e.target.files[0]);
                        }
                    }}
                />
                <progress
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    value={progress}
                    max="100"
                />

                <div className="editor">
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(e, editor) => setContent(editor.getData())}
                        style={{
                            minHeight: "100px",
                        }}
                    />
                </div>

                <button className="submit__button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
