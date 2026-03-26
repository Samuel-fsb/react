function CartaoProduto({nome, preco, categoria, item=[], AplicarDesconto}){

    return(
        <div className="cartao">
            <h3>{nome}</h3>
            <p>Preço: {preco > 0 ? (<button onClick={AplicarDesconto}>Receber Desconto</button>) : (<span style={{color: 'red', fontWeight: 'bold'}}>Esgotado!</span>)}</p>
            <span>Categoria: {categoria}</span>
            <ul>
                {item.map((elemento, index) => <li key={index}>{elemento}</li>)}
            </ul>
            
            
        </div>
    );

};

export default CartaoProduto;