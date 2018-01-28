const Category = require('../models').Category;
const Model = require('../models').Model;
const searchQuery = require('./searchQuery').search;

module.exports = {
  create(req, res) {
    return Category
      .create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
      })
      .then(category => res.status(201).send(category))
      .catch(error => res.status(400).send(error));
  },
  list(req, res, next) {
    return Category
      .all()
      .then(categories => {
        if  (!Object.keys(req.query).length) {
          return res.status(200).send(categories);
        } else {
          return res.status(200).send(categories.filter(searchQuery(req.query)))
        }
      })
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Category
      .findById(req.params.categoryId, {
        include: [{
          model: Model,
          as: 'models',
        }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).send(category);
      })
      .catch(error => res.status(400).send(error));
  }
};
