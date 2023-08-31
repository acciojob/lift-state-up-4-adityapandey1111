import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [itemName, setItemName] = useState("");
	const [itemPrice, setItemPrice] = useState(null);
	const [itemList, setItemList] = useState([]);

	const addItemHandler = () => {
		setItemList([...itemList, { itemName, itemPrice }]);
	};
	const removeItemHandler = (idx) => {
		const firstPart = itemList.slice(0, idx);
		const lastPart = itemList.slice(idx + 1);

		setItemList([...firstPart, ...lastPart]);
	};
	return (
		<div className='parent'>
			<h1>Parent Component</h1>
			<span>
				<label htmlFor='itemName'>Item Name</label>
				<input
					type='text'
					id='itemName'
					onChange={(e) => setItemName(e.target.value)}
				/>
			</span>
			<span>
				<label htmlFor='itemPrice'>Item Price</label>
				<input
					type='text'
					id='itemPrice'
					onChange={(e) => setItemPrice(e.target.value)}
				/>
			</span>
			<button onClick={addItemHandler}>Add Item</button>
			<br />
			<h3>Child Component</h3>
			<ul className='child'>
				{itemList.map((item, index) => {
					return (
						<Child
							idx={index}
							item={item.itemName}
							price={item.itemPrice}
							removeItemHandler={removeItemHandler}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Parent;