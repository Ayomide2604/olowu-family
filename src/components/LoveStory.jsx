import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./LoveStory.css";

const LoveStory = () => {
	const slides = [
		{
			title: "✨ How It All Began (2017–2018)",
			content: [
				"In 2017, at the College of Medicine, University of Lagos, fate began writing our love story. It wasn't anything dramatic—just a few glances, a curious mind, and a shirtless guy cooking behind his room every time I passed by on my way to church.",
				"My curiosity finally got the best of me. The first time I saw him in class, I walked straight up to him and said:",
				{
					type: "quote",
					text: "You're the one always distracting me when I'm going to church. What's your name?",
				},
				"That bold move was the beginning of everything. By February 2018, we started dating, and we've been growing stronger ever since.",
			],
		},
		{
			title: "🌱 Growing Together",
			content: [
				"Our relationship wasn't instant fireworks—it was a slow burn, a steady deepening. We didn't fall in love overnight. But with each shared moment, each conversation, each challenge—we found something real.",
				"We've overcome so much together: financial struggles, school stress, personal ups and downs. But we always found strength in each other, believing that no matter how difficult it gets, we'll get through it—together.",
			],
		},
		{
			title: "💍 The Proposal",
			content: [
				"We didn't start with a proposal. We just knew. Knew that we wanted this—us—forever. But when the moment did come, it was intimate, heartfelt, and absolutely perfect for us. No big gestures. Just love.",
			],
		},
		{
			title: "❤ Why Us",
			content: [
				"What makes our love special is simple: we overcome together. Life can throw storms our way, but hand in hand, we always find the calm. We believe in each other. We choose each other. Every single day.",
			],
		},
	];

	return (
		<section id="section-love-story" className="love-story mb-3">
			<div className="love-story-container">
				<h2>Our Love Story</h2>
				<div className="timeline-section">
					<Swiper
						modules={[Navigation, Pagination, EffectFade]}
						slidesPerView={1}
						navigation
						pagination={{
							clickable: true,
							el: ".swiper-pagination",
							type: "bullets",
						}}
						effect="fade"
						fadeEffect={{ crossFade: true }}
						speed={800}
						className="story-swiper"
						allowTouchMove={true}
						spaceBetween={0}
						loop={true}
						observer={true}
						observeParents={true}
						watchSlidesProgress={true}
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="slide-content">
									<h3>{slide.title}</h3>
									<div className="timeline-content">
										{slide.content.map((item, i) =>
											typeof item === "string" ? (
												<p key={i}>{item}</p>
											) : (
												<blockquote key={i}>{item.text}</blockquote>
											)
										)}
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</section>
	);
};

export default LoveStory;
