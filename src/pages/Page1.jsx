import { Link, Outlet, useNavigate } from 'react-router-dom';


const Page1 = () => {
    const navigate = useNavigate();
    
    return(
        <div className='container'> 
            <h1>FINALIZAR COMPRA</h1>
            <br />
            <Link to="carrinho">Visualizar Carrinho</Link>
            <Outlet />
            <br />
            <button className="botao" onClick={() => navigate('/exemplo')}> Cancelar Compra</button>
            <br />
            
            
        </div>
    )
};

export default Page1;