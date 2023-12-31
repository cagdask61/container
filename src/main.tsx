import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PrimeReactProvider>
        <App />
    </PrimeReactProvider>
)