module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        passowrd:DataTypes.STRING
});
    return User;


}