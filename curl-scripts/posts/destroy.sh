# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/movies/destroy.sh

curl "https://pacific-sierra-23796.herokuapp.com/posts/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
