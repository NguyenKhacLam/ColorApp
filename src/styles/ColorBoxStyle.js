import chroma from 'chroma-js';

export default {
	root: {},
	ColorBox: {
		width: '20%',
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: ' pointer',
		marginBottom: '-4px',
		'&:hover button': {
			opacity: '1'
		}
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		border: 'none',
		right: '0',
		bottom: '0',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	},
	copyBtn: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
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
		opacity: '0',
		transition: ' 0.3s',
		cursor: 'pointer'
	},
	boxContent: {
		position: 'absolute',
		padding: '10px',
		/* width: "100", */
		left: '0',
		bottom: '0',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		color: 'black',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transition: 'tranform 0.5s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverLay: {
		opacity: '1',
		transform: 'scale(10)',
		overflow: 'hidden',
		zIndex: 10,
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		font: '3rem',
		transform: 'scale(0.1)',
		flexDirection: 'column',
		opacity: '0',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			textAlign: 'center',
			padding: '1rem',
			fontSize: '5rem',
			marginBottom: '0',
			textTransform: 'uppercase'
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showMsg: {
		opacity: '1',
		zIndex: '25',
		transform: 'scale(1)',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: ' 0.3s'
	}
};
