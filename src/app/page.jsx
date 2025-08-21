import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      <div className="flex">

      <Image src={'https://images.unsplash.com/photo-1754910567873-91ae04195d61?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="night" width={600} height={450} />

      <Image src={'/katie.jpg'} alt="night" width={600} height={450} />
      </div>
      <h1>welcome to volts program</h1>
    </main>
    </>
  )
}