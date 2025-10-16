import { useState, useEffect, useRef, useCallback, memo } from 'react';
import {
	ActionIcon,
	Box,
	Button,
	Divider,
	Flex,
	Group,
	Input,
	ScrollArea,
	Text,
} from '@mantine/core';
import { IoMdClose, IoMdRefresh, IoMdSend } from 'react-icons/io';
import { formatTime } from '~/utils/utility';

interface Message {
	id: string;
	text: string;
	sender: 'user' | 'bot';
	timestamp: Date;
}

interface MessageBubbleProps {
	message: Message;
}

const MessageBubble = memo(({ message }: MessageBubbleProps) => {
	const isUser = message.sender === 'user';
	const bubbleClasses = `max-w-[80%] rounded-xl p-3 ${
		isUser
			? 'bg-blue-600 text-white rounded-br-none'
			: 'bg-gray-200 text-black rounded-bl-none'
	}`;

	return (
		<Flex key={message.id} justify={isUser ? 'flex-end' : 'flex-start'}>
			<Box className={bubbleClasses}>
				<Text style={{ whiteSpace: 'pre-wrap' }}>{message.text}</Text>
				<Text size='xs' mt={5} opacity={0.7} c={isUser ? 'white' : 'dark'}>
					{message.timestamp.toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</Text>
			</Box>
		</Flex>
	);
});

const Chatbox = ({ onClose }: { onClose: () => void }) => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputValue, setInputValue] = useState('');
	const [elapsedTime, setElapsedTime] = useState(0);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setInterval(() => {
			setElapsedTime((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [messages, scrollToBottom]);

	const handleReset = useCallback(() => {
		setMessages([]);
		setElapsedTime(0);
	}, []);

	const handleSend = useCallback(() => {
		const trimmedInput = inputValue.trim();
		if (!trimmedInput) return;

		const userMessage: Message = {
			id: Date.now().toString(),
			text: trimmedInput,
			sender: 'user',
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue('');

		setTimeout(() => {
			const botResponses = [
				`I understand your question about "${trimmedInput}". Can you provide more details?`,
				`Thanks for your message! Here's some helpful information related to "${trimmedInput}".`,
				`I've processed your request about "${trimmedInput}". Let me know if you need further assistance.`,
			];

			const randomResponse =
				botResponses[Math.floor(Math.random() * botResponses.length)];

			const botMessage: Message = {
				id: (Date.now() + 1).toString(),
				text: randomResponse,
				sender: 'bot',
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
		}, 1000);
	}, [inputValue]);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<Box
			className='flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden'
			style={{
				width: '400px',
				height: '600px',
				maxWidth: '400px',
				maxHeight: '600px',
			}}
		>
			<Group justify='space-between' p='md'>
				<Group>
					<Text fw={500}>Chat Session</Text>
					<Text size='sm' c='dimmed'>
						{formatTime(elapsedTime)}
					</Text>
				</Group>
				<Group gap='xs'>
					<Button
						variant='subtle'
						size='compact-sm'
						onClick={handleReset}
						leftSection={<IoMdRefresh size={16} />}
					>
						Reset
					</Button>
					<ActionIcon
						variant='light'
						color='gray'
						onClick={onClose}
						title='Close Chat'
					>
						<IoMdClose size={18} />
					</ActionIcon>
				</Group>
			</Group>

			{/* Messages Area */}
			<ScrollArea className='flex-1 p-3' offsetScrollbars>
				<Flex direction='column' gap='md'>
					{messages.length === 0 ? (
						<Text c='dimmed' ta='center' mt='xl'>
							Start a conversation by sending a message...
						</Text>
					) : (
						messages.map((message) => (
							<MessageBubble key={message.id} message={message} />
						))
					)}
					<div ref={messagesEndRef} />
				</Flex>
			</ScrollArea>

			<Divider />

			<Box p='md'>
				<Group wrap='nowrap'>
					<Input
						placeholder='Type your message (Enter to send)'
						value={inputValue}
						onChange={(e) => setInputValue(e.currentTarget.value)}
						onKeyDown={handleKeyPress}
						flex={1}
						autoFocus
					/>
					<ActionIcon
						variant='filled'
						color='blue'
						size={36}
						onClick={handleSend}
						disabled={!inputValue.trim()}
						title='Send Message'
					>
						<IoMdSend size={18} />
					</ActionIcon>
				</Group>
			</Box>
		</Box>
	);
};

export default Chatbox;
