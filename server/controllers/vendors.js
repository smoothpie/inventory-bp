const Vendor = require('../models').Vendor;
const searchQuery = require('./searchQuery.js').search;

module.exports = {
  create(req, res) {
    return Vendor
      .create({
        title: req.body.title,
        email: req.body.email
      })
      .then(vendor => res.status(201).send(vendor))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Vendor
      .all()
      .then(vendors => {
        if  (!Object.keys(req.query).length) {
          return res.status(200).send(vendors);
        } else {
          return res.status(200).send(vendors.filter(searchQuery(req.query)))
        }
      })
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Vendor
      .findById(req.params.vendorId)
      .then(vendor => {
        if (!vendor) {
          return res.status(404).send({
            message: 'Vendor Not Found',
          });
        }
        return res.status(200).send(vendor);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res, next) {
    return Vendor
      .update(
        {email: req.body.email},
        {returning: true, where: {id: req.params.vendorId} }
      )
      .then(([ rowsUpdate, [updatedVendor] ]) => {
        res.json(updatedVendor)
      })
      .catch(next);
  }

}
