var config = {
	server: {
		dev: {
            server: {
            	// Array with all the static folders to serve
                baseDir: [
                    './site/'
                ],
                // List with the url and folders to serve, like node_modules or bower folder
                // i.e: route /node_modules url to node_modules folder
                routes: {
                    '/node_modules': 'node_modules'
                }
            },
            port: 3002,
            logLevel: 'info', // Three options, debug, info or silent
            logFileChanges: true, // Log if a file change
        }
	}
};

module.exports = config;