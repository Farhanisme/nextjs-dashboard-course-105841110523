// import '@/app/ui/global.css';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // Impor font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Terapkan font ke body */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}