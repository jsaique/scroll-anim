interface SectionLayoutProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}
export default function SectionLayout({ children, ref }: SectionLayoutProps) {
  return <div style={{ padding: "5rem 10rem" }}>{children}</div>;
}
