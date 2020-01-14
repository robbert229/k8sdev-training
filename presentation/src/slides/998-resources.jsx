import React from "react";
import { Slide, Text, Link, List, ListItem } from "spectacle";

const notes = `
  RESOURCES!
`;

/* eslint-disable */
export default function () {
    return (
        <Slide bgColor="primary" textAlign="center" notes={notes}>
            <Text bold textColor="tertiary" textSize="2rem">
                Resources
            </Text>

            <List>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://docs.docker.com/install/"
                    >
                        Install Docker Engine (Linux)
                    </Link>
                </ListItem>
            
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://kubernetes.io/docs/tasks/tools/install-minikube/"
                    >
                        Install Minikube (Linux)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://docs.docker.com/docker-for-windows/install/"
                    >
                        Install docker Desktop on Windows (Windows)
                    </Link>
                </ListItem>   
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"
                    >
                        Install WSL (Windows)
                    </Link>   
                </ListItem>    
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://docs.tilt.dev/"
                    >
                        Tilt Documentation
                    </Link>   
                </ListItem>  
                <ListItem>
                    <Link
                        target="_blank"
                        href="https://helm.sh/docs/"
                    >
                        Helm Documentation
                    </Link>   
                </ListItem>  

                <ListItem>
                    <Link
                        target="_blank"
                        href="https://kubernetes.io/docs/home/"
                    >
                        Kubernetes Documentation
                    </Link>   
                </ListItem>  

            </List>
        </Slide>
    );
}
