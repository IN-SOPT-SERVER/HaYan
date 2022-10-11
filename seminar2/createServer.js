const http = require("http"); //http모듈 가져옴

const port = 3000;

http
.createServer((req, res)=>{ //http모듈의 createServer 메소드 사용 - 만드는 역할
    res.write("<h1>IN SOPT SERVER!</h1>");
    res.end("<p>awesome</p>");
})
.listen(port, ()=>{
    console.log(`${port}번 포트에서 대기중!`);
}); //listen은 동작
