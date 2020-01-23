import React from "react";
import { 
    Appear, 
    Image, 
    Slide, 
    Text, 
    List, 
    ListItem, 
    Quote, 
    BlockQuote,
     Cite,
     SlideSet
} from "spectacle";
import Title from './components/Title';

const notes = `

`;

const items = ['Docker', 'Ksonnet', 'Kustomize', 'Sidecars', 'Helm', 'Skaffold', 'Draft', 'Garden'];

export default function() {
    return (
        <SlideSet>
            <Slide textAlign="center" notes={notes}>
                <Title>Developing on Kubernetes can be hard</Title>

                <List>
                    {items.map(item => (
                        <Appear>
                            <ListItem>
                                {item}
                            </ListItem>
                        </Appear>
                    ))}
                </List>

                <Appear>
                    <Text>There's a lot</Text>
                </Appear>
            </Slide>
            <Slide textAlign="center" notes={notes}>
                <Title>The landscape is vast</Title>

                <img src={require('./media/landscape.PNG')} />
            </Slide>
        </SlideSet>
    );
}
