export GO111MODULE := off

DBNAME:=midterm
DATASOURCE:=root:password@tcp(127.0.0.1:3306)/$(DBNAME)

DOCKER_COMPOSE_YAML    := docker-compose.yml
DOCKER_COMPOSE         := $(shell pwd)/bin/docker-compose
DOCKER_COMPOSE_CMD     := docker-compose

PASS                   := password

migrate/up:
	$(DOCKER_COMPOSE_CMD) run --rm app bash -c "sql-migrate up"

migrate/new:
	$(DOCKER_COMPOSE_CMD) run --rm app bash -c "sql-migrate new $(NAME)"

db/reset:
	$(DOCKER_COMPOSE_CMD) exec mysql mysql -u root -p$(PASS) -h 0.0.0.0 -e "DROP DATABASE midterm; CREATE DATABASE midterm;"
