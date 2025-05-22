import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./LoveStory.css";

const LoveStory = () => {
	return (
		<section id="section-love-story" className="love-story">
			<div className="love-story-container">
				<h2>Our Love Story</h2>

				<div className="swiper-wrapper">
					<Swiper
						modules={[Navigation, Pagination, EffectFade]}
						spaceBetween={0}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						effect="fade"
						fadeEffect={{ crossFade: true }}
						className="story-swiper"
						speed={800}
						allowTouchMove={true}
						loop={false}
						observer={true}
						observeParents={true}
						centeredSlides={true}
					>
						<SwiperSlide>
							<div className="timeline-section">
								<h3>✨ How It All Began (2017–2018)</h3>
								<div className="timeline-content">
									<p>
										In 2017, at the College of Medicine, University of Lagos,
										fate began writing our love story. It wasn't anything
										dramatic—just a few glances, a curious mind, and a shirtless
										guy cooking behind his room every time I passed by on my way
										to church.
									</p>
									<p>
										My curiosity finally got the best of me. The first time I
										saw him in class, I walked straight up to him and said:
									</p>
									<blockquote>
										"You're the one always distracting me when I'm going to
										church. What's your name?"
									</blockquote>
									<p>
										That bold move was the beginning of everything. By February
										2018, we started dating, and we've been growing stronger
										ever since.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="timeline-section">
								<h3>🌱 Growing Together</h3>
								<div className="timeline-content">
									<p>
										Our relationship wasn't instant fireworks—it was a slow
										burn, a steady deepening. We didn't fall in love overnight.
										But with each shared moment, each conversation, each
										challenge—we found something real.
									</p>
									<p>
										We've overcome so much together: financial struggles, school
										stress, personal ups and downs. But we always found strength
										in each other, believing that no matter how difficult it
										gets, we'll get through it—together.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="timeline-section">
								<h3>💍 The Proposal</h3>
								<div className="timeline-content">
									<p>
										We didn't start with a proposal. We just knew. Knew that we
										wanted this—us—forever. But when the moment did come, it was
										intimate, heartfelt, and absolutely perfect for us. No big
										gestures. Just love.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="timeline-section">
								<h3>❤ Why Us</h3>
								<div className="timeline-content">
									<p>
										What makes our love special is simple: we overcome together.
										Life can throw storms our way, but hand in hand, we always
										find the calm. We believe in each other. We choose each
										other. Every single day.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default LoveStory;
