import { SelectSongStreaming } from '@/components/Select/select'
import streamingOptions from '@/data/streamingOptions'
import ButtonWIcon from '@/components/ButtonWIcon';
import { BiSolidPlaylist } from "react-icons/bi";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="bg-black p-8 flex flex-col items-center" >
          <BiSolidPlaylist style={{ fontSize: "50px" }} />
          <div className="py-4">
            <SelectSongStreaming streamings={streamingOptions} selectLabel="Onde a playlist está?" />
            <SelectSongStreaming streamings={streamingOptions} selectLabel="Para qual streaming deseja converter?" />
          </div>
          <ButtonWIcon />
        </div>
      </main>
    </div>
  );
}