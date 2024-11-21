import { PropsWithChildren, Suspense } from "react"

const SuspenseLoader = ({children}: PropsWithChildren) => {
  return (
    <Suspense fallback={<div className="flex-centered">Loading Page...</div>}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoader;
