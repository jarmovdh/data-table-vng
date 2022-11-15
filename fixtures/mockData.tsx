const date = new Date();
const currentDate = date.toLocaleDateString("nl-NL", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const dateActive = date.toLocaleDateString("nl-NL", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

const data = [
  {
    fullName: "Niene Boyen",
    accesTo: "DEGO DOOK Autobranche",
    mail: "niene@maasland.nl",
    verified: true,
    accountCreated: currentDate,
    lastActive: dateActive,
    setActions: ["write", "setting", "lock"],
  },
  {
    fullName: "Ruben Werdmulier Von Elg",
    accesTo: "DEGO DOOK Autobranche",
    mail: "ruben@ontwikkelaar.nl",
    verified: true,
    accountCreated: currentDate,
    lastActive: dateActive,
    setActions: ["unlock", "bin", "lock"],
  },
  {
    fullName: "Stephan de Preeker",
    accesTo: "-",
    mail: "stephan@memory.com",
    verified: false,
    accountCreated: currentDate,
    lastActive: dateActive,
    setActions: ["write", "bin", "lock"],
  },
];

export default data;
