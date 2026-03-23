function CartaoProduto({nome, preco, categoria, item=[]}){

    return(
        <div className="cartao">
            <h3>{nome}</h3>
            <p>Preço: {preco}</p>
            <span>Categoria: {categoria}</span>
            <ul>
                {item.map((elemento, index) => <li key={index}>{elemento}</li>)}
            </ul>
        </div>
    );

};

export default CartaoProduto;