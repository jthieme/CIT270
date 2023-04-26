@echo off
echo "logging in"
curl -v -d "@login.json" POST -H "Content-Type:application/json" https://dev.stedi.me/login
curl https://dev.stedi.me/validate/d2b1ecaa-c3f3-4d42-ae2f-825a814b06ea