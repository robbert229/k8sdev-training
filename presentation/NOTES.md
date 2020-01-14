# Introduction

The goal of this presentation is to introduce kubernete's yaml files, helm, and tilt. This is a lot to try to go over, but don't worry I have a link to the slides here, and there are links to supplimental documentation and guides.

	github.com/robbert229/k8sdev-training

## Getting your environment right

I am going to try to breeze through this section, so don't hesitate to ask a question if you have any.

	* Minikube + Docker (Linux)
		* install docker
		* install minikube
			https://kubernetes.io/docs/tasks/tools/install-minikube/
		* enable the registry
			`minikube addons enable registry`

	* Docker For Windows (Windows) + WSL (Debian)
		on windows we can just use docker for windows, and tick the kubernetes checkbox inside settings.

		https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly

	* install Tilt
	* install Helm

## I have Code, now what.

When you are developing an application with the intention of deploying it to kubernetes, either on premises using something like Rancher, or whether its in EKS, AKS, etc you probably want your development environments to be similar to the eventual production environment. 

You can run your application locally, but if you have more than a single service then you might want to consider running your application inside kubernetes, even for development.

* some bugs only appear in one environment.

	Managing different configurations and solutions for your local development environments, and production environments means that some bugs might only appear in one environment. 

* maintaining two sets of conf takes time

	You now have to maintain two different sets of configuration to manage the two different environments. It might not be very expensive at first, but as time goes on, and things get more complicated, maintaining the two different configurations becomes more time consuming and expensive.

* no more "it works on my box"

	'Nuff Said.

* kubernetes features. 

	Kubernetes has a lot of features that you might want to leverage even for local development.

Here we have a repository containing four small services. The first one is a isomorphic react application which acts as the web ui. The second service is a golang grpc service which publishes messages to a queue in nats. The third service is a golang consumer of those messages published by the second service. The forth is this presentation.

In order to containerize these services we are first going to want to create some simple dockerfiles.

* create dockerfiles

Now that we have the different dockerfiles we now need some way of building everything.

* show building everything via the cli. 
	* push to localhost on windows

	* push to `minikube ip` on linux.

We could build everything via the cli. That isn't very simple, and its a lot of repetitive typing. We also have to consider that we might have some developers running windows, and some on linux.

* show example Makefile.

We could use the ubiquitous makefile, or even use a shell script. But things aren't exactly simple.

## Tilt

tilt is a tool that we can utilize to help automate and simplify building our containers and pushing them to a local registry.