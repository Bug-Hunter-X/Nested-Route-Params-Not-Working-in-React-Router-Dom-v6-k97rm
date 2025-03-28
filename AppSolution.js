```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about/123">Go to About</Link>      
    </div>
  );
}

function About({ params }) {
  return (
    <div>
      <h1>About {params.id}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
export default App; 
```