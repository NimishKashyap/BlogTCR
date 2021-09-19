import React from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
    fab_icon: {
        color: "white",
        backgroundColor: "rgb(0, 148, 216)",
        height: 80,
        width: 80,
        boxShadow: "0px 0px 10px 0 rgba(165,165,165)",
    },
}));
export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.fab}>
            <Link to="/create">
                <Fab className={classes.fab_icon} aria-label="edit">
                    <EditIcon fontSize="large" />
                </Fab>
            </Link>
        </div>
    );
}
