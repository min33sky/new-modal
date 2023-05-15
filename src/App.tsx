import Card from './components/Card';
import ModalContextProvider from './contexts/modalContext';

function App() {
  return (
    <ModalContextProvider>
      <Card />
    </ModalContextProvider>
  );
}

export default App;
