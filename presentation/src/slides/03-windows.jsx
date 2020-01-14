import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite, SlideSet, Link, Code } from "spectacle";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Title from './components/Title';
import Type from './components/Type';

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

const notes = `
I am going to try to breeze through this section, so don't hesitate to ask a question if you have any.
`;

const kubernetesNotes = `
The first thing we want to do after installing Docker For Windows (Docker 
Desktop) is to enable kubernetes. Docker has gone through the hard work of
making this work mostly out of the box.

While we are here lets also enable the show system containers checkbox. This 
just lets us see the guts of kubernetes from the docker cli.
`;

const resourcesNotes = `
Docker For Windows uses a virtual machine to run the containers. By default it
isn't given a lot of resources so lets increase that a bit. I bumped the ramp 
up to roughly 5 gigs, though I kept the cpu usage the same. 
`;

const socketNotes = `
Now lets expose the docker daemon on a tcp socket without tls. This is what 
will allow us to control docker from WSL.
`;

const proxyNotes = `
Lastly if you are in a corporate environment that has a proxy you will need to
tell docker about that proxy.
`;

const wslNotes = `
Now lets get some wsl configuration done. You can open up the terminal for the
wsl operating system by opening the start menu and then type the name of the
operating system you installed along with wsl. I installed debian, so typed 
that in pressed enter and was greeted by a shell.
<br/>
<br/>
First we want to get curl. We can do 
that by doing "sudo apt update" and then "sudo apt install curl". Then we will
need to configure wsl to know where the docker socket it. This is done by 
setting the DOCKER_HOST environment to the tcp socket that we enabled in the 
docker settings view.
`;

export default function() {
    return (
        <SlideSet>
            <Slide textAlign="center" notes={notes}>
                <Title>Windows Specific</Title>

                <Text textAlign="left">Docs on how to install:</Text>
                
                <List>
                    <ListItem>
                        <Link href="https://www.docker.com/products/docker-desktop">Docker For Windows (Docker Desktop)</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">WSL</Link>
                    </ListItem>
                </List>
            </Slide>

            <Slide notes={kubernetesNotes}>
                <Title>Enable Kubernetes</Title>
                <img src={require('./media/windows_docker_settings.PNG')} style={{ marginRight: "50px"}}/>
                <img src={require('./media/windows_docker_kubernetes.PNG')} />
            </Slide>

            <Slide notes={resourcesNotes}>
                <Title>Bump Resources</Title>
                <img src={require('./media/windows_docker_resources.PNG')} />
            </Slide>

            <Slide notes={socketNotes}>
                <Title>Enable Socket</Title>
                <img src={require('./media/windows_docker_socket.PNG')} />
            </Slide>

            <Slide notes={proxyNotes}>
                <Title>Proxy</Title>
                <img src={require('./media/windows_docker_proxy.PNG')} />
            </Slide>

            <Slide notes={wslNotes}>
                <Title>WSL</Title>
                <style>{`
                    div {
                        font-size: 14px;
                    }
                    .Typist {
                        display: inline;
                    }
                `}</style>
                <Terminal title={"1. johnrowl@johnrowllx: ~(zsh)"} output={[
                    <Type>sudo apt update</Type>,
                    `Hit:1 http://deb.debian.org/debian buster InRelease
Get:2 http://deb.debian.org/debian buster-updates InRelease [49.3 kB]
Get:3 http://ftp.debian.org/debian buster-backports InRelease [46.7 kB]
Get:4 http://security-cdn.debian.org/debian-security buster/updates InRelease [65.4 kB]
Get:5 http://ftp.debian.org/debian buster-backports/main amd64 Packages.diff/Index [27.8 kB]
Get:6 http://ftp.debian.org/debian buster-backports/main Translation-en.diff/Index [27.8 kB]
Get:7 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-11-2011.38.pdiff [312 B]
Get:8 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-12-1410.57.pdiff [12.6 kB]
Get:9 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-12-2018.07.pdiff [692 B]
Get:10 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-13-0215.45.pdiff [2,124 B]
Get:11 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-13-0822.52.pdiff [4,111 B]
Get:12 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-13-1421.06.pdiff [1,117 B]
Get:13 http://ftp.debian.org/debian buster-backports/main Translation-en 2020-01-12-1410.57.pdiff [10.5 kB]
Get:14 http://ftp.debian.org/debian buster-backports/main Translation-en 2020-01-13-1421.06.pdiff [802 B]
Get:12 http://ftp.debian.org/debian buster-backports/main amd64 Packages 2020-01-13-1421.06.pdiff [1,117 B]
Get:14 http://ftp.debian.org/debian buster-backports/main Translation-en 2020-01-13-1421.06.pdiff [802 B]
Fetched 135 kB in 9s (14.3 kB/s)
Reading package lists... Done
Building dependency tree
Reading state information... Done
22 packages can be upgraded. Run 'apt list --upgradable' to see them.
`,
                    <Type>sudo apt install curl</Type>,
                    `
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  curl
0 upgraded, 1 newly installed, 0 to remove and 22 not upgraded.
Need to get 264 kB of archives.
After this operation, 410 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian buster/main amd64 curl amd64 7.64.0-4 [264 kB]
Fetched 264 kB in 1s (495 kB/s)
Selecting previously unselected package curl.
(Reading database ... 13828 files and directories currently installed.)
Preparing to unpack .../curl_7.64.0-4_amd64.deb ...
Unpacking curl (7.64.0-4) ...
Setting up curl (7.64.0-4) ...
`,
                    <Type>{`echo "export DOCKER_HOST=tcp://localhost:2375" >> ~/.bashrc && source ~/.bashrc`}</Type>,
                ]
            }/>
            </Slide>
        </SlideSet>
    );
}
