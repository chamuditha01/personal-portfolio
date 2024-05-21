// src/config.js

const config = {
    development: {
      apiUrl: 'http://localhost:5000', // URL for local development
    },
    production: {
      apiUrl: 'https://personal-portfolio-rho-ruby.vercel.app', // URL for production (deployed backend)
    }
  };
  
  const currentConfig = config[process.env.NODE_ENV] || config.development;
  
  export default currentConfig;
  