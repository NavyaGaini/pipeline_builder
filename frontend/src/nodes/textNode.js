// textNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text"
      color="#FF9800"
      outputs={[{ id: 'output', label: 'Output' }]}
    >
      <label>Text:
        <input
          type="text"
          value={currText}
          onChange={e => setCurrText(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};