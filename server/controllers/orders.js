const Order = require('../models').Order;
const searchQuery = require('./searchQuery.js').search;

module.exports = {
  create(req, res) {
    return Order
      .create({
        size: req.body.size,
        modelId: req.body.modelId
      })
      .then(order => res.status(201).send(order))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Order
      .all()
      .then(orders => {
        if  (!Object.keys(req.query).length) {
          return res.status(200).send(orders);
        } else {
          return res.status(200).send(orders.filter(searchQuery(req.query)))
        }
      })
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Order
      .findById(req.params.orderId)
      .then(order => {
        if (!order) {
          return res.status(404).send({
            message: 'Order Not Found',
          });
        }
        return res.status(200).send(order);
      })
      .catch(error => res.status(400).send(error));
  }
}
