import React, { PropsWithChildren } from "react"

const TypographyH1: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="scroll-m-20 text-4xl font-medium">{children}</h1>
)

const TypographyLead: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="text-xl text-muted-foreground">{children}</p>
)

const TypographySmall: React.FC<PropsWithChildren> = ({ children }) => (
  <small className="text-sm font-medium leading-none">{children}</small>
)

export interface TypographyComposition {
  H1: typeof TypographyH1
  Lead: typeof TypographyLead
  Small: typeof TypographySmall
}

const Typography: TypographyComposition = {
  H1: TypographyH1,
  Lead: TypographyLead,
  Small: TypographySmall,
}

export default Typography
