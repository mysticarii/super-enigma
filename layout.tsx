import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "CoreDevs - آژانس اتوماسیون هوشمند",
  description: "اتصال فروشگاه‌های اینستاگرامی و آنلاین‌شاپ‌ها به AI برای فروش و پشتیبانی (واتساپ/دایرکت).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        />
        <meta name="theme-color" content="#05070f" />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
