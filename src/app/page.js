import Counter from "@/components/Counter/Counter"
import Link from "next/link"


const HomePage = () => {
  // throw new Error()

  return (
    <div>
      <h2>HomePage: </h2>
      <Counter />
     <Link href="/"> <button className="btn-accent">Home</button></Link>
     <Link href="/about"> <button className="btn-accent">About</button></Link>
     <Link href="/news"> <button className="btn-accent">News</button></Link>
     <Link href="/products"> <button className="btn-accent">Products</button></Link>
    </div>
  )
}

export default HomePage