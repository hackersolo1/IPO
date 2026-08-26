// import React from "react";
import ReactDOM from "react-dom/client";

import Header from './components/header/header';
import Hero from './sections/hero/hero.tsx';
import Features from "./sections/features/features";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <>
        <Header />
        <Hero />
        <Features />
        <Features />
        <Features />
    </>
)