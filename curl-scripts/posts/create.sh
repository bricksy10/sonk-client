# Ex: TOKEN=tokengoeshere TITLE=titlegoeshere DIRECTOR=joeshmoe sh curl-scripts/movies/create.sh

curl "https://pacific-sierra-23796.herokuapp.com/posts" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "post":
  }'

echo
