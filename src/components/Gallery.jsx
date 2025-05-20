import { useState, useEffect } from "react";
import {
	FaCaretDown,
	FaTimes,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { titleCase } from "title-case";
import Photo from "./Photo";
import photos from "../data/photos";

// Add global polyfill
if (typeof global === "undefined") {
	window.global = window;
}

const categories = [
	{ id: 1, title: "corporate" },
	{ id: 2, title: "traditional" },
	{ id: 3, title: "beach" },
];

const Gallery = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState(null);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const handleDropdownToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleActiveFilter = (category) => {
		setActiveFilter(category);
		setDropdownOpen(false);
	};

	const filteredPhotos = activeFilter
		? photos.filter((photo) => photo.category === activeFilter)
		: photos;

	const handlePhotoClick = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
		setIsLoading(true);
	};

	const handlePrev = () => {
		setIsLoading(true);
		setPhotoIndex(
			(photoIndex + filteredPhotos.length - 1) % filteredPhotos.length
		);
	};

	const handleNext = () => {
		setIsLoading(true);
		setPhotoIndex((photoIndex + 1) % filteredPhotos.length);
	};

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<>
			<div className="row mb-3 container">
				<div className="col-12 d-flex justify-content-between">
					<h5 className=""> All Photos</h5>
					<div>
						<button className="btn btn-black" onClick={handleDropdownToggle}>
							{activeFilter ? titleCase(activeFilter) : " All Photos"}{" "}
							<FaCaretDown />
						</button>

						<div className={`filters ${dropdownOpen ? "" : "d-none"}`}>
							<ul className="list-unstyled bg-white rounded-2 p-2 my-2 position-relative">
								<li
									className="px-3 py-1 rounded-2"
									onClick={() => handleActiveFilter(null)}
									style={{
										cursor: "pointer",
										backgroundColor: activeFilter === null && "#F5EEDC",
									}}
								>
									All Photos
								</li>
								{categories.map((category) => (
									<li
										className="px-3 py-1 mb-1 rounded-3"
										key={category.id}
										onClick={() => handleActiveFilter(category.title)}
										style={{
											cursor: "pointer",
											backgroundColor:
												activeFilter === category.title && "#F5EEDC",
										}}
									>
										{titleCase(category.title)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<section className="row align-items-stretch photos" id="section-photos">
				<div className="col-12">
					<div className="row align-items-stretch">
						{filteredPhotos.map((photo, index) => (
							<Photo
								key={photo.id}
								image={photo.image}
								onClick={() => handlePhotoClick(index)}
							/>
						))}
					</div>
				</div>
				{filteredPhotos.length < 1 && <h2>No Images in this Category yet</h2>}
			</section>

			{isOpen && (
				<div
					className="lightbox-overlay"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						zIndex: 1000,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<button
						onClick={() => setIsOpen(false)}
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							background: "none",
							border: "none",
							color: "white",
							fontSize: "24px",
							cursor: "pointer",
						}}
					>
						<FaTimes />
					</button>
					<button
						onClick={handlePrev}
						style={{
							position: "absolute",
							left: "20px",
							background: "none",
							border: "none",
							color: "white",
							fontSize: "24px",
							cursor: "pointer",
						}}
					>
						<FaChevronLeft />
					</button>
					<div style={{ position: "relative" }}>
						{isLoading && (
							<div
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									color: "white",
								}}
							>
								Loading...
							</div>
						)}
						<img
							src={filteredPhotos[photoIndex].image}
							alt=""
							style={{
								maxHeight: "90vh",
								maxWidth: "90vw",
								objectFit: "contain",
								opacity: isLoading ? 0 : 1,
								transition: "opacity 0.3s",
							}}
							onLoad={handleImageLoad}
						/>
					</div>
					<button
						onClick={handleNext}
						style={{
							position: "absolute",
							right: "20px",
							background: "none",
							border: "none",
							color: "white",
							fontSize: "24px",
							cursor: "pointer",
						}}
					>
						<FaChevronRight />
					</button>
				</div>
			)}
		</>
	);
};

export default Gallery;
