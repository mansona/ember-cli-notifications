#!/bin/sh
npm run test-css 2> errors.txt > /dev/null

ls
ls dist
ls dist/assets/

echo wtf!?

cat errors.txt

if [ -s errors.txt ]
then
  cat errors.txt
  exit 1
else
  exit 0
fi
