import Image from "next/image";
import { Product } from "@/types/product";
import HeartButton from "./HeartButton";
import "./ProductCard.css";
export default function ProductCard({ product }: { product: Product }) {
    return ( 
        <div className="card"> <div className="image-wrapper">
            <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            style={{ objectFit: "contain" }}
            /> </div>

            <div className="card-info">
                <p className="title">{product.title}</p>

                <div className="card-bottom">
                <p className="auth-text">
                    <a href="#" className="link">Sign in</a>&nbsp;
                    or&nbsp;
                    <a href="#" className="link">Create an account</a>&nbsp;
                    to see pricing
                </p>
                <HeartButton />
                </div>
            </div>
        </div>

    );
}
