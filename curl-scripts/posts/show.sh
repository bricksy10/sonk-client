# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/movies/show.sh

curl "https://pacific-sierra-23796.herokuapp.com/posts/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
