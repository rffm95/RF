export interface Prize {
  id: number;
  label: string;
  country?: string;
  award?: string;
  isWin: boolean;
  color: string;
  flag?: string;
}

// Inline club badges keep the TV independent of external image services.
const clubBadge = (initials: string, color: string) =>
  'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" rx="12" fill="${color}"/><rect x="5" y="5" width="150" height="90" rx="9" fill="none" stroke="white" stroke-width="3"/><text x="80" y="62" text-anchor="middle" font-family="Arial,sans-serif" font-size="42" font-weight="bold" fill="white">${initials}</text></svg>`
  );

export const PRIZES: Prize[] = [
  { id: 0, label: "FC Porto", country: "FC Porto", award: "Régua (5 finos)", isWin: true, color: "#0050a4", flag: clubBadge("FCP", "#0050a4") },
  { id: 1, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
  { id: 2, label: "SL Benfica", country: "SL Benfica", award: "Régua (5 finos)", isWin: true, color: "#c8102e", flag: clubBadge("SLB", "#c8102e") },
  { id: 3, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
  { id: 4, label: "Sporting CP", country: "Sporting CP", award: "3 finos", isWin: true, color: "#006b3f", flag: clubBadge("SCP", "#006b3f") },
  { id: 5, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
  { id: 6, label: "Real Madrid", country: "Real Madrid", award: "3 finos", isWin: true, color: "#334155", flag: clubBadge("RM", "#334155") },
  { id: 7, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
  { id: 8, label: "Barcelona", country: "Barcelona", award: "1 fino", isWin: true, color: "#7a173b", flag: clubBadge("FCB", "#7a173b") },
  { id: 9, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
  { id: 10, label: "PSG", country: "PSG", award: "1 fino", isWin: true, color: "#004170", flag: clubBadge("PSG", "#004170") },
  { id: 11, label: "Tenta outra vez", isWin: false, color: "#1a1a1a" },
];
