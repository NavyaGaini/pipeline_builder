// toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px' 
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='apiCaller' label='API Caller' />
                <DraggableNode type='conditional' label='Condition' />
                <DraggableNode type='dataTransform' label='Transform' />
                <DraggableNode type='fileUpload' label='File Upload' />
                <DraggableNode type='webhookTrigger' label='Webhook' />
            </div>
        </div>
    );
};