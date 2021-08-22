// copy from app.js to connect to Mongoose
const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

//removing everything from in the database
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '611033215d853cbccb81d1da',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam doloribus qui aliquam ullam veniam, nam non eveniet ipsam saepe inventore, exercitationem id adipisci repellendus ad ipsa consequatur impedit ex excepturi.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1629674356/YelpCamp/c3jokdy0x2sdq9pmtvmf.jpg',
                    filename: 'YelpCamp/c3jokdy0x2sdq9pmtvmf'
                },
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1629674356/YelpCamp/wzi4wibl7my5ydb9dczi.jpg',
                    filename: 'YelpCamp/wzi4wibl7my5ydb9dczi'
                },
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1629674356/YelpCamp/okyp3v4x2gbxsqrbqo6f.jpg',
                    filename: 'YelpCamp/okyp3v4x2gbxsqrbqo6f'
                }
            ]

        })
        await camp.save();
    }
}

seedDB()