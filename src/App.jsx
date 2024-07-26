import '@styles/App'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; {/* use for routing - if needed */}
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify'
import reactLogo from '@assets/react.svg'
import styled from 'styled-components'
import MetaData from '@/Metadata'

const App = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://yourdomain.com/",
        "name": "Home Page",
    };

    return (
        <HelmetProvider>  
            <MetaData
                title="-VITE-PROTOTYPE- Home"
                description="It's a perfect starter pack, easy to understand and everything is sorted, you just need to roam around a bit!"
                canonicalUrl="https://yourdomain.com/"
                url="https://yourdomain.com/"
                image="https://yourdomain.com/img/your_image"
                siteName="-VITE-PROTOTYPE-"
                author="-VITE-PROTOTYPE- Team"
                keywords="home, vite, react, main page, home page, landing page, web development, app development"
                jsonLd={jsonLd}
            /> {/* To show metadata - use if needed - each page uses this metadata component */}

            <Logos>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="./vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </Logos>

            <Note>
                <span>Vite</span> + <i>React</i>
            </Note>

            <SubNote>Starter Pack</SubNote>

            <Paragraph>
                Start by editing <code>src/App.jsx</code>
            </Paragraph>

            <ToastContainer /> {/* To show notifications - use if needed */}
        </HelmetProvider>
    )
}

{/* styles by using styled-components */}
const Logos = styled.div`
    height: 6em;
    padding: 5em;
`

const Note = styled.h1`
    color: #FFCB23;
    font-size: 6em;
    margin: 0;
    padding: 0;
    font-weight: 900;

    span {
        color: #926BFE;
    }

    i {
        color: #61dafb;
        font-style: normal;
    }

    @media (max-width: 600px) {
        font-size: 3em;
    }
`

const SubNote = styled.h2`
    font-weight: 900;
    background: #61dafbd8;
    background: linear-gradient(180deg, #61dafbd8 45%, #926bfecc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 1px 2px -5px rgba(146, 107, 254, 0.8), 
                         0 2px 4px -5px rgba(146, 107, 254, 0.6), 
                         0 3px 8px -5px rgba(146, 107, 254, 0.4),
                         0 4px 16px -5px rgba(146, 107, 254, 0.2);
                         color: transparent;
    font-size: 6em;
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
        font-size: 3em;
    }
`

const Paragraph = styled.p`
    color: #FFFFFF;
    font-size: 2.5em;
    font-weight: 500;
    margin: 0;
    padding: 40px;

    code {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        color: #ffffff53;
        font-size: 0.6em;
        background-color: #ffffff12;
        border-radius: 4px;
        padding: 4px 4px;
    }
`

export default App
