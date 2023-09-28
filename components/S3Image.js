import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function S3Image({ uri, alt }) {
  const [imgUrl, setImgUrl] = useState("");

  // when the object loads hit up aws for a url to fetch the image
  useEffect(() => {
    async function fetchImageUrlFromBackend() {
      //TODO: add backend request when backend route is implemented

      setImgUrl(""); //TODO: replace "" with actual fetch result
    }

    fetchImageUrlFromBackend();
  }, []);

  return (
    <div>{imgUrl ? <img src={imgUrl} alt={alt} /> : <LoadingSpinner />}</div>
  );
}
