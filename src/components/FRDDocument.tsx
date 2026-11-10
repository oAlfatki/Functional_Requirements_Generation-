import type { FC } from "react";
import type { FRDData } from "@/types/frd";
import "@/styles/frd-print.css";
import { DocHeader } from "@/components/frd/DocHeader";
import { TableOfContents } from "@/components/frd/TableOfContents";
import { PageBreak } from "@/components/frd/PageBreak";
import { IntroductionSection } from "@/components/frd/IntroductionSection";
import { ProjectBackgroundSection } from "@/components/frd/ProjectBackgroundSection";
import { ProjectDescriptionSection } from "@/components/frd/ProjectDescriptionSection";
import { FunctionalRequirementsSection } from "@/components/frd/FunctionalRequirementsSection";
import { NonFunctionalRequirementsSection } from "@/components/frd/NonFunctionalRequirementsSection";
import { UseCasesSection } from "@/components/frd/UseCasesSection";
import { WorkflowDiagramSection } from "@/components/frd/WorkflowDiagramSection";
import { DataDictionarySection } from "@/components/frd/DataDictionarySection";
import { BusinessRulesSection } from "@/components/frd/BusinessRulesSection";
import { TraceabilityMatrixSection } from "@/components/frd/TraceabilityMatrixSection";
import { AssumptionsDependenciesSection } from "@/components/frd/AssumptionsDependenciesSection";
import { SignOffSection } from "@/components/frd/SignOffSection";

interface FRDDocumentProps {
  data: FRDData;
}

export const FRDDocument: FC<FRDDocumentProps> = ({ data }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="frd-viewport">
      <div className="no-print frd-toolbar">
        <div>
          <div className="frd-toolbar-title">{data.metadata.projectName}</div>
          <div className="frd-toolbar-subtitle">{data.metadata.title}</div>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="frd-print-btn"
        >
          طباعة / تصدير PDF
        </button>
      </div>

      <div className="frd-document" lang="ar" dir="rtl">
        <DocHeader metadata={data.metadata} />
        <PageBreak />
        <TableOfContents items={data.tableOfContents} />
        <PageBreak />

        <IntroductionSection content={data.introduction} />
        <ProjectBackgroundSection content={data.projectBackground} />
        <ProjectDescriptionSection
          overview={data.projectDescription.overview}
          features={data.projectDescription.features}
        />
        <FunctionalRequirementsSection
          requirements={data.functionalRequirements}
        />
        <PageBreak />

        <NonFunctionalRequirementsSection
          requirements={data.nonFunctionalRequirements}
        />
        <UseCasesSection useCases={data.useCases} />
        <WorkflowDiagramSection diagram={data.workflowDiagram} />
        <PageBreak />

        <DataDictionarySection entities={data.dataDictionary} />
        <BusinessRulesSection ruleGroups={data.businessRules} />
        <TraceabilityMatrixSection items={data.traceabilityMatrix} />
        <AssumptionsDependenciesSection
          assumptions={data.assumptions}
          dependencies={data.dependencies}
        />
        <SignOffSection signOffs={data.signOffs} />
      </div>
    </div>
  );
};
