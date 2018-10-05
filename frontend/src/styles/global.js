import { normalize } from 'polished';

import { injectGlobal } from 'sc';

// @ts-ignore
injectGlobal`

    ${normalize()};

    html {
        font-size: 100%;
        font-display: block;
    }

    body {
        font-family: 'Muli', sans-serif;
        height: 100%;
        font-size: 16px;
        width: 100%;
        background-color: #FFF;
    }

    button {
        font-family: 'Muli', sans-serif;
    }
`;
