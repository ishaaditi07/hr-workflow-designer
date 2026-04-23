import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import NodeFormPanel from "./components/NodeFormPanel";
import SandboxPanel from "./components/SandboxPanel";
import { useWorkflow } from "./hooks/useWorkflow";

export default function App() {
  const workflow = useWorkflow();

  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />
        <Canvas {...workflow} />
        <NodeFormPanel {...workflow} />
        <SandboxPanel {...workflow} />
      </div>
    </div>
  );
}