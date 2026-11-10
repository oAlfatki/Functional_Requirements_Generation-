export type Priority = "عالية" | "متوسطة" | "منخفضة";

export type ImplementationStatus =
  | "قيد الانتظار"
  | "قيد التنفيذ"
  | "مكتمل";

export interface DocumentMetadata {
  title: string;
  domain: string;
  projectName: string;
  author: string;
}

export interface IntroductionContent {
  overview: string;
  coreModulesIntro: string;
  coreModules: string[];
  supportingModulesNote?: string;
  outOfScope?: string;
  goals: string[];
  targetAudience: string;
  references: string;
}

export interface FunctionalRequirement {
  id: string;
  description: string;
  priority: Priority;
  userRole: string;
  acceptanceCriteria: string;
}

export interface NonFunctionalRequirement {
  id: string;
  category: string;
  description: string;
  priority: Priority;
  verificationMethod: string;
  acceptanceCriteria: string;
  dependencies: string;
}

export interface UseCase {
  id: string;
  title: string;
  primaryActor: string;
  goal?: string;
  preconditions?: string;
  trigger?: string;
  mainFlow: string[];
  alternativeFlow?: string;
  postconditions?: string;
  relatedRequirement?: string;
  relatedData?: string;
}

export interface WorkflowDiagram {
  title: string;
  startLabel: string;
  preBranchActions: string[];
  decisionLabel: string;
  successPath: string;
  errorPath: string;
  postBranchActions: string[];
  endLabel: string;
}

export interface DataField {
  name: string;
  type: string;
  required: boolean;
  notes: string;
}

export interface DataEntity {
  entityName: string;
  fields: DataField[];
}

export interface BusinessRule {
  id: string;
  description: string;
}

export interface BusinessRuleGroup {
  moduleName: string;
  rules: BusinessRule[];
}

export interface TraceabilityItem {
  reqId: string;
  reqTitle: string;
  useCaseId: string;
  priority: Priority;
  nfrDependency: string;
  businessRuleRef: string;
  acceptanceCriteria: string;
  implementationStatus: ImplementationStatus;
}

export interface Assumption {
  id: string;
  description: string;
  impactIfInvalid: string;
}

export interface Dependency {
  id: string;
  description: string;
  relatedModule: string;
  impactIfNotMet: string;
}

export interface SignOff {
  stakeholder: string;
  signatureAndTitle: string;
  date: string;
}

export interface FRDData {
  metadata: DocumentMetadata;
  tableOfContents: string[];
  introduction: IntroductionContent;
  projectBackground: string;
  projectDescription: {
    overview: string;
    features: string[];
  };
  functionalRequirements: FunctionalRequirement[];
  nonFunctionalRequirements: NonFunctionalRequirement[];
  useCases: UseCase[];
  workflowDiagram: WorkflowDiagram;
  dataDictionary: DataEntity[];
  businessRules: BusinessRuleGroup[];
  traceabilityMatrix: TraceabilityItem[];
  assumptions: Assumption[];
  dependencies: Dependency[];
  signOffs: SignOff[];
}
