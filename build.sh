#!/bin/bash

docker build -t osirisguitar/botus-twitter:$1 .
docker push osirisguitar/botus-twitter:$1
