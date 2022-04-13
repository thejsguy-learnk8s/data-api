# learn-k8s-data-api

Prerequisites

- Node.JS
- NPM 
- Yarn
- Docker
- Kubernetes
- Express.JS

## Setup

### NVM 

This project is built using nvm.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Setup

1. Install correct node.js vesion
```bash 
nvm install
````
2. Install yarn
```bash
npm i -g yarn
```
3. Install dependencies
```bash
yarn install
```
4. Start app
```bash
yarn start
```

### Docker

Install docker

```bash
brew cask install docker
```

### Kubernetes

Install kubernetes

```bash
brew install kubernetes
```

Setup minikube

### Deploy to kubernetes

Point local docker deamon to minikube

```bash
eval $(minikube docker-env)
```

Build Docker image using following command
```bash
docker build . -t thejsguy/learn-k8s-data-api
```

Deploy above image to kubernets
```bash
kubectl create -f .k8s/app.yml
```

Create a loadbalancer service
```bash
kubectl expose deployment learn-k8s-data-api --type=LoadBalancer --port=2001
```

Forward port to access service on local
```bash
kubectl port-forward service/learn-k8s-data-api 8080:2001
```

Test the api
```bash
curl http://localhost:8080/api/v1/data
```