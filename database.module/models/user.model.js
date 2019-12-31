const connection = require('../connection'),
    { User, Role } = require('../constants/labels');

connection.model(User, {
    id: {
        type: 'uuid',
        primary: true
    },
    first_name: 'string',
    last_name: 'string',
    phone: 'number',
    profile_pic: 'string',
    role: {
        type: "relationship",
        target: Role,
        relationship: "ROLE",
        direction: "in",
        properties: {
            name: "string"
        }
    }
});


module.exports = connection.model(User);