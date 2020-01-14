import React from 'react';
import Typist from 'react-typist';

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

const css = `
div {
    font-size: 14px;
}
.Typist {
    display: inline;
}
`;

export default function({ children }) {
	return (
		 <span>|> <style>{css}</style><Typist cursor={ cursor }>{children}</Typist></span>
	);
}