import { useRef, useState } from "react";
import "./clips.scss";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

export default function Clips() {
	const photoStrip = useRef(null);

	useEffect(function () {
		window.addEventListener("scroll", photoStripScroll);

		return () => {
			window.removeEventListener("scroll", photoStripScroll);
		};
	}, []);

	function photoStripScroll() {
		let wScroll = window.pageYOffset;
		photoStrip.current.style.backgroundPosition = `center -${wScroll}px`;
	}

	return (
		<>
			<section className="clips">
				<div className="flex flex--center">
					<div className="col-1">
						<a
							href="https://www.instagram.com/matiasagnese"
							className="home-cta"
						>
							Check me out on <FaInstagram className="icon" />
						</a>
						<div ref={photoStrip} className="photo-strip"></div>
					</div>
					<div className="col-1 order-first">
						<p className="home-lead outdented">
							...After earning a Computer Science degree from Florida
							International University...
						</p>
					</div>
				</div>
			</section>
			<div className="temp"></div>
		</>
	);
}
