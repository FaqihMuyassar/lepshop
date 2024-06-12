import React from "react";
import { useRouter } from "next/router";
import Product from "../assets/page/Produk";
import News from "../assets/components/News";
import Keranjang from "../assets/page/Cart";
import Search from "../assets/components/Search";
import Dukungan from "../assets/page/Dukungan";
import Checkout from "../assets/page/Checkout";
import Landing from "../assets/page/Landing";
import AppShell from "../assets/components/appShell";

const Dynamic = () => {
  const { query } = useRouter();
  console.log(query.slug);
  let page;
  switch (query.slug) {
    case "lepshop":
      page = <Landing />;
      break;
    case "product":
      page = (
        <AppShell>
          <Product />
        </AppShell>
      );
      break;
    case "news":
      page = (
        <AppShell>
          <News />
        </AppShell>
      );
      break;
    case "cart":
      page = (
        <AppShell>
          <Keranjang />;
        </AppShell>
      );
      break;
    case "dukungan":
      page = (
        <AppShell>
          <Dukungan />;
        </AppShell>
      );
      break;
    case "search":
      page = (
        <AppShell>
          <Search />;
        </AppShell>
      );
    case "checkout":
      page = (
        <AppShell>
          <Checkout />;
        </AppShell>
      );
    default:
      break;
  }

  return <div>{page}</div>;
};

export default Dynamic;
