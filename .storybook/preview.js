import React from 'react';

import '../src/override.css'

export const decorators = [
	(Story) => (
		<div style={{ margin: '1em' }}>
			<Story />
		</div>
	),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
