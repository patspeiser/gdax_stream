const gdax = require('gdax');
const websocketUrl = 'wss://ws-feed.gdax.com';
const chalk = require('chalk');

this.prods = [
	'BTC-USD',
	'LTC-USD',
	'LTC-BTC',
	'BCH-USD',
	'BCH-BTC',
	'ETH-USD',
	'ETH-BTC'
];

this.GdaxWebsocket = new gdax.WebsocketClient(
	this.prods,
	websocketUrl,
	null,
	['full']
	);
this.GdaxWebsocket.on('message', data => {
	if(data.product_id === 'BTC-USD'){
		console.log(chalk.yellow(JSON.stringify(data)));
	} else if (data.product_id === 'LTC-USD') {
		console.log(chalk.green(JSON.stringify(data)))
	} else if (data.product_id === 'LTC-BTC'){
		console.log(chalk.greenBright(JSON.stringify(data)))
	} else if (data.product_id === 'BCH-USD'){
		console.log(chalk.magenta(JSON.stringify(data)))
	} else if (data.product_id === 'BCH-BTC'){
		console.log(chalk.magentaBright(JSON.stringify(data)))
	} else if (data.product_id === 'ETH-USD'){
		console.log(chalk.blue(JSON.stringify(data)))
	} else if (data.product_id === 'ETH-BTC'){
		console.log(chalk.blueBright(JSON.stringify(data)))
	} else {
		console.log(chalk.gray(JSON.stringify(data));
	};
});