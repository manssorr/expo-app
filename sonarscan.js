const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqp_068fe676dc6a8079f17b25e9192df0a767e857e3',
    options: {
      'sonar.login': 'sqp_068fe676dc6a8079f17b25e9192df0a767e857e3',
      'sonar.projectName': 'Todomi',
      'sonar.projectKey': 'Todomi',
      'sonar.sources': 'src',
      'sonar.ignore':
        'src/**/*.test.js,src/**/*.spec.js,src/**/*.test.jsx,src/**/*.spec.jsx,android/**,ios/**,node_modules/**',
    },
  },
  () => process.exit(),
);
