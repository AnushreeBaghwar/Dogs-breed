import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "./../App.css";

function Dogs(props) {
  const [dogs, setdogs] = useState([]);
  const url = "https://dog.ceo/api/breeds/list/all";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdogs(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const useStyles = makeStyles(() => ({
    listItem: {
      flex: "0 0 33.333333%",
    },
    link: {
      textDecoration: "none",
      textTransform: "capitalize",
      color: "Black",
    },
  }));
  const classes = useStyles();
  return (
    <div className="box">
      {Object.keys(dogs).map(function (keyName, keyIndex) {
        return (
          <ListItem key={keyName} component="div" disablePadding>
            <ListItemButton>
              <Link className={classes.link} to={`/breed/` + `${keyName}`}>
                <ListItemText className={classes.listItem} primary={keyName} />
              </Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </div>
  );
}

export default Dogs;
