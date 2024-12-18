import { PropsWithChildren, Suspense } from "react"
import Loading from "../Loading/Loading";

const SuspenseLoader = ({children}: PropsWithChildren) => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoader;
