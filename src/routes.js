import { BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
   } from 'react-router-dom';

import Page1 from './pages/Page1';
import Home from './components/Home';
import Venda from './components/Venda';
import Compra from './components/Compra';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" exact element={<Home />} />
                <Route path="/compra" element={<Compra/>} />
                <Route path="/redirecionar" element={<Navigate replace to="/" />} />
                <Route path="/venda" element={<Venda/>} />
                <Route path="/page1/*" element={<Page1 />}>
                    <Route path="carrinho" element={<p>Carrinho Vazio</p>} />
                </Route>
            </Routes>

            <Link to="/">Home</Link>
            <br />
            <Link to="/compra">Comprar</Link>
            <br />
            <Link to="/venda">Vender</Link>
            <br />
            <Link to="/page1">Revisar/Finalizar Compra</Link>
        </BrowserRouter>
    )
}

export default Rotas;