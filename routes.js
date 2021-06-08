const routes = require('next-routes')();

// this colon shows that this part of the url is going to be a wild card 
routes.add('/campaigns/new', '/campaigns/new')
routes.add('/campaigns/:address', '/campaigns/show')
routes.add('/campaigns/:address/requests', '/campaigns/requests/index')
routes.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;