import React, { useState } from 'react';
import './Header.css'; // if you have one

function Header({ onNavigate }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleNavClick = (section) => {
		onNavigate(section); // Set the visible section in parent
		setMobileOpen(false); // Close mobile menu if open
	};

	return (
		<header className="bg-dark text-white">
			<div className="container-fluid d-flex justify-content-between align-items-center p-4">
				<h5 className="m-0">Orvie Vista</h5>
				{/* Mobile Toggle Button */}
				<button className="btn btn-sm btn-light d-md-none" onClick={() => setMobileOpen(!mobileOpen)}>
					☰
				</button>
			</div>

			{/* Desktop Nav */}
			<nav className="main-header main-nav d-none d-md-flex justify-content-center bg-secondary">
				<ul className="nav">
					{['Home', 'About', 'Skills', 'Projects', 'Experiences', 'Services', 'Contact'].map((section) => (
						<li key={section} className="nav-item px-3 text-white" onClick={() => handleNavClick(section)}>
							{section}
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Nav */}
			{mobileOpen && (
				<div className="mobile-menu open">
					<ul className="list-unstyled m-0 p-2">
						{['Home', 'About', 'Skills', 'Projects', 'Experiences', 'Services', 'Contact'].map((section) => (
							<li
								key={section}
								className="text-white py-2 border-bottom"
								onClick={() => handleNavClick(section)}
								style={{ cursor: 'pointer' }}
							>
								{section}
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}

export default Header;
