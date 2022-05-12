const fs = require('fs');

const createAuthUrl = (sfdxUrl) => {
    try {
        fs.writeFileSync('bin/sfdx-url.json', `"{ "sfdxAuthUrl": "${sfdxUrl}" }"`, 'utf-8');
        console.log('SFDX auth url ready');
    } catch (err) {
        console.error(err);
    }
}

function init() {
    const args = process.argv.slice(2);
    if (args.length > 0) {
        createAuthUrl(args[0]);
    } else {
        console.error('Required arg missing');
    }
}

init();