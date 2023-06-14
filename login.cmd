@echo off
echo "logging in"
curl --insecure -v -d "@login.json" POST -H "Content-Type:application/json" https://joshthieme.cit270.com/login