import { IconType } from "react-icons";

export interface Project {
    title: string;
    subtitle: string;
    cta: string;
    href: string;
    imgUrl: string;
}

export interface TechStackItem {
    name: string;
    icon: IconType;
}

export interface ProjectDetailData {
    slug: string;
    title: string;
    description: string;
    stack: TechStackItem[];
    href: string;
    sourceCodeLink: string;
    projectPurpose: string;
    webStackExplanation: string;
    firstAsset: string;
    secondAsset: string;
    thirdAsset: string;
    thoughtProcess: string;
    takeaway: string;
}
