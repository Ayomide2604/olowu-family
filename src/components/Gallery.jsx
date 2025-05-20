import { FaCaretDown } from "react-icons/fa";
import Photo from "./Photo";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
import image4 from "../assets/img/4.jpg";
import { act, useState } from "react";

const categories = [
	{ id: 1, title: "Pre Wedding" },
	{ id: 2, title: "Court Wedding" },
	{ id: 3, title: "Trad" },
	{ id: 4, title: "Beach" },
];
const photos = [
	{ id: 1, image: image1 },
	{ id: 2, image: image2 },
	{ id: 6, image: image3 },
	{ id: 3, image: image3 },
	{ id: 4, image: image4 },
	{ id: 8, image: image2 },
	{ id: 5, image: image1 },
	{ id: 9, image: image3 },
	{ id: 10, image: image4 },
	{ id: 7, image: image4 },
	{ id: 11, image: image2 },
];

const Gallery = () => {
	const [dropdownOpen, setDropdownOpen] = useState(true);
	const [activeFilter, setActiveFilter] = useState(null);

	const handleDropdownToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleActiveFilter = (e) => {
		setActiveFilter(e);
		setDropdownOpen(!dropdownOpen);
	};
	return (
		<>
			<div className="row mb-3">
				<div className="col-12 d-flex justify-content-between">
					<h5 className=""> All Photos</h5>
					<div>
						<button
							className="btn btn-outline-dark"
							onClick={handleDropdownToggle}
						>
							{activeFilter ? activeFilter : " All Photos"} <FaCaretDown />
						</button>

						<div className={`filters ${dropdownOpen ? "" : "d-none"}`}>
							<ul className=" list-unstyled bg-white rounded-2 p-2 my-2 position-relative">
								<li
									className=" px-3 py-1 rounded-2"
									onClick={() => handleActiveFilter("All Photos")}
									style={{ cursor: "pointer" }}
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
						{photos.map((photo) => (
							<Photo key={photo.id} image={photo.image} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
