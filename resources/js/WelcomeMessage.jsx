import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Chatbox from './components/Chatbox';
import MainContent from './components/MainContent';
import packageJson from '../../package.json';
import './WelcomeMessage.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const reactVersion = packageJson.dependencies.react;

function WelcomeMessage() {
	const [messages, setMessages] = useState([
		{ from: 'bot', text: `Hi! Ask me anything about Orvie or anything that you like.` }
	]);
	const [input, setInput] = useState('');
	const [laravelVersion, setLaravelVersion] = useState('loading...');
	const [visibleSection, setVisibleSection] = useState('Home');
	const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1025); // Detect large screen (desktop)

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1025);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		fetch(`${API_URL}/api/version`)
			.then(res => res.json())
			.then(data => setLaravelVersion(data.laravel || 'unknown'))
			.catch(() => setLaravelVersion('unavailable'));
	}, []);

	const handleSend = async () => {
		if (!input.trim()) return;
		const userMessage = input.trim();
		setMessages(prev => [
			...prev,
			{ from: 'user', text: userMessage },
			{ from: 'bot', text: 'Typing...' }
		]);
		setInput('');

		try {
			const response = await fetch(`${API_URL}/api/chatbot`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: userMessage })
			});
			const data = await response.json();
			setMessages(prev => [...prev.slice(0, -1), { from: 'bot', text: data.reply }]);
		} catch {
			setMessages(prev => [
				...prev.slice(0, -1),
				{ from: 'bot', text: 'Oops! Something went wrong talking to AI.' }
			]);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') handleSend();
	};

	return (
		<div className="d-flex flex-column min-vh-100">
			<Header onNavigate={setVisibleSection} />

			<main className="flex-grow-1 d-flex position-relative">
				<div className="container-fluid px-0 w-100">
					<div className="row g-0 h-100">
						<MainContent visibleSection={visibleSection} />

						{/* Desktop Chatbox (visible on large screens only) */}
						{isLargeScreen && (
							<div className="col-md-3">
								<Chatbox
									messages={messages}
									input={input}
									setInput={setInput}
									handleSend={handleSend}
									handleKeyPress={handleKeyPress}
								/>
							</div>
						)}
					</div>
				</div>

				{/* Mobile & Tablet Chat Toggle Button */}
				{!isLargeScreen && !isMobileChatOpen && (
					<div className="w-100 position-fixed bottom-0 start-0 chat-button-minimized">
						<button
							className="btn chat-with-bot-btn w-100 rounded-0"
							onClick={() => setIsMobileChatOpen(true)}
						>
							Chat with my AI Chatbot
						</button>
					</div>
				)}

				{/* Mobile & Tablet Fullscreen Chatbox */}
				{!isLargeScreen && isMobileChatOpen && (
					<div
						className="position-fixed top-0 start-0 w-100 chatbox-mobile-container"
						style={{ top: '40px', height: 'calc(100vh - 40px)', zIndex: 1050 }}
					>
						<Chatbox
							messages={messages}
							input={input}
							setInput={setInput}
							handleSend={handleSend}
							handleKeyPress={handleKeyPress}
							isMobileMode={true}
							onClose={() => setIsMobileChatOpen(false)}
						/>
					</div>
				)}
			</main>

			<footer className="bg-dark text-white text-center py-2">
				<small>&copy; {new Date().getFullYear()} Orvie Vista. All rights reserved.</small><br />
				<small>Laravel {laravelVersion} | React {reactVersion}</small>
			</footer>
		</div>
	);
}

export default WelcomeMessage;
