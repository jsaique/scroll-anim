interface SectionLayoutProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}
export default function SectionLayout({ children, ref }: SectionLayoutProps) {
  return <section style={{ padding: "5rem 10rem" }}>{children}</section>;
}
