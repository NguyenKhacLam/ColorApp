import React, { useState } from 'react';
import './../ColorBox/ColorBox';
import { Link } from 'react-router-dom';
import ColorBox from './../ColorBox/ColorBox';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { withStyles } from '@material-ui/styles';
import styles from './../../styles/PaletteStyle';

function SingleColor(props) {
	const [ format, setFormat ] = useState('hex');
	const { paletteName, id } = props.palette;
	const { classes } = props;

	const gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	};

	const _shades = gatherShades(props.palette, props.colorId);

	// const [shade, setShade] = useState(gatherShades(props.palette))

	const handleChangeFormat = (format) => {
		setFormat(format);
	};

	const colorBoxes = _shades.map((colorBox) => (
		<ColorBox key={colorBox.name} name={colorBox.name} background={colorBox[format]} showFullPalette={false} />
	));

	return (
		<div className={classes.Palette}>
			<NavBar handleChangeFormat={handleChangeFormat} showAllColor={false} />
			<div className={classes.PaletteColors}>
				{colorBoxes}
				<div className={classes.goBack}>
					<Link className="copy-btn" to={`/palette/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
						Go back
					</Link>
				</div>
			</div>
			<Footer paletteName={paletteName} />
		</div>
	);
}

export default withStyles(styles)(SingleColor);
