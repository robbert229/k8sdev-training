import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite, SlideSet, Link, Code } from "spectacle";
import Terminal from "spectacle-terminal";
import Title from './components/Title';
import Typist from "react-typist";
import Type from './components/Type';

const notes = `
Now lets go over configuring the linux specific parts. First you will need to have installed the docker engine, and minikube. I put links to the documentation for installing each of those here.
`;

const proxyArgs = '--docker-env HTTP_PROXY=http://somecorpproxy:8000 --docker-env HTTPS_PROXY=http://somecorpproxy:8000';

const minikubeNotes = `
`;

export default function() {
    return (
        <Slide notes={minikubeNotes}>
            <Title>Install Helm, Tilt, and Kubectl</Title>
            <style>{`
                div {
                    font-size: 14px;
                }
                .Typist {
                    display: inline;
                }
            `}</style>
            <Terminal title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
                "|> curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl \\\n\
    -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl",
                <Type>chmod +x ./kubectl</Type>,
                <Type>sudo mv ./kubectl /usr/local/bin/kubectl</Type>,
                <Type>kubectl version</Type>,
                `Client Version: version.Info{Major:"1", Minor:"17", GitVersion:"v1.17.0", GitCommit:"70132b0f130acc0bed193d9ba59dd186f0e634cf", GitTreeState:"clean", BuildDate:"2019-12-07T21:20:10Z", GoVersion:"go1.13.4", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"17", GitVersion:"v1.17.0", GitCommit:"70132b0f130acc0bed193d9ba59dd186f0e634cf", GitTreeState:"clean", BuildDate:"2019-12-07T21:12:17Z", GoVersion:"go1.13.4", Compiler:"gc", Platform:"linux/amd64"}`,
                "|> curl -fsSL https://raw.githubusercontent.com/windmilleng/tilt/master/scripts/install.sh | bash",
                `which: no brew in (/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/lib/jvm/default/bin)
+ curl -fsSL https://github.com/windmilleng/tilt/releases/download/v0.10.26/tilt.0.10.26.linux.x86_64.tar.gz
+ tar -xzv tilt
tilt
+ sudo mv tilt /usr/local/bin/tilt
[sudo] password for johnrowl:
+ set +x
Tilt installed! Run \`tilt up\` to start.`,
`

`,
                "|> curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash",
                `  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  6617  100  6617    0     0  61268      0 --:--:-- --:--:-- --:--:-- 61268
Downloading https://get.helm.sh/helm-v3.0.2-linux-amd64.tar.gz
Preparing to install helm into /usr/local/bin
helm installed into /usr/local/bin/helm`,
            ]
        }/>
        </Slide>
    );
}
