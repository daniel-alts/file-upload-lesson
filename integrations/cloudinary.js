const cloudinary = require('cloudinary').v2

// ideally this should be stored in your .env file
cloudinary.config({ 
    cloud_name: 'dt40xxwe4', 
    api_key: '992659252339482', 
    api_secret: 'jfRQrcDoOj4S5wmJD6HygtSjcgQ' // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;

