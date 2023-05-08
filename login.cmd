@echo off
echo "logging in"
curl --insecure -v -d "@login.json" POST -H "Content-Type:application/json" http://localhost:3000/login
@REM curl -v https://dev.stedi.me/validate/d2b1ecaa-c3f3-4d42-ae2f-825a814b06ea