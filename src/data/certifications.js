const base = import.meta.env.BASE_URL

export const certifications = [
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "09/12/2025",
    logo: `${base}certifications/cisco-networking-academy.png`,
    file: `${base}certifications/certification-networking-basics.pdf`
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "09/12/2025",
    logo: `${base}certifications/cisco-networking-academy.png`,
    file: `${base}certifications/certification-cybersecurity.pdf`
  },
  {
    title: "Introduction à la méthode EBIOS Risk Manager",
    issuer: "Club EBIOS / ANSSI",
    date: "12/06/2026",
    logo: `${base}certifications/club-ebios.png`,
    file: `${base}certifications/Certification-ebios.pdf`
  }
]