// BaseNode.js
// Base component for all node types.
// Configuration contract:
//   - id: string — unique node id from React Flow
//   - title: string — displayed in node header
//   - color: string — header background color
//   - inputs: array of { id, label } — left side handles
//   - outputs: array of { id, label } — right side handles
//   - children: any — custom body content inside the node

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, color = '#6865A5', inputs = [], outputs = [], children }) => {
  return (
    <div style={{
      minWidth: 200,
      minHeight: 80,
      border: '1px solid #ccc',
      borderRadius: '8px',
      background: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>

      {/* Header */}
      <div style={{
        background: color,
        padding: '6px 10px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '13px'
      }}>
        {title}
      </div>

      {/* Body */}
      <div style={{ padding: '8px 10px', fontSize: '12px' }}>
        {children}
      </div>

      {/* Input handles — left side */}
      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${((i + 1) / (inputs.length + 1)) * 100}%` }}
        />
      ))}

      {/* Output handles — right side */}
      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((i + 1) / (outputs.length + 1)) * 100}%` }}
        />
      ))}

    </div>
  );
};