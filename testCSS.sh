#!/bin/sh
npm run test-css 2> errors.txt > /dev/null
if [ -s errors.txt ]
then
  exit 1
else
  exit 0
fi
