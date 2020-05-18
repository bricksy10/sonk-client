# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
curl "https://pacific-sierra-23796.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
