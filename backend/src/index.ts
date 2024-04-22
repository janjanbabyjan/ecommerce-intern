import { pid } from "process";
import { Users } from "./entity/Users";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { AppDataSource } = require('./data-source');
const { UserAddress } = require('./entity/UserAddress');
const { Product } = require('./entity/Product');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

app.use(cors({
    origin: 'http://localhost:4200' // Replace with your client-side origin
}));

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

    // app.get('/useradd', async (req, res) => {
    //     const userAddress = await AppDataSource.manager.find(UserAddress);
    //     res.json(userAddress);
    // });

    app.get('/users', async (req, res) => {
        const users = await AppDataSource.manager.find(Users);
        res.json(users);
    });

    app.get('/product/:pid', async (req, res) => {
        const pid = req.params.pid;
        const product = await AppDataSource.manager
            .createQueryBuilder(Product, 'product')
            .leftJoinAndSelect('product.category', 'category')
            .where('product.pid = :pid', { pid })
            .select([
                'product.pid',
                'product.pname',
                'category.cname', // Include the category name
                'product.price',
            ])
            .getRawOne();
        res.json(product);
    });

    // app.get('/account', async (req, res) => {
    //     const users = await AppDataSource.manager
    //         .createQueryBuilder(Users, 'user')
    //         .leftJoinAndSelect('user.userAddress', 'userAddress')
    //         .select([
    //             'user.userid',
    //             'user.fname',
    //             'user.lname',
    //             'user.email',
    //             'user.password',
    //             'user.phone',
    //             'user.user_img',
    //             'userAddress.address_id'
    //         ])
    //         .getRawOne();
    //     res.json(users);
    // });
    
});

app.listen(3000, () => {
    console.log('Server started on port 3000.');
});
