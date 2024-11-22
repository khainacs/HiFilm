import ListProducts from "./components/listProducts";
import Filter from "./components/Filter";
import SiderBar from "./components/SideBar";
export default function Movies(){
    return(
        <main className="w-full flex flex-col mt-14 bg-Gray-Black-500 justify-center items-center min-h-screen">
           <div className="w-[70%] h-full bg-Gray-Black-800">
                 {/* Phần tử Phim Bộ */}
                <div className="flex w-full justify-center border-b-[1px] p-3 bg-Gray-Black-800 text-Light-Cream-500 text-2xl font-sans">
                    Phim Bộ
                </div>
            
                {/* Phần chứa Filter và SiderBar */}
                <div className="flex  flex-grow h-full">
                    <div className="flex w-full h-full">
                        <div className="flex-grow h-full">
                            <Filter />
                            <ListProducts />
                        </div>
                        <div className="w-2/5 h-full">
                            <SiderBar />
                        </div>
                    </div>
                </div>
           </div>
        </main>
        
    );
}