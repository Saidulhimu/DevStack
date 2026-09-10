// Navbar is a JavaScript component without a TypeScript declaration file.
// @ts-expect-error The component is used as a React component and will be migrated to TS separately.
import Navbar from './components/navber/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <main>
      </main>
    </div>
  );
}

export default App;