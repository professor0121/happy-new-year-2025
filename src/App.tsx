import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Timeline } from './components/Timeline';
import { Vision } from './components/Vision';
import { Projects } from './components/Projects';
import { Network } from './components/Network';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Welcome />
      <Timeline />
      <Vision />
      <Projects />
      <Network />
      <Contact />
    </main>
  );
}

export default App;