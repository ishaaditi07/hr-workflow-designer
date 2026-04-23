import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowProvider
} from "reactflow";
import "reactflow/dist/style.css";

export default function Canvas({
  nodes,
  setNodes,
  edges,
  setEdges,
  setSelectedNode,
  addNode
}) {
  return (
    <div style={{ flex: 1, height: "100%", background: "#f9fafb" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={Array.isArray(nodes) ? nodes : []}
          edges={Array.isArray(edges) ? edges : []}

          onNodesChange={(changes) =>
            setNodes((nds) => applyNodeChanges(changes, nds || []))
          }

          onEdgesChange={(changes) =>
            setEdges((eds) => applyEdgeChanges(changes, eds || []))
          }

          onConnect={(params) =>
            setEdges((eds) => addEdge(params, eds || []))
          }

          onNodeClick={(e, node) => setSelectedNode(node)}

          onDrop={(e) => {
            e.preventDefault();

            const type = e.dataTransfer.getData("type");
            if (!type) return;

            const bounds = e.currentTarget.getBoundingClientRect();

            const position = {
              x: e.clientX - bounds.left,
              y: e.clientY - bounds.top
            };

            addNode(type, position);
          }}

          onDragOver={(e) => e.preventDefault()}

          fitView
        >
          <Background gap={16} color="#e5e7eb" />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}