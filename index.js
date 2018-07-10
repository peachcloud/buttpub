docker network create --driver=overlay web

STACK_NAME=hub docker stack deploy --compose-file ../buttpub/stacks/hub.yml hub
STACK_NAME=pub docker stack deploy --compose-file ../buttpub/stacks/pub.yml pub

PUB_NODE=$(docker service ps pub_peer-server --format "{{.Node}}")
alias pub_sbot="docker-machine ssh $(echo -n $PUB_NODE) docker run -i --rm --init -v pub_ssb:/home/node/.ssb --net pub_ssb -e ssb_host=pub_peer-server buttcloud/buttpub-peer-client"
pub_sbot whoami
