import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                });
                return {
                    ...product._doc,
                    stat
                }
            })
        );
        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCustomers = async (req, res) => {
    try {
        // In find method, If we need to get data without some field values,
        // We can achieve this .select("-the field name") 
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTransactions = async (req, res) => {
    try {
        // Sort should look like this: {"field": "userId", "sort": "desc"}
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort == "asc" ? 1 : -1),
            }
            return sortFormatted;
        }

        const sortFormatted = sort ? generateSort() : {};

        const transactions = await Transaction.find({
            // $or allows you to have multiple queries for fetch data
            $or: [
                //     const search = "apple";
                // const query = { userId: { $regex: new RegExp(search, "i") } };
                // This will match documents where the "userId" field contains "apple" 
                // in any case, such as "apple123", "bigApple", or "APPLEseeds".

                { cost: { $regex: new RegExp(search, "i") } },
                { userId: { $regex: new RegExp(search, "i") } },
            ]
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize);

        const total = await Transaction.countDocuments({
            // If you simply need a case-insensitive search and don't require dynamic 
            // pattern generation, the name: {$regex: search, $options: "i"} syntax can be 
            // used for a more concise query condition.
            name: { $regex: search, $options: 'i' }
        })
        res.status(200).json({
            transactions,
            total
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
}