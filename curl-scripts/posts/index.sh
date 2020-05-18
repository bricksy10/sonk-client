# Ex: TOKEN=tokengoeshere sh curl-scripts/movies/index.sh

curl "http://localhost:4741/posts" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
