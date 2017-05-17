module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    member: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultNull: null,
      unique: true,
      field: 'Member'
    }
  }, {
    tableName: 'suppliers',
    timestamps: false,
    freezeTableName: true
  })
};
