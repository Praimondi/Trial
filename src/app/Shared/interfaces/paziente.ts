import { AttivitaSvolta } from "./attivita-svolta";

export interface Paziente {
  id: number,
  name: string,
  gender: string,
  birthDate: string,
  heightCm: number,
  weightKg: number,
  bmi: number,
  summary: AttivitaSvolta[]
}
