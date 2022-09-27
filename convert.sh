#!/bin/sh

echo 'javascript: ' > temp
cat temp copyToClipboard.js | tr -d '\n' | sed -e 's|\s{2, }|\s|' | > bookmarklet.js
rm temp