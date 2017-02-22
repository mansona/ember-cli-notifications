#!/bin/sh
npm run test-css 2> errors.txt > /dev/null

cat errors.txt

if [ -s errors.txt ]
then
  cat errors.txt
  exit 1
else
  exit 0
fi
