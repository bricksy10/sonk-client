# Ex: TOKEN=tokengoeshere ID=idgoeshere TITLE=titlegoeshere DIRECTOR=joeshmoe sh curl-scripts/movies/update.sh

curl "https://pacific-sierra-23796.herokuapp.com/posts/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "post":
  }'

  echo
