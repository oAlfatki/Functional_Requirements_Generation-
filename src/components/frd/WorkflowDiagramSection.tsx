import type { WorkflowDiagram } from "@/types/frd";
import React from "react";

interface WorkflowDiagramSectionProps {
  diagram: WorkflowDiagram;
}

export function WorkflowDiagramSection({ diagram }: WorkflowDiagramSectionProps) {
  return (
    <section>
      <h2>7. مخططات سير العمل (Workflow Diagrams)</h2>
      <h3>{diagram.title}</h3>

      <div className="workflow-box-container avoid-break">
        <div className="wf-node wf-oval">{diagram.startLabel}</div>
        <div className="wf-arrow">▼</div>
        
        {diagram.preBranchActions.map((action, index) => (
          <React.Fragment key={`pre-${index}`}>
            <div className="wf-node">{action}</div>
            <div className="wf-arrow">▼</div>
          </React.Fragment>
        ))}

        <div className="wf-node">{diagram.decisionLabel}</div>
        <div className="wf-arrow">▼</div>
        <div className="wf-branch">
          <div className="wf-node">{diagram.successPath}</div>
          <div className="wf-node">{diagram.errorPath}</div>
        </div>
        <div className="wf-arrow">▼</div>
        
        {diagram.postBranchActions.map((action, index) => (
          <React.Fragment key={`post-${index}`}>
            <div className="wf-node">{action}</div>
            <div className="wf-arrow">▼</div>
          </React.Fragment>
        ))}

        <div className="wf-node wf-oval">{diagram.endLabel}</div>
      </div>
    </section>
  );
}
