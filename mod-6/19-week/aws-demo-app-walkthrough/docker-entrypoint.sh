#!/bin/sh
set -e

echo "UPGRADING AND SEEDING; if this fails look at the render debugging guide"

flask db upgrade

flask seed all

echo "Upgrade and seeding complete.  Starting the app!"

exec "$@"
