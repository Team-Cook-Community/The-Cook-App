import { CircularProgress } from "@heroui/react";

function App() {
  return (
    <main className="flex flex-col items-center justify-center size-full">
      <CircularProgress aria-label="Loading..." />
      <p>Loading</p>
    </main>
  );
}

export default App;
