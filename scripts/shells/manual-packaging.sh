sfdx force:package:version:create --package "sfcore" --installationkey "booztersfcore12345" -v "bzbox"  -t "v1.2.3" -e "MSG" --codecoverage -w 30
sfdx force:package:version:list -v "bzbox" -p "sfcore" -c 0 --json

# Get SubscriberPackageVersionId from the top most result of the top script
sfdx force:package:version:promote -p "SubscriberPackageVersionId" -v "bzbox" --noprompt