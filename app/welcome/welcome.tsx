import Chatbot from '~/components/Chatbot';
import Content from '~/components/Content';
import Navbar from '~/components/Navbar';

export function Welcome() {
	return (
		<main>
			<Navbar />
			<Content />
			<div className='absolute right-5 bottom-5'>
				<Chatbot />
			</div>
		</main>
	);
}
