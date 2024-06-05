include .env

docker-build:
	docker build -t ${DOCKER_IMAGE_NAME} .

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f ${DOCKER_CONTAINER_NAME} --tail=50

clean:
	rm -rf dist/