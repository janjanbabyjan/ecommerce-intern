import { pid } from "process";

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

    app.get('/product', async (req, res) => {
        const product = await AppDataSource.manager.find(Product);
        res.json(product);
    });

    app.get('/product/:pid', async (req, res) => {
        const product = await AppDataSource.manager.find(pid);
        res.json(product);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000.');
});
