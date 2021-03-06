import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'semantic-ui-css/semantic.min.css';
import '../public/index.css';
import App from '../front_end_src/App'

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./../front_end_src/App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>
            ,
            document.getElementById('root')
        );
    });
}
