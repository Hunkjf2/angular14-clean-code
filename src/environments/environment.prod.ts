import packageJson from '../../package.json';

export const environment = {
    production: true,
    serverUrl: 'http://localhost:8060/api',
    version: packageJson.version,
    name: 'local',
    systemName: packageJson.name,
    contextPath: '/api',
};
