# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://pacific-sierra-23796.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data ''

echo
