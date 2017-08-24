'use strict';


const fs = require('fs');


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

    readListSync(path) {
        let text = fs.readFileSync(path, {
            encoding: 'utf8',
        });

        return json.parseList(text);
    },


    writeSync(path, data) {
        let text = JSON.stringify(data);

        fs.writeFileSync(path, text);
    },
};


module.exports = json;