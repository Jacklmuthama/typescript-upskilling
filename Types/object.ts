// Generate a TypeScript type alias for a Vulnerability object
// with properties: id (number), severity (string), and url (string).

type Vulnerability = {
  id: number;
  severity: string;
  url: string;
};

function summarizeVulnerability(vulnerability: Vulnerability): string {
  return `Vulnerability #${vulnerability.id} has a severity level of ${vulnerability.severity}. More details: ${vulnerability.url}`;
}

// Example usage
const vuln: Vulnerability = {
  id: 101,
  severity: "High",
  url: "https://example.com/vulnerability/101",
};

console.log(summarizeVulnerability(vuln));