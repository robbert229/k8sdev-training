import React from "react";
import { Heading, Slide, Text, Link } from "spectacle";
import { Logo } from "./components/Logo";

const notes = ` 
The goal of this presentation is to introduce kubernete's yaml files, helm, and tilt. This is a lot to try to go over, but don't worry I have a link to these slides here, and there are additional links to supplimental documentation throughout this presentation. So please go ahead and grab that QR or url and head over to the repository if you want to follow the links.
`;

export default function() {
  return (
    <Slide bgColor="primary" textAlign="center" notes={notes}>
      <Heading size={4} textColor="secondary" caps lineHeight={1.2}>
        Making sense of application development in Kubernetes
      </Heading>
      <Text small textColor="secondary" textSize="2rem" style={{ marginTop: 10 }}>
        using Helm, Tilt, and lots of Yaml
      </Text>

      <Text 
        bold 
        textColor="tertiary" 
        textSize="2rem" 
        style={{ marginTop: 50 }}
      >
        John Rowley
      </Text>

      <div style={{
        display: "grid",
        gridTemplateColumns: '20% 80%',
        gridTemplateRows: 'auto',
        alignItems: 'center',
      }}>
        <img src={require("./media/qr.png")} alt="SEL Logo" />

        <Link href="https://github.com/robbert229/k8sdev-training">
          <Text>
            https://github.com/robbert229/k8sdev-training
          </Text>
        </Link>
      </div>

      <br/>

      <Logo />
    </Slide>
  );
}
