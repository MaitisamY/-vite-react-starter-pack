import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import '@styles/Index'
import '@/styles/Animations'
import '@/styles/Variables'
import '@/styles/Declarables'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
