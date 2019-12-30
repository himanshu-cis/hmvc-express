const connection = require('../database.module/models/user.model');

module.exports.handle = function (config, access = null) {
    // try{ 
    //     connection.model('User').create({
    //         first_name: 'himanshu',
    //         last_name: 'shrivastava'
    //     })
    //     .then(data => {
    //     console.log("TCL: module.exports.handle -> data", data.get('first_name'))
            
    //     });
    // } catch(err) {
    // console.log("TCL: module.exports.handle -> err", err)
        
    // }
    if (!config) {
        return new Error('Something went wrong!');
    } else {
        return async function (req, res, next) {
            next();
        }
    }
}
