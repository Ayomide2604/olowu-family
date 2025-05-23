import React from "react";
import "./LoveStory.css";

const LoveStory = () => {
	const story = {
		title: "How We Met",
		image: "/growing-together.svg",
		content: [
			"In 2017, at the College of Medicine, University of Lagos, fate began writing our love story. It wasn't anything dramatic—just a few glances, a curious mind, and a shirtless guy cooking behind his room every time I passed by on my way to church.",
			{
				text: "You're the one always distracting me when I'm going to church. What's your name?",
				type: "quote",
			},
			"That bold move was the beginning of everything. By February 2018, we started dating, and we've been growing stronger ever since.",
		],
	};

	return (
		<section id="section-love-story" className="love-story">
			<div className="love-story-container">
				<h2>Our Love Story</h2>
				<div className="timeline-section">
					<div className="story-card">
						<div className="story-header">
							<img
								src={story.image}
								alt="How We Met"
								className="img-fluid"
								width={100}
							/>
							<h3>{story.title}</h3>
						</div>
						<div className="story-body">
							{story.content.map((item, i) =>
								typeof item === "string" ? (
									<p key={i}>{item}</p>
								) : (
									<blockquote key={i} className="story-quote">
										{item.text}
									</blockquote>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoveStory;
