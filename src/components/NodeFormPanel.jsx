export default function NodeFormPanel({
  selectedNode,
  updateNodeData
}) {
  if (!selectedNode) {
    return <div className="panel">Select a node</div>;
  }

  return (
    <div className="panel form-panel">
      <h3>Node Settings</h3>

      <input
        value={selectedNode?.data?.label || ""}
        onChange={(e) =>
          updateNodeData(selectedNode.id, {
            label: e.target.value
          })
        }
      />

      <div style={{ marginTop: 10 }}>
        Type: <b>{selectedNode.type}</b>
      </div>
    </div>
  );
}