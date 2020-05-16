# Ex: TOKEN=tokengoeshere sh curl-scripts/movies/index.sh

curl "https://pacific-sierra-23796.herokuapp.com/posts" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
