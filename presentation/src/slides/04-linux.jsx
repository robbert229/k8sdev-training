import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite, SlideSet, Link, Code } from "spectacle";
import Terminal from "spectacle-terminal";
import Title from './components/Title';
import Type from './components/Type';
import Typist from 'react-typist';

const notes = `
Now lets go over configuring the linux specific parts. First you will need to 
have installed the docker engine, and minikube. I put links to the 
documentation for installing each of those here.

After minikube has been installed we will want to start a cluster. We can first
check to make sure that "minikube status" works, and then create a new minikube
instance. We can pass arguments to the docker engine that it will create, such
as proxy settings. We can also pass flags that configure how much resources 
minikube should use.

After that is done we need to enable the local registry for minikube. Once this
is done we need to verify that its working. We can just curl the ip address of
the minikube environment. Pro Tip: if you can't connect to the registry make 
sure that you aren't going through a proxy to reach the minikube. This can be 
done by adding the results of "minikube ip" to the NO_PROXY environment 
variable.
`; 

const proxyArgs = '--docker-env HTTP_PROXY=http://somecorpproxy:8000 --docker-env HTTPS_PROXY=http://somecorpproxy:8000';

const minikubeNotes = `
`;

export default function() {
    return (
        <SlideSet>
            <Slide textAlign="center" notes={notes}>
                <Title>Linux Specific</Title>

                <Text textAlign="left">Docs on how to install:</Text>
                
                <List>
                    <ListItem>
                        <Link href="https://docs.docker.com/install/">Docker Engine</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://kubernetes.io/docs/tasks/tools/install-minikube/">Minikube</Link>
                    </ListItem>
                </List>
            </Slide>
            <Slide notes={minikubeNotes}>
                <Title>Start Minikube Cluster</Title>
                <style>{`
                    div {
                        font-size: 14px;
                    }
                    .Typist {
                        display: inline;
                    }
                `}</style>
                <Terminal title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
                    <Type>minikube status</Type>,
                    `host:
kubelet:
apiserver:
kubeconfig:`,
                    <Type>minikube start {proxyArgs}<Typist.Backspace count={proxyArgs.length} delay={1000} />--cpus=4 --memory=4096</Type>,
                    `
😄  minikube v1.6.2 on Arch
✨  Automatically selected the 'kvm2' driver (alternates: [virtualbox none])
🔥  Creating kvm2 VM (CPUs=4, Memory=4096MB, Disk=20000MB) ...
🌐  Found network options:
    ▪ HTTP_PROXY=http://somecorpproxy:8000
    ▪ HTTPS_PROXY=http://somecorpproxy:8000
    ▪ NO_PROXY=localhost,127.0.0.1,.somecorpproxy
    ▪ http_proxy=http://somecorpproxy:8000
    ▪ https_proxy=http://somecorpproxy:8000
    ▪ no_proxy=localhost,127.0.0.1,somecorpproxy
🐳  Preparing Kubernetes v1.17.0 on Docker '19.03.5' ...
    ▪ env HTTP_PROXY=http://somecorpproxy:8000
    ▪ env HTTPS_PROXY=http://somecorpproxy:8000
🚜  Pulling images ...
🚀  Launching Kubernetes ...
⌛  Waiting for cluster to come online ...
🏄  Done! kubectl is now configured to use "minikube"
`,
                    <Type>minikube addons enable registry</Type>,
                `✅  registry was successfully enabled
`,
                    <Type>minikube status</Type>,
                `host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
`,
                    <Type>curl `minikube ip`:5000/v2/</Type>,
                    `{}%`,
                ]
            }/>
            </Slide>
        </SlideSet>
    );
}
