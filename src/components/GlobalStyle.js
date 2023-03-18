import { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const Common = createGlobalStyle` // [p1] 전역에서 사용할 css 작성
    button:disabled{
        background: #ccc;
        border-color:#ccc;
        cursor:not-allowed;
    }

`;

export default Common;
