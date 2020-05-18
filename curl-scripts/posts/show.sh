# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/movies/show.sh

curl "http://localhost:4741/posts/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
