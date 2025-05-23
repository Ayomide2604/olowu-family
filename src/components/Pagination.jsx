import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="d-flex justify-content-center align-items-center my-4">
			<button
				className="btn btn-outline-dark mx-2"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<FaChevronLeft />
			</button>

			{pageNumbers.map((number) => (
				<button
					key={number}
					className={`btn mx-1 ${
						currentPage === number ? "btn-dark" : "btn-outline-dark"
					}`}
					onClick={() => onPageChange(number)}
				>
					{number}
				</button>
			))}

			<button
				className="btn btn-outline-dark mx-2"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Pagination;
