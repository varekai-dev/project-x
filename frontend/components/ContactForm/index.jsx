import React from "react";
import "./contactbox.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "./main.scss";

function ContactUs() {
	const notify = () => toast.success("Message sent");
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_pg756tn",
				"template_skfidrt",
				e.target,
				"user_PoQcBJNvA8oNandSVZKxh"
			)
			.then(() => {
				notify();
			});
		e.target.reset();
	}

	return (
		<section className="contact">
			<div className="container">
				<div className="contact__inner">
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<div className="contact__title">
						{" "}
						<h2 className="contact__vip">Interested in our VIP?</h2>
						<p>
							Subscribe to our newsletter to access exclusive deposit bonus
							offers on a weekly basis
						</p>
					</div>
					<form className="contact__form" onSubmit={sendEmail}>
						<label htmlFor="email">Add your email</label>
						<input
							type="email"
							name="email"
							required
							placeholder="Add your email here"
							id="email"
							className="contact__email"
						/>
						<input
							className="contact__btn"
							type="submit"
							value="Subscribe now!"
						/>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
