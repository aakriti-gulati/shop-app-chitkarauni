const {Product} = require('./models/products');



const products = [
    {
        name: 'Iphone 11',
        price: 100000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60' 
    },
    {
        name: 'iPad',
        price: 100000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://media.istockphoto.com/photos/a-woman-holding-and-pointing-finger-at-digital-tablet-with-blank-picture-id1285894079?b=1&k=20&m=1285894079&s=170667a&w=0&h=aVjGnU94vBSGS9oV7X-z5hl1LFtul-Al03iI410b10Y=' 
    },
    {
        name: 'MacBook',
        price: 100000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
    },
    {
        name: 'Drones',
        price: 10000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://media.istockphoto.com/photos/drone-white-cloudy-dusk-sky-picture-id492683865?b=1&k=20&m=492683865&s=170667a&w=0&h=PtECbEZJ1Yxq0h_pGUzGZnGxnkPENqz5X8ZMcNiKst8=' 
    },
    {
        name: 'Sports Shoes',
        price: 1000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=' 
    },
    {
        name: 'Nike Shoes',
        price: 10000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc=' 
    },
    {
        name: 'Jeans',
        price: 1000,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur enim beatae natus ducimus quasi impedit eius veritatis nam voluptate deleniti cupiditate quis officia commodi dolorum, facere doloribus quod neque?',
        img: 'https://media.istockphoto.com/photos/denim-lets-get-back-to-basics-picture-id1014074006?b=1&k=20&m=1014074006&s=170667a&w=0&h=Es0zR7aD_IGIRDX8mcJhVDwvihcPhmo9PfN91ZLe0yM=' 
    }

]

const seedDB = async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');
}

module.exports = seedDB;
