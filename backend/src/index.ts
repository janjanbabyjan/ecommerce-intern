import { AppDataSource } from "./data-source"
import { UserAddress } from "./entity/UserAddress"
import { Product } from "./entity/Product"

const express = require('express')
const cors = require('cors');

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,POST',          // Allow only GET and POST requests
    allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
};

// Enable CORS with custom options
app.use(cors(corsOptions));

AppDataSource.initialize().then(async () => {


    app.get('/index', async (req, res) => {
        const product = await AppDataSource.manager.createQueryBuilder(Product, 'pd')
            .leftJoinAndSelect('pd.cagetogory', 'category')
            .select([
                'product.pid',
                'product.pname',
                'category.cname',
                'product.price'
            ])
            .getRawMany();

        res.json(Product);
    });


    app.get('/useradd', async (req, res) => {
        const userAddress = await AppDataSource.manager.find(UserAddress)
        res.json(userAddress)
    })


    // app.post('/useradd', async (req, res) => {
    //     console.log("test log", req.body)

    //     const address = new UserAddress();
    //     address.city = 'New York';
    //     address.country = 'USA';
    //     address.postal_code = 10001;

    //     // Create a new User
    //     const user = new Users();
    //     user.fname = "meow";
    //     user.lname = "maw";
    //     user.username = "eiei";
    //     user.email = "meowmaw@gmail.com";
    //     user.password = '184488';
    //     user.phone = '0883223332';

    //     user.userAddress = address;
    //     console.log("user", user);
    //     const users = await AppDataSource.manager.save(user)
    //     res.json(users)

    // })

    app.get('/product', async (req, res) => {
        const product = await AppDataSource.manager.find(Product)
        res.json(product)
    })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})
