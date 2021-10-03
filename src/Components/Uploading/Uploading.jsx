import React, { useState } from 'react';
import { uploadFile, deleteFile } from 'react-s3'
import './Upload.scss'


export default function Uploading({form, setForm}) {
    const [loading, setLoading] = useState("")
    // const [display, setDisplay] = useState([])
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
            console.log(data.key)
            setForm({ ...form, "images": [...form.images, data.key] })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async function handleRemove(e) {
        e.preventDefault()
        console.log(e.target.name)
        deleteFile(e.target.name,config)
        .then(response=> console.log(response))
        .catch(err => console.error(err))
    }
    const display = form.images.map((image,idx) => { 
        return <span key={idx}><img src={`https://aiyapetstudios.s3.amazonaws.com/${image}`} alt="test" className="img-display"/> {loading} <button onClick={handleRemove} name={image}>(x)</button></span>
    })
    return (
        <>
            <span><input type="file" onChange={uploadHandler}></input> {loading} </span>
            {display}
        </>
    )


}