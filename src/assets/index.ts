import {
  EftisVif,
  KimTeaWanVif,
  TexierVif,
  OnPostVif,
  RepoVif,
} from "./avif";
import {
  EFTISPng,
  KimTeaWanPng,
  TexierPng,
  OnPostPng,
  RepoPng,
  UnitBlack
} from "./img";
import {
  EftisWebp,
  KimTeaWanWebp,
  TexierWebp,
  OnPostWebp,
  RepoWebp,
} from "./webp";

export const EFTIS = { src: EFTISPng, avif: EftisVif, webp: EftisWebp };
export const OnPost = { src: OnPostPng, avif: OnPostVif, webp: OnPostWebp };
export const KimTeaWan = {
  src: KimTeaWanPng,
  avif: KimTeaWanVif,
  webp: KimTeaWanWebp,
};
export const Texier = {
  src: TexierPng,
  avif: TexierVif,
  webp: TexierWebp,
};
export const Repo = {
  src: RepoPng,
  avif: RepoVif,
  webp: RepoWebp,
};
export const Unit = {
  src: UnitBlack,
}

export interface ImageType {
  src: string;
  avif?: string;
  webp?: string;
}
