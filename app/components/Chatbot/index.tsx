import { useDisclosure } from '@mantine/hooks';
import { Avatar, Button, Modal } from '@mantine/core';
import Chatbox from './Chatbox';
import { useMediaQuery } from '@mantine/hooks';

const Chatbot = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const isMobile = useMediaQuery('(max-width: 36em)');

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				withCloseButton={false}
				padding={0}
				fullScreen={isMobile}
				centered={isMobile}
				{...(!isMobile && {
					centered: false,
					styles: {
						content: {
							position: 'fixed',
							transform: 'none',
							top: 'unset',
							left: 'unset',
							bottom: '20px',
							right: '20px',
							height: '600px',
						},
					},
				})}
			>
				<Chatbox onClose={close} />
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
