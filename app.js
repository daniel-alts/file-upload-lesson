const express = require('express');
const multer = require('multer')
const cloudinary = require('./integrations/cloudinary')
const fs = require('fs')


const upload = multer({ dest: 'uploads' })

const port = 4000

const app = express()

app.get('/', (req, res) => {
    console.log('Hello World!, You connected successfully')
    res.send('Hello World!, You connected successfully')
})


app.post('/upload', upload.single('avatar'), async (req, res) => {
    try {
        console.log(req.file)

        const response = await cloudinary.uploader.upload(req.file.path)


        // delete the file after upload
        fs.unlink(req.file.path, () => {
            console.log('file deleted successfully')
        })

        return res.json({
            message: 'successful upload!',
            response
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'failed to upload file'
        })
    }
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
