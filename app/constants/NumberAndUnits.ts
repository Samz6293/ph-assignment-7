import { Unit } from "../types";

export const dateToday = new Date().toLocaleDateString("bn-BD", {
                  weekday: "long", day: "numeric",
                  month: "long", year: "numeric", timeZone: "Asia/Dhaka"
                  });

export const formatter = new Intl.NumberFormat('bn-BD');

export const unitBn: Unit = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};