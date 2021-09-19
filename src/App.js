import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";
import FloatingActionButtons from "./components/FloatingAction";
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import FinalPost from "./components/FinalPost";
import { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { db } from "./utils/firebase";
import { createContext } from "react";
import React from "react";
import HeroSliderComponent from "./components/HeroSliderComponent";
import Auth, { authContext } from "./components/Auth.jsx";
import Circles from "./components/ui/circles";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const UserContext = createContext();

function App() {
    const [posts, setPosts] = useState([]);
    const user = useContext(authContext);
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        // fetchData();

        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    post: doc.data(),
                }))
            );
        });
    });

    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Circles className="first" />
                    <Circles className="second" />
                    <div className="content">
                        <HeroSliderComponent />

                        <UserContext.Provider value={{ posts }}>
                            <Switch>
                                <Route exact path="/">
                                    <div className="galaxy">
                                        <Grid
                                            container
                                            direction="row"
                                            alignItems="center"
                                            spacing={5}
                                        >
                                            {posts.map(({ id, post }) => {
                                                return (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        md={3}
                                                    >
                                                        <Link
                                                            to={`/post/${id}`}
                                                        >
                                                            <Posts
                                                                key={id}
                                                                title={
                                                                    post.postTitle
                                                                }
                                                                content={post.postContent.slice(
                                                                    0,
                                                                    30
                                                                )}
                                                                image={
                                                                    post.imageUrl
                                                                }
                                                            />
                                                        </Link>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </div>

                                    <FloatingActionButtons className="floatingAction" />
                                </Route>

                                <Route path="/post/:id" component={FinalPost} />
                                <Route path="/auth" exact component={Auth} />

                                <Route
                                    exact
                                    path="/create"
                                    component={CreatePost}
                                />
                            </Switch>
                        </UserContext.Provider>
                    </div>
                </div>
            </Router>

            <Footer className="footer" />
        </>
    );
}

export default App;
export { UserContext };
