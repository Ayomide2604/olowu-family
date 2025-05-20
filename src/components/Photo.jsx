import { FaEye } from "react-icons/fa";

const Photo = ({ image, onClick }) => {
	return (
		<div className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
			<div
				className="photo-item"
				onClick={onClick}
				style={{ cursor: "pointer" }}
			>
				<img
					src={image}
					alt="Image"
					className="img-fluid mb-0"
					style={{ objectFit: "cover" }}
				/>
				<div className="photo-text-more">
					<span className="icon icon-eye">
						<FaEye />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Photo;
