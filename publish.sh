mkdir tmp
mv dist/manifest.json tmp/manifest.json
jq 'del(.key)' tmp/manifest.json > dist/manifest.json
zip -r dist.zip dist/
mv tmp/manifest.json dist/manifest.json
