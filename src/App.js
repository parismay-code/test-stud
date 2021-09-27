import * as React from 'react';

import Header          from './components/Header';
import InfoBlock       from './components/InfoBlock';
import PrinciplesBlock from './components/PrinciplesBlock';
import QuestionsBlock  from './components/QustionsBlock';

const App = () => {
	return <main className="app">
		<Header/>
		<InfoBlock/>
		<PrinciplesBlock/>
		<QuestionsBlock/>
	</main>;
};

export default App;
