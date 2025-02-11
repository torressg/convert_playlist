import { Button } from "@chakra-ui/react"
import { RxLoop } from "react-icons/rx";

export default function ButtonWIcon() {
  return (
    <Button className="bg-white text-black p-4">
      <RxLoop /> Converter
    </Button>
  )
}