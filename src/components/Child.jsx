import React from "react";

const Child = ({ idx, item, price, removeItemHandler }) => {
	return (
		<li key={`${idx}-${price}`}>
			{item} - ${price}
			<button onClick={() => removeItemHandler(idx)}>Remove</button>
		</li>
	);
};

export default Child;