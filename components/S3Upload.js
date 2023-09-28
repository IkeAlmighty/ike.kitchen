import { useState, useEffect } from "react";
import S3Image from "./S3Image";

export default function S3Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleUpload() {
    if (!selectedFile) return; //return without doing anything if there is no file selected

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("key", selectedFile.name); //FIXME: this overwrites same keyed files in s3

    // TODO: get the s3 url to post to from a secure backend request

    // TODO: post the file to provided url

    // TODO: let the user know if the upload was successful.
  }

  useEffect(handleUpload, [selectedFile]);

  return (
    <div>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

      {/* preview: */}
      <S3Image uri={selectedFile?.name} />
    </div>
  );
}
