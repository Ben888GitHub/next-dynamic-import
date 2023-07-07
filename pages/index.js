import dynamic from 'next/dynamic';
import { useState } from 'react';
import Hello from '../components/Hello';

export default function Home() {
	const [showComp, SetShowComp] = useState(false);
	const GFG = dynamic(() => import('../components/GFG'), {
	  loading: () => <p>Loading...</p>,
	});

	return (
		<>
			{showComp ? <GFG /> : <Hello />}
			<button onClick={() => SetShowComp(!showComp)}>Toggle Component</button>
		</>
	);
}
