import { useCounter } from "../hooks/useCounter"
function CounterCustomHook() {
  const { counter } = useCounter()
  return (
    <>
      <h2>counter with custom hook : {counter}</h2>
      <div className="container d-flex gap-2">
        <button className="btn btn-success">+1</button>
        <button className="btn btn-primary">reset</button>
        <button className="btn btn-dark">-1</button>
      </div>
    </>
  )
}

export default CounterCustomHook