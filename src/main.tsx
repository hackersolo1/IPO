import ReactDOM from "react-dom/client";

import Header from './components/header/header';
import Hero from './sections/hero/hero.tsx';
import Routine from './sections/routine/routine';
import Mantra from './sections/mantra/mantra';
import Faq from "./sections/faq/faq.tsx";
import Product from "./sections/product/product.tsx";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <>
        <Header />
        <Hero />
        <Routine />
        <Mantra />
        <Product />
        <Faq />
    </>
);
