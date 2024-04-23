import { log } from "console";
import { pid } from "process";
import { UserAddress } from "./entity/UserAddress";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { AppDataSource } = require('./data-source');
const { Users } = require('./entity/Users');
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
    origin: 'http://localhost:4200'
}));

AppDataSource.initialize().then(async () => {


    app.get('/index', async (req, res) => {
        const product = await AppDataSource.manager.find(Product);
        res.json(product);
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
                'product.pdetails',
                'category.cname',
                'product.price',
                'product_img',
            ])
            .getRawOne();
        res.json(product);
    });

    // app.get('/account', async (req, res) => {
    //     const users = await AppDataSource.manager.find(Users);
    //     res.json(users);
    // });

    // app.get('/account', async (req, res) => {
    //     const users = await AppDataSource.manager
    //         .createQueryBuilder(Users, 'user')
    //         .innerJoinAndSelect('user.userAddress', 'userAddress')
    //         .select([
    //             'users.userid',
    //             'users.fname',
    //             'users.lname',
    //             'users.username',
    //             'users.email',
    //             'users.password',
    //             'users.phone',
    //             'useraddress.city',
    //             'useraddress.country',
    //             'useraddress.postalcode'
    //         ])
    //         .getRawOne();
    //     res.json(users);
    // });
    app.get('/account', async (req, res) => {
        const users = await AppDataSource.manager
            .getRepository(Users)
            .find({ relations: ['userAddress'] });
        res.json(users);
    });
    

});

app.listen(3000, () => {
    console.log('Server started on port 3000.');
});
