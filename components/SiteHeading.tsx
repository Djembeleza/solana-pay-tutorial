import { PropsWithChildren } from "react";

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="text-8xl my-8 font-extrabold self-center text-transparent text-center bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">{children}</h1>
}
