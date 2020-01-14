import React from "react";
import { Text } from 'spectacle';

export default function({ children }){
	return (
		<Text bold textColor="tertiary" textSize="2rem" style={{ marginBottom: 20 }}>
	        {children}
	    </Text>
    );
}