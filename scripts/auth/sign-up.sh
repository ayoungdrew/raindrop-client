#!/bin/bash

# EMAIL="" PASSWORD="" PASSWORD_CONFIRMATION="" sh scripts/auth/sign-up.sh

curl "https://raindrop-api.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
  }
}'

echo
