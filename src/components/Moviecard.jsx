import React from "react";
import {Link} from "react-router-dom"
import { FaStar } from 'react-icons/fa';
function Moviecard({ mov }) {
	console.log(mov);
	return (
		<div className="col-md-3">
			<div className="card p-3 text-center my-2">
				<img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="" className="rounded" />
				<div className="py-1 display-5">
				<h6 className="py-2 fw-bold">{mov.original_title}</h6>
				<h4>  انتاج: {mov.release_date}</h4>
				<h4>
					<span> التقيم :</span> <span> {mov.vote_average}  <FaStar className=" text-warning mb-1"/></span>
				</h4>
				</div>
				<Link to={`/movie/${mov.id}`} class="btn btn-dark"> تفاصيل الفيلم</Link>
			</div>
		</div>
	);
}

export default Moviecard;
