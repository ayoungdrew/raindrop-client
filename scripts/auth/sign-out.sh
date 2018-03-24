#!/bin/bash

# TOKEN="" sh scripts/auth/sign-out.sh

curl "https://raindrop-api.herokuapp.com/sign-out/${ID}" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
