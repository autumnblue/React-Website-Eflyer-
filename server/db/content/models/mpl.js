module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mpl', {
    partNum: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'partnum'
    },
    supplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'SupplierID'
    },
    subId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'SubID'
    },
    edgeProduct: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'n',
      field: 'edgeproduct'
    },
    disc: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'n',
      field: 'disc'
    }
  }, {
    tableName: 'mpl',
    timestamps: false,
    freezeTableName: true
  });
};
