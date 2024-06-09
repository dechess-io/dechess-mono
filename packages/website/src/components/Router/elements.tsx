import React, { lazy, Suspense } from "react"

export const create =
  (
    Inner: React.LazyExoticComponent<React.FC>,
    Loading?: React.ReactNode,
  ): React.FC =>
  () => {
    if (Loading) return <Suspense fallback={Loading}>{<Inner />}</Suspense>
    return <Suspense fallback={<div></div>}>{<Inner />}</Suspense>
  }

export const Home = create(lazy(() => import("../../screens/Home")))
