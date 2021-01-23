const WPAPI = require('wpapi');

const wp = new WPAPI({ endpoint: 'http://wp.test/wp-json' });

export default wp;
