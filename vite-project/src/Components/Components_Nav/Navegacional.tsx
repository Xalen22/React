function Navegacional(props){
    return(
        <nav>
            <h1>
                {props.titulo}
            </h1>
            <ul>
                <li>
                    {props.va1}
                </li>
                <li>
                    {props.va2}
                </li>
                <li>
                    {props.va3}
                </li>
            </ul>
        </nav>
    );

}

Navegacional.defaultProps = {
    titulo : "Default title",
    va1 : "Defaul Subtitle"
}

export default Navegacional;