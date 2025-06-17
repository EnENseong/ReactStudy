import "./main.css";

const Main = ()=>{
    const user ={
        name: "임은성",
        islogin: true
    };

    if(user.islogin){
        return <div className="logout">로그아웃</div>
    }else{
        return <div>로그인</div>
    }
    
};

export default Main;

