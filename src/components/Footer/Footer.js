import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	paletteFooter: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItem: 'center',
		fontWeight: 'bold',
		fontSize: '1.3rem',
		padding: '5px 15px'
	}
};

function Footer(props) {
	const { classes } = props;
	return <footer className={classes.paletteFooter}>{props.paletteName}</footer>;
}
export default withStyles(styles)(Footer);
