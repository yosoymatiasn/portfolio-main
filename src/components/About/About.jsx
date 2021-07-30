import "./about.scss";
import headshot from "../../assets/img/headshot.png";

export default function About() {
	return (
		<>
			<section className="about">
				<div className="flex flex--center">
					<div className="col-1 title">
						<h2>Hi, I'm Matias</h2>
						<p className="home-lead">
							I'm an <span className="emphasis">actor.</span> And{" "}
							<span className="emphasis">web developer.</span> Well, I dabble...{" "}
						</p>
					</div>
					<div className="col-1 headshot order-first">
						<img src={headshot} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}
