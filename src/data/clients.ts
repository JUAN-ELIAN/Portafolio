export interface Client {
    id: number;
    name: string;
    logoUrl: string; // En un caso real, sería la URL del logo. Usaremos texto por ahora.
}

export const clients: Client[] = [
    { id: 1, name: "TechFlow Systems", logoUrl: "" },
    { id: 2, name: "Global Construct", logoUrl: "" },
    { id: 3, name: "EcoEnergy Solutions", logoUrl: "" },
    { id: 4, name: "Urban Dynamics", logoUrl: "" },
    { id: 5, name: "NextGen Finance", logoUrl: "" },
    { id: 6, name: "Alpha Architecture", logoUrl: "" },
    { id: 7, name: "Quantum Soft", logoUrl: "" },
    { id: 8, name: "Civil Works Corp", logoUrl: "" },
];
