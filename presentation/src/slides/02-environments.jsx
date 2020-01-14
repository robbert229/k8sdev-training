import React from "react";
import { Appear, Image, Slide, Text, List, ListItem, Quote, BlockQuote, Cite } from "spectacle";
import Title from './components/Title';

const notes = `
I am going to try to breeze through this section, so don't hesitate to ask a question if you have any.
`;

export default function() {
    return (
        <Slide textAlign="center" notes={notes}>
            <Title>Getting your environment right</Title>

            <Text>
                Some people use Linux, some people use Windows. Lets support both groups.
            </Text>
        </Slide>
    );
}
