import React, { useState } from 'react';
import ColorBox from './../ColorBox/ColorBox';
import NavBar from './../Navbar/NavBar';
import Footer from './../Footer/Footer';
import { withStyles } from '@material-ui/styles';
import styles from './../../styles/PaletteStyle';

function Palette(props) {
	const { colors, paletteName, id } = props.palette;
	const { classes } = props;
	const [ level, setLevel ] = useState(500);
	const [ format, setFormat ] = useState('hex');

	const changeLevel = (newLevel) => {
		setLevel(newLevel);
	};

	const handleChangeFormat = (format) => {
		setFormat(format);
	};

	const colorBoxes = colors[level].map((color) => (
		<ColorBox
			background={color[format]}
			name={color.name}
			key={color.name}
			id={color.id}
			paletteID={id}
			showFullPalette={true}
		/>
	));

	return (
		<div className={classes.Palette}>
			{/* Navbar goes here */}
			<NavBar
				level={level}
				changeLevel={changeLevel}
				handleChangeFormat={handleChangeFormat}
				showAllColor={true}
			/>
			<div className={classes.PaletteColors}>
				{/* Color Boxes go here */}
				{colorBoxes}
			</div>
			{/* Footer goes here */}
			<Footer paletteName={paletteName} />
		</div>
	);
}

export default withStyles(styles)(Palette);
