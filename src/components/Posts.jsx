import React from "react";
import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["DM Mono", "Roboto", "sans-serif"],
    },
});
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        boxShadow:
            "-5px 5px 10px rgba(255, 255, 255, 0.281),5px -5px 10px rgba(0, 0, 0, 0.25)",

        backgroundColor: "rgba(27,27,27, 0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px",
        transition: "200ms",
        fontFamily: ["DM Mono", "Roboto", "sans-serif"],
        "&:hover": {
            backgroundColor: "rgba(27,27,27, 0.9)",
            transform: "scale(1.05)",
            transitionTimingFunction: "ease-in-out",
            transition: "200ms",
        },
    },
    media: {
        height: 140,
    },
    button: {
        color: "white",
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    const handleClick = () => {};
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.title}
                    />
                    <CardContent className={classes.button}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title.slice(0, 10) + "..."}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            color="inherit"
                        >
                            {/* {props.content ? (
                                props.content.slice(0, 10)
                            ) : (
                                <p>content</p>
                            )} */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
}
