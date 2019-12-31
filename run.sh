# Run this script once only

# pull docker image
docker pull neo4j:enterprise

# run image
docker run --name neo4j-instance --publish=7474:7474 --publish=7687:7687 --env=NEO4J_ACCEPT_LICENSE_AGREEMENT=yes --volume=$HOME/neo4j/data:/data --volume=$HOME/neo4j/logs:/logs neo4j:enterprise
