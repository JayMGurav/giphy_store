import GifSearchInput from "@/components/GifSearchInput";
import Gifs from "@/components/Gifs";

export default function Home({
  searchParams,
}:{
  searchParams: {search:string}
}) {
  return (
    <div className="py-10 px-2">
      <GifSearchInput />
      <Gifs search={searchParams.search}/>
    </div>
  );
}
