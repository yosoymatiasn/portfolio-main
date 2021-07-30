import "./header.scss";
import logo from "../../assets/img/logo.png";
import { useRef, useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState("false");
	const mobileNavToggle = useRef();

	function navToggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#acting">Acting</a>
					</li>
					<li>
						<a href="#web design">Design</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>

			<header>
				<div className="header-position">
					<h1 className="logo">Matias Agnese</h1>

					<nav className="site-nav">
						<ul>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#acting">Acting</a>
							</li>
							<li>
								<a href="#web design">Design</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</nav>

					<a className="email-link" href="mailto:yosoymatiasn@hotmail.com">
						+email me
					</a>

					<div
						ref={mobileNavToggle}
						onClick={navToggle}
						className="mobile-nav-toggle"
					>
						<span></span>
					</div>
				</div>
			</header>
		</>
	);
}
