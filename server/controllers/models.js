const Model = require('../models').Model;
const Order = require('../models').Order;
const searchQuery = require('./searchQuery.js').search;

module.exports = {
  create(req, res) {
    return Model
      .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
        image: req.body.image,
        categoryId: req.params.categoryId,
        vendorName: req.body.vendorName
      })
      .then(model => res.status(201).send(model))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Model
      .all({
        include: [{
          model: Order,
          as: 'orders'
        }]
        })
      .then(models => {
        if  (!Object.keys(req.query).length) {
          return res.status(200).send(models);
        } else {
          return res.status(200).send(models.filter(searchQuery(req.query)))
        }
      })
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Model
      .findById(req.params.modelId)
      .then(model => {
        if (!model) {
          return res.status(404).send({
            message: 'Model Not Found',
          });
        }
        return res.status(200).send(model);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res, next) {
    return Model
      .update(
        {amount: req.body.amount},
        {returning: true, where: {id: req.params.modelId} }
      )
      .then(([ rowsUpdate, [updatedModel] ]) => {
        res.json(updatedModel)
      })
      .catch(next);
  }
}
