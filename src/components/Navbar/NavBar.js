import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './../../styles/Navbar';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function NavBar(props) {
	const [ format, setFormat ] = useState('hex');
	const [ openSnack, setOpenSnack ] = useState(false);
	const { level, changeLevel, handleChangeFormat, classes } = props;
	const handleChange = (e) => {
		setFormat(e.target.value);
		handleChangeFormat(e.target.value);
		setOpenSnack(true);
	};
	const closeSnackBar = () => {
		setOpenSnack(false);
	};

	return (
		<header className={classes.navbar}>
			<div className={classes.logo}>
				<Link to="/">ReactColorPicker</Link>
			</div>
			{props.showAllColor && (
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className={classes.Slider}>
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
					</div>
				</div>
			)}

			<div className={classes.selectContainer}>
				<Select value={format} onChange={handleChange}>
					<MenuItem value="hex">Hex - #ffffff</MenuItem>
					<MenuItem value="rgb">Rgb - rgb(255,255,255)</MenuItem>
					<MenuItem value="rgba">Rgba - rgba(255,255,255,1.0)</MenuItem>
				</Select>
			</div>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={openSnack}
				autoHideDuration={2000}
				message={<span id="msg-id">Format Changed!</span>}
				ContentProps={{
					'aria-decribedby': 'msg-id'
				}}
				onClose={closeSnackBar}
				action={[
					<IconButton onClick={closeSnackBar} color="inherit" key="close" aria-label="close">
						<CloseIcon />
					</IconButton>
				]}
			/>
		</header>
	);
}
export default withStyles(styles)(NavBar);
