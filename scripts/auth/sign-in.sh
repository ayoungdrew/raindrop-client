#!/bin/bash

# EMAIL="" PASSWORD="" sh scripts/auth/sign-in.sh

curl "https://raindrop-api.herokuapp.com/sign-in" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
