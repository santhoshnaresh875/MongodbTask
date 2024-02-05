// //------------------ Questions

/* 1. Find all the information about each Product*/

db.Product.find({}, { _id: 0 });

/* 2. Find the product price which are between 400 to 800*/

db.Product.find({$and: [{ product_price: { $gte: 400 } }, { product_price: { $lte: 800 } }],});
db.Product.countDocuments({$and: [{ product_price: { $gte: 400 } },{ product_price: { $lte: 600 } }]});
//count-3


/* 3.Find the product price which are not between 400 to 600*/

db.Product.find({$or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }],});
db.Product.countDocuments({$or: [{ product_price: { $lt: 400 } },{ product_price: { $gt: 600 } }]})
//count-22
  
/* 4. List the four product which are greater than equal 500 in price */

db.Product.find({ product_price: { $gte: 500 } }, { _id: 0 });
/*or*/
/* 4 .List the four product which are greater than 500 in price */

db.Product.find({ product_price: { $gt: 500 } }, { _id: 0 });

/* 5 .Find the product name and product material of each Product */

db.Product.find({}, { _id: 0, product_name: 1, product_material: 1 });

/* 6 .Find the product with a row id of 10 */

db.Product.find({ id: "10" });

/* 7. Find only the product name and product material */

db.Product.find({ id: "10" },{ product_name: 1, product_material: 1, _id: 0 });

/* 8. Find all Product which contain the value of soft in product material */

db.Product.find({ product_material: "Soft" });

/* 9. Find Product which contain product color indigo  and product price 492.00 */

db.Product.find({ $or: [{ product_price: 492 },{ product_color: "indigo" }]});

/* 10 .Delete the Product which product price value are same */

db.Product.deleteMany({ "product_price": { $eq: db.products.distinct("product_price") } })