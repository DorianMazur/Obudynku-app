#!/bin/sh

echo "Starting entrypoint..."

./env.sh

# Hand off to the CMD
# cf https://stackoverflow.com/questions/42857897/execute-a-script-before-cmd
exec "$@"