import React from "react";
import { Appear, Slide, CodePane, Text, List, ListItem, SlideSet } from "spectacle";
import Terminal from "spectacle-terminal";
import Title from './components/Title';
import Type from './components/Type';

const yamlNotes = `
<p>before we get into these tools, lets look at why a number of them exist. Lets do that by not using any new tools</p>
<p></p>
`

const manuallyNotes = `
<p>lets take a look at building containers manually</p>

<ul>    
    <li>error prone</li>
    <li>can blow away tags you care about with typos</li>
    <li>time consuming</li>
</ul>
`;


export default function() {
    return (
        <SlideSet>
            <Slide notes={yamlNotes}>
                <Title>Using no new tools</Title>
            </Slide>

            <Slide textAlign="center" notes={manuallyNotes}>
                <Title>Building containers</Title>

                <style>{`
                    div {
                        font-size: 14px;
                    }
                    .Typist {
                        display: inline;
                    }
                `}</style>
                <Terminal title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
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
					<Type>docker tag fizzbuzz:dev someregistry:5000/fizzbuzz</Type>,
					<Type>docker push someregistry:5000/fizzbuzz</Type>,
					`The push refers to repository [someregistry:5000/fizzbuzz]
99783be3377e: Pushed
0b0c3d9a490b: Pushed
a4261d8c3c47: Pushed
9c58e2d5a661: Pushed
968d46c1d20e: Pushed
b87598efb2f0: Pushed
f1b5933fe4b5: Pushed
dev: digest: sha256:50c3bf9d67fcfeda1e3004d9b15c1e828386c4276802eb6f6179e84282ac32e3 size: 1788`,
                ]}/>
            </Slide>
            
            
            <Slide>
                <Title>deployment.yaml</Title> 
                <CodePane lang="yaml" theme="light" source={`
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
`} />
            </Slide>
            <Slide>
                <Title>Deploy to kubernetes</Title>
                <Terminal title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
                    <Type>kubectl apply -f ./deployment.yaml</Type>,
                ]} />
            </Slide>
           
            <Slide>
				<Title >There's gotta be a better way</Title>
				
                <List>
                    {['it\' error prone', 'its time consuming', 'constantly rebuilding, tagging containers and editing yaml'].map(item => (
                        <Appear>
                            <ListItem>
                                {item}
                            </ListItem>
                        </Appear>
                    ))}
                </List>
				<Appear>
					<Text small textColor="secondary" textSize="2rem">enter Makefiles</Text>
				</Appear>
			</Slide>
        </SlideSet>
    );
}
				

			
	