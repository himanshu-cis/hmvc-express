const connection = require('../connection'),
    { Role, User } = require('../constants/labels')

connection.model(Role, {
    id: {
        type: 'uuid',
        primary: true
    },
    title: 'string',
    description: 'string',
    // user:{
    //     type: "relationship",
    //     target: User,
    //     relationship: "USER",
    //     direction: "out",
    //     properties: {
    //         name: "string"
    //     }
    // }
});

module.exports = connection.model(Role);