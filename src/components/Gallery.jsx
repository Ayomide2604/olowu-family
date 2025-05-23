import { useState, useEffect } from "react";
import {
	FaCaretDown,
	FaTimes,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { titleCase } from "title-case";
import Photo from "./Photo";
import Pagination from "./Pagination";
import photos from "../data/photos";

// Add global polyfill

if (typeof global === "undefined") {
	window.global = window;
}

const categories = [
	{ id: 1, title: "corporate" },
	{ id: 2, title: "traditional" },
	{ id: 3, title: "beach" },
	{ id: 4, title: "graduation" },
	{ id: 5, title: "throwback" },
	{ id: 6, title: "random" },
];

const ITEMS_PER_PAGE = 12;

const LoadingSpinner = () => (
	<div
		style={{
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: "1rem",
		}}
	>
		<div
			style={{
				width: "50px",
				height: "50px",
				border: "4px solid rgba(255, 255, 255, 0.3)",
				borderRadius: "50%",
				borderTopColor: "#fff",
				animation: "spin 1s linear infinite",
			}}
		/>
		<style>
			{`
				@keyframes spin {
					to {
						transform: rotate(360deg);
					}
				}
			`}
		</style>
		<span style={{ color: "white", fontSize: "1rem" }}>Loading...</span>
	</div>
);

const Gallery = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState(null);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleDropdownToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleActiveFilter = (category) => {
		setActiveFilter(category);
		setDropdownOpen(false);
		setCurrentPage(1); // Reset to first page when filter changes
	};

	const filteredPhotos = activeFilter
		? photos.filter((photo) => photo.category === activeFilter)
		: photos;

	// Calculate pagination
	const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentPhotos = filteredPhotos.slice(startIndex, endIndex);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handlePhotoClick = (index) => {
		setPhotoIndex(index + startIndex); // Adjust index to account for pagination
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
			<div className="row mb-3 ">
				<div className="col-12 d-flex justify-content-between align-items-center">
					<h5 className=" ms-2"> All Photos</h5>
					<div>
						<button
							className="btn btn-outline-dark d-flex align-items-center mx-3"
							onClick={handleDropdownToggle}
						>
							{activeFilter ? titleCase(activeFilter) : " All Photos"}{" "}
							<FaCaretDown size={20} className="ms-2" />
						</button>

						<div
							className={`filters ${dropdownOpen ? "" : "d-none"}`}
							style={{
								position: "absolute",
								zIndex: "1",
							}}
						>
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

			<section className="row align-items-stretch photos " id="section-photos">
				<div className="col-12">
					<div className="row align-items-stretch">
						{currentPhotos.map((photo, index) => (
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

			{filteredPhotos.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}

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
					onTouchStart={(e) => {
						const touch = e.touches[0];
						const startX = touch.clientX;

						const handleTouchEnd = (e) => {
							const touch = e.changedTouches[0];
							const endX = touch.clientX;
							const diff = startX - endX;

							if (Math.abs(diff) > 50) {
								if (diff > 0) {
									handleNext();
								} else {
									handlePrev();
								}
							}

							document.removeEventListener("touchend", handleTouchEnd);
						};

						document.addEventListener("touchend", handleTouchEnd);
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
							zIndex: 1001,
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
							zIndex: 1001,
							padding: "15px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<FaChevronLeft />
					</button>
					<div style={{ position: "relative" }}>
						{isLoading && <LoadingSpinner />}
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
							zIndex: 1001,
							padding: "15px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
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
