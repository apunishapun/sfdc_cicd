const versions = require('../../../bin/versions.json');
if (versions && versions.result && versions.result.length) {
    const { result } = versions;
    const version = result[result.length - 1];
    console.log(version.SubscriberPackageVersionId);
} else {
    throw new Error('Invalid versions: ' + versions);
}