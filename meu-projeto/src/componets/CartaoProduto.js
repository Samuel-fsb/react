function CartaoProduto({nome, preco, categoria}){

    return(
        <div className="cartao">
            <h3>{nome}</h3>
            <p>Preço: {preco}</p>
            <span>Categoria: {categoria}</span>
        </div>
    );

};

export default CartaoProduto;