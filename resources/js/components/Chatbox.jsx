import React from 'react';
import './Chatbox.css';

function Chatbox({ messages, input, setInput, handleSend, handleKeyPress, isMobileMode = false, onClose }) {
	return (
		<div
			className={`d-flex flex-column bg-dark text-white p-3 shadow-sm ${
				isMobileMode ? 'chatbox-mobile' : 'chatbox-desktop'
			}`}
		>
			{isMobileMode && (
				<div className="text-end mb-2">
					<button className="btn btn-sm btn-outline-light" onClick={onClose}>
						Close
					</button>
				</div>
			)}

			<h5 className="mb-3 chatbot-header text-info">Orbs Personal AI Chatbot</h5>

			<div className="chat-messages mb-3 flex-grow-1 overflow-auto">
				{messages.map((msg, i) => (
					<div
						key={i}
						className={`mb-2 ${msg.from === 'bot' ? 'text-info' : 'text-success'}`}
					>
						<strong>{msg.from === 'bot' ? 'Orbs' : 'You'}:</strong> {msg.text}
					</div>
				))}
			</div>

			<div className="d-flex">
				<input
					type="text"
					className="form-control me-2 bg-secondary text-white border-0"
					placeholder="Ask something like 'What do you do?'"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyPress}
					style={{ backgroundColor: '#2b2b2b', color: '#f8f9fa', border: '1px solid #444' }}
				/>
				<button className="btn btn-info text-dark" onClick={handleSend}>Send</button>
			</div>

			<div className="text-end mt-2" style={{ fontSize: '10px' }}>
				Set up by Orvie & Powered by: AI
			</div>
		</div>
	);
}

export default Chatbox;
