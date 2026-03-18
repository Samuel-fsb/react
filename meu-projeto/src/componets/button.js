function Button(props){

    return(
        <duv>
            <button onClick={props.event}>{props.text}</button>
        </duv>
    )
};

export default Button;