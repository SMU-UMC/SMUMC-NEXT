import type { ReactNode } from "react";

export default function NoticeLayout({ children }: { children: ReactNode }) {
	return <div className="bg-zinc-50">{children}</div>;
}
