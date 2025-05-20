import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Photo from "./Photo";
import photos from "../data/photos";

const categories = [
	{ id: 1, title: "corporate" },
	{ id: 2, title: "traditional" },
	{ id: 3, title: "beach" },
];

const Gallery = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState(null);

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

	return (
		<>
			<div className="row mb-3 container">
				<div className="col-12 d-flex justify-content-between">
					<h5 className=""> All Photos</h5>
					<div>
						<button className="btn btn-black" onClick={handleDropdownToggle}>
							{activeFilter ? activeFilter : " All Photos"} <FaCaretDown />
						</button>

						<div className={`filters ${dropdownOpen ? "" : "d-none"}`}>
							<ul className=" list-unstyled bg-white rounded-2 p-2 my-2 position-relative">
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
										className="px-3 py-1 mb-1 rounded-3 "
										key={category.id}
										onClick={() => handleActiveFilter(category.title)}
										style={{
											cursor: "pointer",
											backgroundColor:
												activeFilter === category.title && "#F5EEDC",
										}}
									>
										{category.title}
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
						{filteredPhotos.map((photo) => (
							<Photo key={photo.id} image={photo.image} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
