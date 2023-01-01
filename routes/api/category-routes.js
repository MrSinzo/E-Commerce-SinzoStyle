const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: Product // is this correct?
  }).then((catData) =>{
    res.json(catData)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where : {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: Product // is this correct?
  }).then((catData) => {
    res.json(catData);
  });
  
});

router.post('/', (req, res) => {
  // create a new category
  Category.create ({
    category_name: req.body.category_name,
  })
  .then ((newCategory) => {
    res.json(newCategory)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id,
    },
  }
  ).then ((updatedCat) => {
    res.json(updatedCat)
  })
  .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where: {
        id: req.params.id
      },
  }) .then ((deletedCat) => {
    res.json(deletedCat);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
