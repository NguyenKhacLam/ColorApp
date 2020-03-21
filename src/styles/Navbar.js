export default {
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '7vh'
	},
	logo: {
		marginRight: '15px',
		padding: '0 15px',
		fontSize: '22px',
		backgroundColor: '#eceff1',
		fontFamily: 'Roboto',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& a': {
			textDecoration: 'none',
			color: 'black'
		}
	},
	Slider: {
		width: '340px',
		margin: ' 0 10px',
		display: 'inline-block',
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		'& .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover, .rc-slider-handle': {
			backgroundColor: 'green',
			outline: 'none',
			border: '2px solid green',
			boxShadow: 'none'
		}
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem'
	}
};
