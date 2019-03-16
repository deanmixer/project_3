// module.exports = function(sequelize, DataTypes) {
//   const pupps = sequelize.define('pupps', {
//     id: {
//       type: DataTypes.INTEGER(255),
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     first_name: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       validate: {
//         notEmpty: {
//           args: true,
//           msg: `Please give the user a name.`,
//         },
//       },
//     },
//     last_name: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       validate: {
//         notEmpty: {
//           args: true,
//           msg: `Please give the user a lastName.`,
//         },
//       },
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       validate: {
//         notEmpty: {
//           args: true,
//           msg: `Please enter a valid email.`,
//         },
//       },
//     },
//     puppy_name: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     puppy_gender: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     puppy_breed: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     address: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     zipcode: {
//       type: DataTypes.INTEGER(255),
//       allowNull: false,
//     },
//     puppy_personality: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     puppy_age: {
//       type: DataTypes.INTEGER(255),
//       allowNull: false,
//     },
//     puppy_weight: {
//       type: DataTypes.INTEGER(255),
//       allowNull: true,
//     },
//     img_url: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//     },
//   });
//   return pupps;
// };
