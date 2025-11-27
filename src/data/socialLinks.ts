export interface SocialLink {
    id: number;
    platform: string;
    url: string;
    label: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com",
        label: "linkedin/in/juan-ingeniero"
    },
    {
        id: 2,
        platform: "GitHub",
        url: "https://github.com",
        label: "github.com/juan-dev"
    },
    {
        id: 3,
        platform: "Email",
        url: "mailto:contacto@ingeniofullstack.com",
        label: "contacto@ingeniofullstack.com"
    }
];
