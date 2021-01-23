const WPAPI = require('wpapi');

const wp = new WPAPI({ endpoint: process.env.WP_ENDPOINT });

export default wp;
