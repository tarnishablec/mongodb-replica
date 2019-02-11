#!/bin/bash
sleep 10 | echo Sleeping
mongo mongodb://rs0-mongo0:27017 replicaSet.js