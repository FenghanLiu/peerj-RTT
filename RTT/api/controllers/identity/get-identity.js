const crypto = require('../../../crypto/keys');

module.exports = {

  friendlyName: 'Generate new identity',

  description: 'Generate new identity',

  fn: async function (inputs, exits) {
    // Generate a key pair
    const keys = await crypto.generateKeys();
    return exits.success(
    { 
        success: true, 
        message: 'The new key pair is generated successfully. Please keep your private key properly',
        publicKey: keys.publicKey, 
        secretKey: keys.secretKey
    });
  }

};
