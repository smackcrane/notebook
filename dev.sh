
# throw errors
set -euo pipefail

# build
cd /home/sander/notebook
npm run build

# start server silently in background
cd dist
python3 -m http.server 8080 > /dev/null 2>&1 &
SERVER_PID=$!
cd ..

# kill server on exit
trap "kill $SERVER_PID" EXIT

# watch files and rebuild
inotifywait -m -r -e modify --exclude '(^|/)(dist|out|node_modules|\.git|\.github)(/|$)' . |
while read -r watchfile event eventfile;
do
    npm run build
done

