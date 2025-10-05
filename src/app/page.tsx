import { Icones } from "@/components/Home/Icones";

export default function Home() {
  return (
    <main className="flex w-full h-screen border border-amber-50 justify-center items-center">
      <div className="flex flex-col w-1/2 h-9/12 border border-amber-50  ">
        <div className="flex gap-4 w-full h-1/3 border border-amber-50 justify-center items-center">
          <Icones>
            <img className="h-14 w-14" src="assets/incon/behance.png" alt=""/>
          </Icones>
          <Icones>
            <img className="h-14 w-14" src="assets/incon/github.png" alt=""/>
          </Icones>
          <Icones>
            <img className="h-14 w-14" src="assets/incon/instagram.png" alt=""/>
          </Icones>
        </div>
      </div>
    </main>
  );
}
