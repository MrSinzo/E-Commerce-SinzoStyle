const router = require("express").Router();
const { up } = require("inquirer/lib/utils/readline");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: Product,
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where : {
      id: req.params.id
    },
// be sure to include its associated Product data
    include: Product // is this correct?
  }).then((tagData) => {
    res.json(tagData);
  });
  
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create ({
    tag_name: req.body.tag_name,
  })
  .then ((newTag) => {
    res.json(newTag)
  })
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name,
  },
  {
    where: {
      id: req.params.id
    }
  }
  ) .then((updatedTag) => {
    res.json(updatedTag)
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
}) .then ((deletedTag) => {
  res.json(deletedTag);
})
.catch((err) => res.json(err));
});

module.exports = router;
