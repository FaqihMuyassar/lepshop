import React from "react"
import { useRouter } from "next/router"
import Product from "../assets/page/Produk"
import News from "../assets/components/News"
import Keranjang from "../assets/page/Cart"
import Search from "../assets/components/Search"
import Dukungan from "../assets/page/Dukungan"

const Dynamic = () => {
    const {query} = useRouter()
    console.log(query.slug);
    let page;
    switch (query.slug) {
        case "product":
            page = <Product/>
            break;
        case "detail":
            page = <DetailProduct/>
            break;
        case "news":
            page = <News/>
            break;
        case "cart":
            page = <Keranjang />
            break;
        case "dukungan":
            page = <Dukungan />
            break;
        case "search":
            page = <Search />
        default:
            break;
    }

    return (
        <div>{page}</div>
    )
}

export default Dynamic