import React from "react";
import { Appear, Slide, Text, List, ListItem, SlideSet } from "spectacle";
import Terminal from "spectacle-terminal";
import Title from './components/Title';
import Type from './components/Type';

const notes = `
<p>When you are developing an application with the intention of deploying it to 
kubernetes, either on premises using something like Rancher, or whether its in 
EKS, AKS, etc you probably want your development environments to be similar to
the eventual production environment. </p>

<p>You can run your application locally, but if you have more than a single 
service then you might want to consider running your application inside 
kubernetes, even for development.</p>


* <b>some bugs only appear in one environment</b>
<br/><br/>


* <b>maintaining two sets of conf takes time</b>
<br/><br/>

<p>* <b>kubernetes features</b>. Kubernetes has a lot of features. Service Discovery, Configuration 
Management, Sidecars, etc. 
</p>
`;

export default function() {
    return (
        <SlideSet>
			<Slide textAlign="center" notes={notes}>
			    <Title>Local Development Inside of a Kubernetes Cluster</Title>

			    <Appear>
			    	<Text textAlign="left">Why?</Text>
				</Appear>

			    <List>
					<Appear>
			        	<ListItem>
							some bugs only appear in one environment.
			        	</ListItem>
			        </Appear>
			        <Appear>
			        	<ListItem>
							maintaining two sets of conf takes time
			        	</ListItem>
			        </Appear>
			        <Appear>
			        	<ListItem>
							no more "it works on my box"
						</ListItem>
			        </Appear>
				        <Appear>
			        	<ListItem>
							kubernetes has a lot of useful features. 
			        	</ListItem>
			        </Appear>
			    </List>
			</Slide>
			<Slide>
				<Title>Building and pushing containers by hand </Title>

				<Appear>
					<Text small textColor="secondary" textSize="2rem">(its a pain)</Text>
				</Appear>

				<Terminal  title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
					<Type>docker build . -t fizzbuzz:dev --file ./cmd/fizzbuzz/Dockerfile</Type>,
					`Sending build context to Docker daemon  1.959GB
Step 1/5 : FROM golang:1.12-alpine3.9 as builder
 ---> 04665e9d8a9b
Step 2/5 : ADD ./cmd /app/cmd
 ---> Using cache
 ---> eacb82e57f28
Step 3/5 : WORKDIR /app/
 ---> Using cache
 ---> b398b2ca1d72
Step 4/5 : RUN CGO_ENABLED=0 GOOS=linux go build -o ./fizzbuzz -a -tags netgo cmd/fizzbuzz/fizzbuzz.go
 ---> Running in c212c73fbb97
Removing intermediate container c212c73fbb97
 ---> fb8821c5ea91
Step 5/5 : CMD ./fizzbuzz
 ---> Running in 4f613e18f93b
Removing intermediate container 4f613e18f93b
 ---> c8b951f562cc
Successfully built c8b951f562cc
Successfully tagged fizzbuzz:dev`,
					<Type>docker tag fizzbuzz:dev `minikube ip`:5000/fizzbuzz</Type>,
					<Type>docker push `minikube ip`:5000/fizzbuzz</Type>,
					`The push refers to repository [localhost:5000/fizzbuzz]
99783be3377e: Pushed
0b0c3d9a490b: Pushed
a4261d8c3c47: Pushed
9c58e2d5a661: Pushed
968d46c1d20e: Pushed
b87598efb2f0: Pushed
f1b5933fe4b5: Pushed
dev: digest: sha256:50c3bf9d67fcfeda1e3004d9b15c1e828386c4276802eb6f6179e84282ac32e3 size: 1788`
				]}/>
			</Slide>
			<Slide>
				<Title >There's gotta be a better way</Title>
				
				<Appear>
					<Text small textColor="secondary" textSize="2rem">enter Tilt</Text>
				</Appear>

				<div style={{marginBottom: "50px"}}/>

				<Appear>
					<Text>Tilt is a development tool to automate, and optimize your build process.</Text>
				</Appear>
				<List>
					<Appear>
						<ListItem>
							It builds your containers
						</ListItem>
					</Appear>
					<Appear>
						<ListItem>
							Deploys them to Kubernetes
						</ListItem>
					</Appear>
					<Appear>
						<ListItem>
							Configures port forwarding from kubernetes
						</ListItem>
					</Appear>
					<Appear>
						<ListItem>
							Provides a heads up display
						</ListItem>
					</Appear>
				</List>
			</Slide>
        </SlideSet>
    );
}
