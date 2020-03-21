import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './../../styles/ColorBoxStyle';

function ColorBox(props) {
	const [ copied, toggle ] = useState(false);

	const changeCopyState = () => {
		toggle(true);
		setTimeout(() => toggle(false), 1500);
	};

	const { name, background, paletteID, id, showFullPalette, classes } = props;

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div className={classes.ColorBox} style={{ background }}>
				<div className={`${classes.copyOverlay} ${copied && classes.showOverLay}`} style={{ background }} />
				<div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
					<h1>Copied!</h1>
					<p className={classes.copyText}>{background}</p>
				</div>
				<div className="copy-container">
					<div className={classes.boxContent}>
						<span className={classes.colorName}>{name}</span>
					</div>
					<button className={classes.copyBtn}>Copy</button>
				</div>
				{showFullPalette && (
					<Link
						to={`/palette/${paletteID}/${id}`}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<span className={classes.seeMore}>More</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
}

export default withStyles(styles)(ColorBox);
