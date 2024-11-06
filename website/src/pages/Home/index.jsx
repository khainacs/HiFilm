import CarouselSlide from "./components/CarouselSlide";
import NewReleaseMovie from "./components/NewReleaseMovie";
import TopRatedMovies from "./components/TopRatedMovies";
export default function Home(){
    return (
        <main>
            <div className=" flex flex-col items-center justify-center">
                <NewReleaseMovie/>
                <CarouselSlide/>
                <TopRatedMovies/>
            </div>
        </main>
    );
}
// bị gì vậy ta