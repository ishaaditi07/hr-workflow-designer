export default function SandboxPanel({ nodes }) {
  const runWorkflow = () => {
    let output = "WORKFLOW RUN:\n\n";

    nodes.forEach((n) => {
      output += `${n.type} → ${n.data?.label}\n`;
    });

    alert(output);
  };

  return (
    <div className="panel sandbox">
      <h3>Simulation</h3>

      <button onClick={runWorkflow}>
        Run Workflow
      </button>
    </div>
  );
}