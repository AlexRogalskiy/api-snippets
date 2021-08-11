const AccessToken = require('twilio').jwt.AccessToken;
const SyncGrant = AccessToken.SyncGrant;

// Used when generating any kind of tokens
// To set up environmental variables, see http://twil.io/secure
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

// Used specifically for creating Sync tokens
const outgoingApplicationSid = 'APxxxxxxxxxxxxx';
const identity = 'user';

// Create a "grant" which enables a client to use Sync as a given user
const syncGrant = new SyncGrant({
  outgoingApplicationSid: outgoingApplicationSid,
  incomingAllow: true, // Optional: add to allow incoming calls
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(
  twilioAccountSid,
  twilioApiKey,
  twilioApiSecret,
  { identity: identity }
);
token.addGrant(syncGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());
