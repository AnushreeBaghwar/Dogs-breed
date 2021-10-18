import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageList, ImageListItem } from "@mui/material/";
import "./../App.css";

function Breed(props) {
  const { name } = useParams();
  const [imgs, setImgs] = useState([]);
  const url = "https://dog.ceo/api/breed/" + name + "/images/random/10";
  useEffect(() => {
    axios.get(url).then((res) => {
      setImgs(res.data.message);
    });
  }, [url]);
  return (
    <div className="imgs">
      <ImageList
        sx={{ width: 1500, height: 900, padding: 2 }}
        cols={3}
        rowWidth={304}
        gap={8}
      >
        {imgs.map((item) => (
          <ImageListItem key={item}>
            <img
              className="img"
              src={`${item}?w=5&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="img"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Breed;
