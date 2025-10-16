import Chatbot from '~/components/Chatbot';
import Content from '~/components/Content';
import Navbar from '~/components/Navbar';

export const Welcome = () => {
	return (
		<main>
			<Navbar />
			<Content />
			<Chatbot />
		</main>
	);
};
