import { useEffect, useState } from "react";
import { API } from "../services";
import styled from "styled-components";

const Home = () => {

    const [products, setProducts] = useState([]);
    
    async function buscarProdutos(){
        const request = await API.get('/products');
        setProducts(request.data);
    
    }

    useEffect(() => {
        buscarProdutos();

    }, []);
    
    const Img = styled.img`
        height: 300px;
        object-fit: contain;
    `;

   return ( 
        <>
            <section className="overflow-hidder px-5">
                <h1>Lista de Produtos</h1>

                <ul className="grid list-none px-3">
                    {
                        products.map((product) => (
                            <li key={product.id} className="col-12 md:col-3">
                                <div className="shadow-4 p-3 border-round-md">
                                    <div className="relative">
                                        <Img className="w-full" src={product.image} alt={product.title} />
                                        <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">{product.rating.rate}</h6>
                                    </div>
                                    <h3 className="mb-0 text-overflow-ellipsis white-space-nowrap overflow-hidden">{product.title}</h3>
                                    <h6 className="mt-0 text-primary uppercase">{product.category}</h6>
                                    <h2 className="mb-0">R$ {product.price}</h2>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </>
     )
}
 
export default Home;