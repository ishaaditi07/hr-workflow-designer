export default function Sidebar() {
  const types = ["start", "task", "approval", "automation", "end"];

  return (
    <div className="panel sidebar">
      <h3>Nodes</h3>

      {types.map((t) => (
        <div
          key={t}
          className="node-item"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("type", t);
          }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}