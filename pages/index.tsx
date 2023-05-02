import Door from "@/components/door";
import Gift from "@/components/gift";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Door selected />
      <Door />
      <Gift />
    </div>
  )
}
