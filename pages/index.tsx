import Door from "@/components/door";
import Gift from "@/components/gift";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Door selected number={3}/>
      <Door number={5}/>
      <Gift />
    </div>
  )
}
