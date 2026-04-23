export const validateWorkflow = (nodes, edges) => {
  const errors = [];

  if (!nodes.find(n => n.type === "start")) errors.push("Missing Start Node");
  if (!nodes.find(n => n.type === "end")) errors.push("Missing End Node");
  if (edges.length === 0) errors.push("No connections");

  return errors;
};