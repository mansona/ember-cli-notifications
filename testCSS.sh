#!/bin/sh
VAR=$((npm run test-css > /dev/null) 2>&1)

if [ -n "$VAR" ]
then
  echo $VAR;
  exit 1
else
  exit 0
fi
