import { normalize } from 'polished';

import { injectGlobal } from 'sc';

export default injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Muli');

    ${normalize()};

    body {
        font-family: 'Muli', sans-serif;
        height: 100%;
        font-size: 16px;
        width: 100%;
        background-color: #000;
    }
`;
