import { createGlobalStyle } from "styled-components";

const Indexstyle = createGlobalStyle`
body{
    margin: 0%;
}

#root{
    display: flex;
    flex-direction: column;
    width: 40%;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 45px 5px rgba(0,0,0,0.73);
    margin: 0 auto;
    height: 100vh;
    padding-top: 4%;
}

img{
    width: 40%;
    margin: 0 auto;
    padding-bottom: 8%;
}

.title{
    margin: 0 auto;
    padding-bottom: 20%;
}

.button_modal{
    margin: 0 auto;
}
`

export default Indexstyle;