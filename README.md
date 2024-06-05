# vue3-boilerplate

A Vue 3 boilerplate with Vuestic UI and Bootstrap for minimalist and essential UI/UX.

This Vue 3 project has the fllowing utilities:

- Vue 3
- Vuestic UI
- Bootstrap
- Material Design Icons
- Google Fonts
- TypeScript
- ESLint
- Prettier
- GitHub Pull Request template
- Husky Pre-Commit
- Makefile
- Docker

## Prerequisites

The following dependencies are required:

- Node ^20.10.0
- NPM ^10.2.3

The following dependencies are optional, but are still very convenient:

- Docker ^25.0.5
- Docker Compose ^2.24.3
- GNU Make ^3.81

## Configuration

This service can be configured by a .env file. Run the following command:

```bash
cp env_example .env
```

to copy the env_example content into the .env file, then modify the environment variables.

The env_example has the following env vars:

- `DOCKER_CONTAINER_NAME`: the docker container name. For example, `vue3-boilerplate`. It's a required env var only to run the dockerized app.
- `DOCKER_IMAGE_NAME`: the docker image name. For example, `vue3-boilerplate`. It's a required env var only to run the dockerized app.
- `DOCKER_PORT`: the listening port of the docker container. For example, `8080`, or `8888`. It's a required env var only to run the dockerized app.

## Preparation

This service uses an Husky pre-commit. The pre-commit executes a code linting and code formatting before each commit.

Prepare the `./husky/` folder with the following command:

```bash
npm run husky:prepare
```

Sometimes, you might even need to set the Husky Pre-Commit manually... don't worry, this is the right command:

```bash
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

## Installation

```bash
npm install
# or
npm i
```

## Running the browser app

```bash
npm run dev
```

## Running the dockerized app

Build the docker image with the following command:

```bash
docker build -t ${DOCKER_IMAGE_NAME} .
# or
make docker-build
```

Then, run the dockerized app:

```bash
docker-compose up -d
# or
make docker-up
```

## Stopping the dockerized service

Stop the dockerized service:

```bash
docker-compose down
# or
make docker-down
```

## Inspect the dockerized service

See container logs:

```bash
docker-compose logs -f ${DOCKER_CONTAINER_NAME} --tail=50
# or
make docker-logs
```

## Code Linting

```bash
npm run lint
```

## Code Formatting

```bash
npm run format
```

## Building

```bash
npm run build
```

## Cleaning

To clear build files, run one of the following commands:

```bash
# for Unix-based (like Linux Ubuntu, or Mac OS) OS
rm -rf dist/

# for Windows
rm -r dist/
```

## Links

- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Vuestic UI](https://ui.vuestic.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Material Design Icons](https://pictogrammers.com/library/mdi/)
- [Google Fonts](https://fonts.google.com/)

## Contacts

Don't hesitate to contact me for any info, bugs, or improvements! Below are my contacts:

- [GitHub](https://github.com/chralex00)
- [Email](mailto:christian.alessandro.atzeni.00@outlook.com)
