var OrderModel = require('../models/OrderModel.js');

/**
 * OrderController.js
 *
 * @description :: Server-side logic for managing Orders.
 */
module.exports = {

    /**
     * OrderController.list()
     */
    list: function (req, res) {
        OrderModel.find(function (err, Orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Order.',
                    error: err
                });
            }

            return res.json(Orders);
        });
    },

    /**
     * OrderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        OrderModel.findOne({_id: id}, function (err, Order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Order.',
                    error: err
                });
            }

            if (!Order) {
                return res.status(404).json({
                    message: 'No such Order'
                });
            }

            return res.json(Order);
        });
    },

    /**
     * OrderController.create()
     */
    create: function (req, res) {
        var Order = new OrderModel({
			products : req.body.OrderItem,
			orderSum : req.body.OrderSum,
			date : req.body.OrderDate,
			user_id : req.body.UserId
        });

        Order.save(function (err, Order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Order',
                    error: err
                });
            }

            return res.status(201).json(Order);
        });
    },

    /**
     * OrderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        OrderModel.findOne({_id: id}, function (err, Order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Order',
                    error: err
                });
            }

            if (!Order) {
                return res.status(404).json({
                    message: 'No such Order'
                });
            }

            Order.products = req.body.products ? req.body.products : Order.products;
			Order.orderSum = req.body.orderSum ? req.body.orderSum : Order.orderSum;
			Order.date = req.body.date ? req.body.date : Order.date;
			Order.user_id = req.body.user_id ? req.body.user_id : Order.user_id;
			
            Order.save(function (err, Order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Order.',
                        error: err
                    });
                }

                return res.json(Order);
            });
        });
    },

    /**
     * OrderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        OrderModel.findByIdAndRemove(id, function (err, Order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Order.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
