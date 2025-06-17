const Button = ({ children,text, color="black"})=> {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return <button 
    onClick={onClickButton} //()를 쓰면 안된다!

    // onMouseEnter={onClickButton}
    style={{color:color}}>
        {text} - {color.toLocaleUpperCase()}
        {children}
        </button>;
};

export default Button;