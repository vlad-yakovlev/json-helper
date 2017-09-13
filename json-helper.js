'use strict';


const fs = require('fs-extra-promise');


const json = {
    parseList(text) {
        try {
            return JSON.parse(text);
        } catch (err) {
            return text.split('\n').filter(site => site).map(site => JSON.parse(site))
        }
    },


    
    readSync(path) {
        let text = fs.readFileSync(path, {
            encoding: 'utf8',
        });

        return JSON.parse(text);
    },
    
    async readAsync(path) {
	    let text = await fs.readFileAsync(path, {
		    encoding: 'utf8',
	    });
	
	    return JSON.parse(text);
    },
	
	
	readListSync(path) {
		let text = fs.readFileSync(path, {
			encoding: 'utf8',
		});
		
		return json.parseList(text);
	},
	
	async readListAsync(path) {
		let text = await fs.readFileSync(path, {
			encoding: 'utf8',
		});
		
		return json.parseList(text);
	},
	
	
	
	writeSync(path, data) {
		let text = JSON.stringify(data);
		
		fs.writeFileSync(path, text);
	},
	
	async writeAsync(path, data) {
		let text = JSON.stringify(data);
		
		await fs.writeFileAsync(path, text);
	},
	
	
	writeListSync(path, data) {
		let text = data.map(item => JSON.stringify(item)).join('\n') + '\n';
		
		fs.writeFileSync(path, text);
	},
	
	async writeListSync(path, data) {
		let text = data.map(item => JSON.stringify(item)).join('\n') + '\n';
		
		await fs.writeFileSync(path, text);
	},
	
	
	appendListSync(path, data) {
		let text = JSON.stringify(data) + '\n';
		
		fs.appendFileSync(path, text);
	},
	
	async appendListSync(path, data) {
		let text = JSON.stringify(data) + '\n';
		
		await fs.appendFileAsync(path, text);
	},
};


module.exports = json;