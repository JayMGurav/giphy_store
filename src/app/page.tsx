import GifSearchInput from "@/components/GifSearchInput";
import Gifs from "@/components/Gifs";

export default function Home({
  searchParams,
}:{
  searchParams: {search:string}
}) {
  return (
    <div className="py-10 px-2">
      <h1 className="text-2xl mb-10 font-bold">Giphy Store</h1>
      <GifSearchInput />
      <Gifs search={searchParams.search}/>
    </div>
  );
}
