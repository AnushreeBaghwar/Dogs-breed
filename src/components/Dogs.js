import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";
import "./../App.css";
import paws from "./../paws.png";

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
  }));
  const classes = useStyles();
  return (
    <div className="box">
      {Object.keys(dogs).map(function (keyName, keyIndex) {
        return (
          <ListItem key={keyName} component="div" disablePadding>
            <ListItemButton>
              <Link to={`/breed/` + `${keyName}`}>
                <Stack spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={paws}
                    sx={{ width: 56, height: 56 }}
                  />
                </Stack>
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
