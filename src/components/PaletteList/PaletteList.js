import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './../../styles/PaletteListStyle';
import MiniPalette from './../MiniPalette/MiniPalette';

function PaletteList(props) {
	const { palettes, classes } = props;
	// const gotoPalette = (id) => {
	// 	props.history.push(`/palette/${id}`);
	// };
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>Color Picker</h1>
					<Link to={'/palette/new'}>Create Palette</Link>
				</nav>
				<div className={classes.palettes}>
					{palettes.map((palette) => (
						<Link className={classes.link} to={`/palette/${palette.id}`}>
							<MiniPalette {...palette} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default withStyles(styles)(PaletteList);
