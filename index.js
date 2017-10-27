const Promise = require('bluebird');

const fs = Promise.promisifyAll(require('fs'));


/**
 * @module json
 */


const json = {
	/**
	 * Parse JSON-list
	 * @alias module:json
	 * @param {!string} content
	 * @param {?boolean} strict - Strict mode, only the list is allowed
	 * @returns {Array.<*>}
	 */
	parseList(content, strict = false) {
		try {
			if (strict) {
				throw new Error('JSON parsing is not allowed in strict mode');
			}

			const data = JSON.parse(content);

			if (! (data instanceof Array)) {
				throw new Error('Data is not an Array');
			}

			return data;
		} catch (err) {
			return content.split('\n').filter(line => line).map(JSON.parse);
		}
	},


	/**
	 * Reads a file with JSON and returns an object
	 * @alias module:json
	 * @param {!string} path
	 * @returns {*}
	 */
	readSync(path) {
		const content = fs.readFileSync(path, {
			encoding: 'utf8',
		});

		return JSON.parse(content);
	},

	/**
	 * Reads a file with JSON and returns an object
	 * @alias module:json
	 * @param {!string} path
	 * @returns {Promise.<*>}
	 */
	async readAsync(path) {
		const content = await fs.readFileAsync(path, {
			encoding: 'utf8',
		});

		return JSON.parse(content);
	},


	/**
	 * Reads a file with JSON-list or JSON (if not strict) and returns an object
	 * @alias module:json
	 * @param {!string} path
	 * @param {?boolean} strict - Strict mode, only the list is allowed
	 * @returns {Array.<*>}
	 */
	readListSync(path, strict = false) {
		const content = fs.readFileSync(path, {
			encoding: 'utf8',
		});

		return json.parseList(content, strict);
	},

	/**
	 * Reads a file with JSON-list or JSON (if not strict) and returns an object
	 * @alias module:json
	 * @param {!string} path
	 * @param {?boolean} strict - Strict mode, only the list is allowed
	 * @returns {Promise.<Array.<*>>}
	 */
	async readListAsync(path, strict) {
		const content = await fs.readFileAsync(path, {
			encoding: 'utf8',
		});

		return json.parseList(content, strict);
	},


	/**
	 * Writes data to JSON file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!*} data
	 */
	writeSync(path, data) {
		const content = JSON.stringify(data);

		fs.writeFileSync(path, content);
	},

	/**
	 * Writes data to JSON file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!*} data
	 * @returns {Promise}
	 */
	async writeAsync(path, data) {
		const content = JSON.stringify(data);

		await fs.writeFileAsync(path, content);
	},


	/**
	 * Writes Array to JSON-list file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!Array.<*>} data
	 */
	writeListSync(path, data) {
		const content = `${data.map(item => JSON.stringify(item)).join('\n')}\n`;

		fs.writeFileSync(path, content);
	},

	/**
	 * Writes Array to JSON-list file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!Array.<*>} data
	 * @returns {Promise}
	 */
	async writeListAsync(path, data) {
		const content = `${data.map(item => JSON.stringify(item)).join('\n')}\n`;

		await fs.writeFileAsync(path, content);
	},


	/**
	 * Appends data to JSON-list file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!*} data
	 */
	appendListSync(path, data) {
		const content = `${JSON.stringify(data)}\n`;

		fs.appendFileSync(path, content);
	},

	/**
	 * Appends data to JSON-list file
	 * @alias module:json
	 * @param {!string} path
	 * @param {!*} data
	 * @returns {Promise}
	 */
	async appendListAsync(path, data) {
		const content = `${JSON.stringify(data)}\n`;

		await fs.appendFileAsync(path, content);
	},
};


module.exports = json;
