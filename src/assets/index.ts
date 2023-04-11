import {
  EftisVif,
  KimTeaWanVif,
  MidasVif,
  OnPostVif,
  ProjectIntroduceVif,
  ScouitVif,
} from "./avif";
import {
  EFTISPng,
  KimTeaWanPng,
  MidasPng,
  OnPostPng,
  ProjectIntroducePng,
  ScouitPng,
} from "./img";
import {
  EftisWebp,
  KimTeaWanWebp,
  MidasWebp,
  OnPostWebp,
  ProjectIntroduceWebp,
  ScouitWebp,
} from "./webp";

export const EFTIS = { src: EFTISPng, avif: EftisVif, webp: EftisWebp };
export const OnPost = { src: OnPostPng, avif: OnPostVif, webp: OnPostWebp };
export const ProjectIntroduce = {
  src: ProjectIntroducePng,
  avif: ProjectIntroduceVif,
  webp: ProjectIntroduceWebp,
};
export const KimTeaWan = {
  src: KimTeaWanPng,
  avif: KimTeaWanVif,
  webp: KimTeaWanWebp,
};
export const Midas = {
  src: MidasPng,
  avif: MidasVif,
  webp: MidasWebp,
};
export const Scouit = {
  src: ScouitPng,
  avif: ScouitVif,
  webp: ScouitWebp,
};

export interface ImageType {
  src: string;
  avif: string;
  webp: string;
}
