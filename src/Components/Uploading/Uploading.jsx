import React, { useState } from 'react';
import S3 from 'react-aws-s3';
import './Upload.scss'


export default function Uploading({form, setForm}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    // const [display, setDisplay] = useState([])
    const config = {
        bucketName: process.env.REACT_APP_BUCKETNAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESSKEYID,
        secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY,
    }
    
    const ReactS3Client = new S3(config);
    function getRandomNum() {
        return Math.floor(Math.random() * 100000).toString()
    }

    async function uploadHandler(e) {
        e.preventDefault()
        setError("Loading...")
        const file = e.target.files[0]
        let fileName = e.target.files[0].name
        const fileType = fileName.slice(fileName.lastIndexOf("."), e.target.files[0].name.length)
        fileName = fileName.slice(0,fileName.lastIndexOf("."))
        const randomNum = getRandomNum()
        const newFileName = fileName + randomNum + fileType;
        if(fileType.toUpperCase() === ".PNG" || fileType.toUpperCase() === ".JPG" || fileType.toUpperCase() === ".JPEG") {
            
            setLoading(true)
            ReactS3Client
            .uploadFile(file, newFileName)
            .then(data => {
                console.log(data.key)
                setForm({ ...form, "images": [...form.images, data.key] })
                setLoading(false)
                setError("")
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError("")
            })
        } else {
            return setError("Wrong File Type")
        }

    }

    async function handleRemove(e) {
        e.preventDefault()
        ReactS3Client
        .deleteFile(e.target.name)
        .then(response=> {
            if(response.ok === true) {
                setForm({ ...form, "images": form.images.filter((image, idx) => image !==e.target.name) })
            }
        })
        .catch(err => console.error(err))
    }
    const display = form.images.map((image,idx) => { 
        return <span key={idx}><img src={`https://aiyapetstudios.s3.amazonaws.com/${image}`} alt="test" className="img-display"/> 
        <button onClick={handleRemove} name={image}>x</button> </span>
    })
    return (
        <>
            <span><input type="file" onChange={uploadHandler}></input>{error}</span>
            <div className="under-options">{display}
            {loading ? "loading..." : ""}
            </div>
        </>
    )


}