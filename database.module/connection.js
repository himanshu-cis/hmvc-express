var Neode = require('neode');

instance = new Neode.fromEnv();
instance.setEnterprise(true);

module.exports = instance