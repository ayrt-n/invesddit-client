// Production urls
const prod = {
  urls: {
    API_URL: null
  }
};

// Development urls
const dev = {
  urls: {
    API_URL: 'http://localhost:3001'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
