import { FaEye } from "react-icons/fa";
const Photo = ({ image }) => {
	return (
		<div className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
			<a
				href="images/img_4.jpg"
				className="d-block photo-item"
				data-fancybox="gallery"
			>
				<img src={image} alt="Image" className="img-fluid mb-0" />
				<div className="photo-text-more">
					<span className="icon icon-eye">
						<FaEye />
					</span>
				</div>
			</a>
		</div>
	);
};

export default Photo;
