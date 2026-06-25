import { Link } from "react-router-dom";
import type IProductBrief from "../../../entities/group/model/IProductBrief";
import './GroupCard.css';

export default function ProductCard({ productBrief }: { productBrief: IProductBrief }) {
    return <div className="col">
        <div className="card h-100">
            <Link to={`/group/${productBrief.slug}`} className="nav-link" >
                <div className="card-img-top bg-body d-flex justify-content-center p-3"
                    style={{ aspectRatio: 1.2, width: "100%" }} >
                    <img src={productBrief.imageUrl} className="card-img-top" alt={productBrief.name} />
                </div>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{productBrief.name}</h5>
                <p className="card-text">{productBrief.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <div>{productBrief.actionPrice ?
                    <div>
                        <div><b className='strike-price'>₴{productBrief.price.toFixed(2)}</b></div>
                        <b>₴{productBrief.actionPrice.toFixed(2)}</b>
                    </div>
                    : <b>₴{productBrief.price.toFixed(2)}</b>}
                </div>
                <button className='btn btn-outline-success'>
                    <i className="bi bi-cart"></i>
                </button>
            </div>
        </div>
    </div>
}