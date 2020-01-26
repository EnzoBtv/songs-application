#!/bin/sh
# wait-for-postgres.sh

while ! curl http://postgres:5432/ 2>&1 | grep '52'
do
 echo "attempting to connect"
  sleep 1
done

sleep 20
{
    /usr/backend/node_modules/.bin/sequelize db:create && /usr/backend/node_modules/.bin/sequelize db:migrate && /usr/backend/node_modules/.bin/sequelize db:seed:all && node ./src
} || {
    /usr/backend/node_modules/.bin/sequelize db:migrate && /usr/backend/node_modules/.bin/sequelize db:seed:all && node ./src
}
