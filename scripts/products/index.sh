#!/bin/bash

# sh scripts/products/index.sh

curl "http://localhost:4741/products" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

  echo
