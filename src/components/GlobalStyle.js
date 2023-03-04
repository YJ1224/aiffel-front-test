import { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const Common = createGlobalStyle` // [p1] 전역에서 사용할 css 작성
    input {
        display: flex;
        padding-left : 5px;
        border-radius : 5px;
        width:100%;
        height: 40px;
       
    }
    button {
        display: inline-block;
        border-radius : 5px;
        width:100%;
        height: 40px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        box-sizing:border-box;
        cursor : pointer;
    }
    textarea {
        min-width:100%;
        max-width:100%;
        min-height:100px;
        max-height:400px;
        padding-top:10px;
        padding-left:10px;
    }

    select {
        width: 40%;
        height: 35px;
        background: white;
        color: black;
        padding-left: 10px;
        font-size: 1rem;
        border: 1px solid black;
        option {
            color: black;
            background: white;
            display: flex;
            white-space: pre;
            min-height: 20px;
            padding: 0px 2px 1px;
          }
    }
    button:disabled{
        background: #ccc;
        border-color:#ccc;
        cursor:not-allowed;
    }

`;

export default Common;
