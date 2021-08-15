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
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '611033215d853cbccb81d1da',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam doloribus qui aliquam ullam veniam, nam non eveniet ipsam saepe inventore, exercitationem id adipisci repellendus ad ipsa consequatur impedit ex excepturi.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1628988530/YelpCamp/s0wtb1kmow0ovbehs6j8.jpg',
                    filename: 'YelpCamp/s0wtb1kmow0ovbehs6j8'
                },
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1628988530/YelpCamp/svn0prxpsmt1revk91vc.jpg',
                    filename: 'YelpCamp/svn0prxpsmt1revk91vc'
                },
                {
                    url: 'https://res.cloudinary.com/dadsgpns5/image/upload/v1628988530/YelpCamp/bc867nuearymezuh1hzb.jpg',
                    filename: 'YelpCamp/bc867nuearymezuh1hzb'
                }
            ]

        })
        await camp.save();
    }
}

seedDB()