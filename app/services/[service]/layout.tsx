export function generateStaticParams() {
  return [
    { service: 'web-development' },
    { service: 'mobile-development' },
    { service: 'cloud-consulting' },
    { service: 'ai-ml-consulting' },
    { service: 'enterprise-software-development' },
    { service: 'erp-consulting' },
  ];
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}