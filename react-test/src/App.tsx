import './App.css';
import { useClickOutside } from './hooks/useClickOutside';

function App() {
  const ref = useClickOutside(() => {
    alert('clicked outside');
  });

  return (
    <div ref={ref} style={{ padding: '50px', background: 'lightgray' }}>
      Click outside this box
    </div>
  );
}

export default App;
