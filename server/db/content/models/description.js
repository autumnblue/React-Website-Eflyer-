module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Description', {
    partNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'partnum'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description'
    }
  }, {
    tableName: 'description',
    timestamps: false,
    freezeTableName: true
  });
};
