const fs = require('fs');
const clsDir = fs.readdirSync('./force-app/main/default/classes');
const testCls = clsDir.filter((fname) => (fname.endsWith('Test.cls')));
console.log(testCls.map((cls) => cls.replace('.cls', '')).join(','));