import React, { useEffect, useState } from 'react';

const ContactSection = ({ sectionStyle }) => {
	const [flashMessage, setFlashMessage] = useState(null);

	useEffect(() => {
		if (window.flashSuccess) {
			setFlashMessage(window.flashSuccess);
			setTimeout(() => setFlashMessage(null), 5000); // optional auto-dismiss
		}
	}, []);

	return (
		<div id="Contact" style={sectionStyle('Contact')}>
			<h2>Contact</h2>
			<div className="row">
				{/* Left Column - Contact Info & Resume */}
				<div className="col-12 col-lg-5 offset-lg-1 mb-4">
					<p>
						Send me a mail:{' '}
						<a href="mailto:orvie.vista88@gmail.com">orvie.vista88@gmail.com</a>
					</p>
					<p>Socials</p>
					<div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>
						<a
							href="https://www.linkedin.com/in/orvie-vista-751b66144/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginRight: '15px', color: '#0e76a8' }}
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://www.facebook.com/orvievista/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#1877f2' }}
						>
							<i className="fab fa-facebook"></i>
						</a>
					</div>

					<div className="mt-3">
						<p>You can view my online CV on the Experiences tab or download the PDF version below.</p>
						<a
							href="/storage/pdfs/OrvieVista__.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary mt-2"
						>
							Download Resume (PDF)
						</a>
					</div>
				</div>

				{/* Right Column - Contact Form */}
				<div className="col-12 col-lg-5 mb-3">
					{flashMessage && (
						<div className="alert alert-success mt-3">{flashMessage}</div>
					)}

					<h4>Leave me a message</h4>
					<form method="POST" action="/contact-message">
						<input
							type="hidden"
							name="_token"
							value={
								document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
							}
						/>

						<div className="form-group mt-3">
							<label htmlFor="email">Your Email</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								required
							/>
						</div>

						<div className="form-group mt-3">
							<label htmlFor="message">Your Message</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								className="form-control"
								required
							></textarea>
						</div>

						<button type="submit" className="btn btn-success mt-3">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
