export default {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	PaletteColors: {
		height: '90%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: ' pointer',
		marginBottom: '-4px',
		opacity: '1',
		background: 'black',
		'& a': {
			color: 'white',
			position: 'absolute',
			width: '100px',
			height: '30px',
			display: 'inline-block',
			top: '50%',
			left: '50%',
			marginLeft: '-50px',
			marginTop: '-15px',
			outline: 'none',
			textAlign: 'center',
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			lineHeight: '30px',
			textTransform: 'uppercase',
			border: 'none',
			transition: ' 0.3s',
			cursor: 'pointer'
		}
	}
};
