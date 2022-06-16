import React from "react";

const ItemCounter = ({ counter }) => {
	return (
		<div className="items-counter">
			<small>
				{counter}{" "}
				{`${counter === 1 ? "tarea pendiente" : "tareas pendientes "}`}
			</small>
		</div>
	);
};

export default ItemCounter;
