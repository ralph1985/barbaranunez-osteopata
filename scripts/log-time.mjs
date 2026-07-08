import { readFile, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { format } from "prettier";

const DEFAULT_LOG_PATH = fileURLToPath(
  new URL("../docs/time-log.md", import.meta.url),
);

export function parseDuration(value) {
  const normalized = value.trim().toLowerCase();
  const match = normalized.match(
    /^(?:(\d+)\s*(?:h|hora|horas))?\s*(?:(\d+)\s*(?:m|min|minuto|minutos))?$/,
  );

  if (!match || (!match[1] && !match[2])) {
    throw new Error("Usa una duración como 30m, 1h o 1h 30m.");
  }

  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes <= 0 || minutes >= 60) {
    throw new Error(
      "La duración debe ser mayor que cero y los minutos menores que 60.",
    );
  }

  return totalMinutes;
}

function localDate() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function escapeCell(value) {
  return value.trim().replaceAll("|", "\\|").replaceAll(/\r?\n/g, " ");
}

function nextId(log, date) {
  const prefix = date.replaceAll("-", "");
  const matches = [
    ...log.matchAll(new RegExp(`\\| ${prefix}-(\\d{3}) \\|`, "g")),
  ];
  const sequence = matches.reduce(
    (highest, match) => Math.max(highest, Number(match[1])),
    0,
  );

  return `${prefix}-${String(sequence + 1).padStart(3, "0")}`;
}

export async function appendTimeEntry(entry, logPath = DEFAULT_LOG_PATH) {
  const log = await readFile(logPath, "utf8");
  const date = localDate();
  const id = nextId(log, date);
  const decimalHours = (entry.minutes / 60).toFixed(2).replace(".", ",");
  const row = [
    id,
    date,
    escapeCell(entry.task),
    escapeCell(entry.description),
    String(entry.minutes),
    decimalHours,
    entry.billable ? "Sí" : "No",
    escapeCell(entry.notes),
  ];

  const updatedLog = `${log.trimEnd()}\n| ${row.join(" | ")} |\n`;
  const formattedLog = await format(updatedLog, { parser: "markdown" });

  await writeFile(logPath, formattedLog, "utf8");
  return { id, date, decimalHours };
}

async function main() {
  const input = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const task = await input.question("Hito o tarea: ");
    const description = await input.question("Descripción: ");
    const duration = await input.question("Duración (por ejemplo, 1h 30m): ");
    const billableAnswer = await input.question("¿Facturable? [S/n]: ");
    const notes = await input.question("Notas (opcional): ");

    if (!task.trim() || !description.trim()) {
      throw new Error("El hito o tarea y la descripción son obligatorios.");
    }

    const minutes = parseDuration(duration);
    const billable = !["n", "no"].includes(billableAnswer.trim().toLowerCase());
    const result = await appendTimeEntry({
      task,
      description,
      minutes,
      billable,
      notes,
    });

    console.log(
      `Registro ${result.id} añadido: ${minutes} minutos (${result.decimalHours} horas).`,
    );
  } finally {
    input.close();
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
