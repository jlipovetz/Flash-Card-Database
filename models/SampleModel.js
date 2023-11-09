const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SampleModel extends Model { }

// SampleModel.init(
//   {
//     first_name: {
//       type: DataTypes.STRING
//     },

//     last_name: {
//       type: DataTypes.STRING
//     }

//   },

//   {
//     sequelize,
//     timestamps: true,
//     underscored: true,
//     modelName: "SampleModel"
//   }
// );

module.exports = SampleModel;
