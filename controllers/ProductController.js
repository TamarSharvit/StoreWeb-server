var ProductModel = require('../models/ProductModel.js');

/**
 * ProductController.js
 *
 * @description :: Server-side logic for managing Products.
 */
module.exports = {

    /**
     * ProductController.list()
     */
    list: function (req, res) {
        ProductModel.find(function (err, Products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }

            return res.json({Products, status:200});
        });
    },

    /**
     * ProductController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }

            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            return res.json(Product);
        });
    },

    /**
     * ProductController.create()
     */
    create: function (req, res) {
        var Product = new ProductModel({
			name : req.body.name,
			image : req.body.image,
			description : req.body.description,
			price : req.body.price,
			category_id : req.body.category_id
        });

        Product.save(function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Product',
                    error: err
                });
            }

            return res.status(201).json(Product);
        });
    },

    /**
     * ProductController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product',
                    error: err
                });
            }

            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            Product.name = req.body.name ? req.body.name : Product.name;
			Product.image = req.body.image ? req.body.image : Product.image;
			Product.description = req.body.description ? req.body.description : Product.description;
			Product.price = req.body.price ? req.body.price : Product.price;
			Product.category_id = req.body.category_id ? req.body.category_id : Product.category_id;
			
            Product.save(function (err, Product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Product.',
                        error: err
                    });
                }

                return res.json(Product);
            });
        });
    },

    /**
     * ProductController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductModel.findByIdAndRemove(id, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Product.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    },
////////////////////////////////////
    getByCaterogy: function(req, res){
        var id = req.params.id;

          ProductModel.findById({category_id:id}, function(err, Product){
            if (err) {
                return res.status(500).json({
                    message: 'Error when search by categoryId.',
                    error: err
                });
            }

            return res.json(Product);
        });
        
    }
};
// //////חיפוש מוצרים לפי קטגוריה
// listByCat:function(req, res){
//     var id = req.params.id;

//         ProductsModel.find({categoryId: id}, function (err, Products) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting Products.',
//                     error: err
//                 });
//             }

//             if (!Products) {
//                 return res.status(404).json({
//                     message: 'No such Products'
//                 });
//             }

//             return res.json(Products);
//         });
// },
