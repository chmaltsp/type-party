import { normalize } from 'polished';

import { injectGlobal } from 'sc';

export default injectGlobal`

    ${normalize()};

    html {
        font-size: 100%;
        font-display: block;
    }

    body {
        font-family: 'IBM Plex Mono', monospace;
        height: 100%;
        font-size: 16px;
        width: 100%;
        background-color: #FFF;
    }

    button {
        font-family: 'IBM Plex Mono', monospace;
    }
`;
