/* eslint-disable react/prop-types */
import React from 'react';

export default function Tutorial({children}) {
	return (
		<>
			<span style={{color: 'green', fontWeight: 400}}>{children}</span>
		</>
	);
}
