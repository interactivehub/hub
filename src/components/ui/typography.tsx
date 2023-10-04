import React, { PropsWithChildren } from "react"

const TypographyH1: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
)

export interface TypographyComposition {
  H1: typeof TypographyH1
}

const Typography: TypographyComposition = {
  H1: TypographyH1,
}

export default Typography
