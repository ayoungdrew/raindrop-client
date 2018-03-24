#!/bin/bash

# ID="" TOKEN="" OLD_PASSWORD="" NEW_PASSWORD="" sh scripts/auth/change-password.sh

curl "https://raindrop-api.herokuapp.com/change-password/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "passwords": {
    "old": "'"${OLD_PASSWORD}"'",
    "new": "'"${NEW_PASSWORD}"'"
  }
}'

echo
