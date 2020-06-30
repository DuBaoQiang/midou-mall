import Vuex from 'vuex';

// vuex auto import

const moudlesFiles = require.context('./modules', false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    modules[moduleName] = modulesFiles(modulePath).default;
    return modules;

}, {})

export default Vuex.createStore({
    modules
});