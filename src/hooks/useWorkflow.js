import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useWorkflow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const addNode = (type, position) => {
    const node = {
      id: uuid(),
      type,
      position,
      data: {
        label: type,
        config: {}
      }
    };

    setNodes((prev) => [...prev, node]);
  };

  const updateNodeData = (id, newData) => {
    setNodes((prev) =>
      prev.map((node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...node.data,
                ...newData
              }
            }
          : node
      )
    );

    setSelectedNode((prev) =>
      prev && prev.id === id
        ? {
            ...prev,
            data: {
              ...prev.data,
              ...newData
            }
          }
        : prev
    );
  };

  return {
    nodes,
    setNodes,
    edges,
    setEdges,
    selectedNode,
    setSelectedNode,
    addNode,
    updateNodeData
  };
};