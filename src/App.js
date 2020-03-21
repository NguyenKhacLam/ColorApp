import React from 'react';
import Palette from './components/Palette/Palette';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import PaletteList from './components/PaletteList/PaletteList';
import SingleColor from './components/SingleColor/SingleColor';
import { generatePalette } from './helpers/colorHelper';

function App() {
	const findPalete = (id) => {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	};

	return (
		<Switch>
			<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={(routeProps) => (
					<SingleColor
						palette={generatePalette(findPalete(routeProps.match.params.paletteId))}
						colorId={routeProps.match.params.colorId}
					/>
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalete(routeProps.match.params.id))} />}
			/>
		</Switch>

		// {/* <div>
		// 	<Palette palette={generatePalette(seedColors[4])} />
		// </div> */}
	);
}

export default App;
