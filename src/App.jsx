import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';

//images
import Logo from './assets/Rick-And-Morty-Logo.png'

//pages
import Home from './pages/Home';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav>
            <img src={Logo} alt="rick-and-morty-logo" />
        </nav>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
