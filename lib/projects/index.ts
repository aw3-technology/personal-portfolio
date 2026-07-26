import type { Project } from "./types";
import { aw3Technology } from "./data/aw3-technology";
import { kavanah } from "./data/kavanah";
import { aw3Host } from "./data/aw3-host";
import { openeye } from "./data/openeye";
import { intown } from "./data/intown";
import { andromedaProject } from "./data/andromeda-project";
import { bairdAugustine } from "./data/baird-augustine";
import { bitwage } from "./data/bitwage";
import { blocksee } from "./data/blocksee";
import { carnomaly } from "./data/carnomaly";
import { theDomes } from "./data/the-domes";
import { justiguide } from "./data/justiguide";
import { zeroToThree } from "./data/zero-to-three";
import { wryterAiScreenwriter } from "./data/wryter-ai-screenwriter";

export * from "./types";

export const projects: Project[] = [
  aw3Technology,
  kavanah,
  aw3Host,
  openeye,
  intown,
  andromedaProject,
  bairdAugustine,
  bitwage,
  blocksee,
  carnomaly,
  theDomes,
  justiguide,
  zeroToThree,
  wryterAiScreenwriter,
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
