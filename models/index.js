// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // is this right?
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {// is this right?
  through: ProductTag,
  foreignKey: 'product_id',// is this right?
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {// is this right?
  through: ProductTag,
  foreignKey: 'tag_id', // is this right?
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
