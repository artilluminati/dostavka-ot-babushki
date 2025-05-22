import tw from "tailwind-styled-components";

export default function Section({ title, children }) {
    const Section = tw.div`section flex flex-col gap-y-5`;

    const SectionTitle = tw.h2`text-3xl font-black`;

    const SectionContent = tw.div`flex flex-col gap-4`;

    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>
            <SectionContent>{children}</SectionContent>
        </Section>
    );
}
