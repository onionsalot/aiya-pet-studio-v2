import React, { useState } from 'react';
import { uploadFile } from 'react-s3'


export default function Uploading() {
    const [loading, setLoading] = useState("")
    const config = {
        bucketName: process.env.REACT_APP_BUCKETNAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESSKEYID,
        secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY,
    }
    async function uploadHandler(e) {
        e.preventDefault()
        uploadFile(e.target.files[0], config)
        .then((data) => {
            console.log(data.location)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <span><input type="file" onChange={uploadHandler}></input> {loading} </span>
        </>
    )


}