const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('User', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
  }, {
    underscore: true,
  });

  return Book;
};

module.exports = Book;
