import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <>
    <div className="menu">
		<div id="burgers" className="category">
			<h2>Καφές/Ροφήματα</h2>
			<p><span>Hamburger</span>
				<span>$3</span>
			</p>
			<p><span>Cheeseburger</span>
				<span>$3.50</span>
			</p>
			<p><span>Double Cheese Burger</span>
				<span>$4.50</span>
			</p>
			<p><span>Veggie Burger</span>
				<span>$3</span>
			</p>
		</div>
		<div id="hotdogs" className="category">
			<h2>Αναψυκτικά</h2>
			<p><span>Hot Dog</span> <span>$3</span></p>
			<p><span>Chilli Dog</span> <span>$5</span></p>
			<p><span>Veggie Hot Dog</span> <span>$3</span></p>
		</div>
		<div id="chili" className="category">
			<h2>Χυμοί</h2>
			<p><span>Cup</span> <span>$2</span></p>
			<p><span>Bowl</span> <span>$4</span></p>
		</div>
		<div id="sides" className="category">
			<h2>Μπύρες</h2>
			<p><span>Chips</span> <span>$1</span></p>
			<p><span>Fries</span> <span>$2</span></p>
			<p><span>Sweet Potato Fries</span> <span>$3</span></p>
			<p><span>Onion Rings</span> <span>$3</span></p>
		</div>
		<div id="drinks" className="category">
			<h2>Ποτά</h2>
			<p><span>Soda</span> <span>$1</span></p>
			<p><span>Iced Tea</span> <span>$1</span></p>
			<p><span>Fresh Squeezed Lemonade</span> <span>$2</span></p>
		</div>
	</div>

    </>
  )
}

export default Menu;