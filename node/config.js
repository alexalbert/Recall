module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'aurelia_token',
  MONGO_URI: process.env.MONGO_URI || 'localhost:27017/recall',
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'Facebook Client Secret',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'Foursquare Client Secret',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'wv_cdSxZu7h81cnc9140Te52',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'GitHub Client Secret',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'LinkedIn Client Secret',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'Windows Live Secret',
  TWITTER_KEY: process.env.TWITTER_KEY || 'Twitter Consumer Key',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'Twitter Consumer Secret',
  TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'Twitter Callback URL',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'Yahoo Client Secret',
  DB: process.env.DB || 'nedb',
  NEDB_USER_FILE: process.env.NEDB_USER_FILE || '/tmp/users.nedb',
  NEDB_NOTES_FILE: process.env.NEDB_NOTES_FILE || '/tmp/notes.nedb'
};
