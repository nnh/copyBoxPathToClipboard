#!/bin/sh

echo 'javascript: ' > temp
cat temp copyToClipboard.js | tr -d '\n' | tr -s ' ' > bookmarklet.js
rm temp