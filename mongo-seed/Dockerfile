FROM mongo

COPY test.json /test.json
CMD mongoimport --host mongodb --db test --collection tests --type json --drop --file /test.json --jsonArray