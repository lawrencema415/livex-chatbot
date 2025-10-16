import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Avatar } from '@mantine/core';

const Chatbot = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} title='Authentication'>
				chatbox here
			</Modal>

			<div className='fixed bottom-5 right-5 z-50'>
				<Button variant='transparent' onClick={open}>
					<Avatar size={36} src='./chatbot-avatar.jpg' alt='chatbot avatar' />
				</Button>
			</div>
		</>
	);
};

export default Chatbot;
