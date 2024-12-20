import ListProducts from "./components/listProducts";
import Filter from "./components/Filter";
import SiderBar from "./components/SideBar";
export default function Movies(){
    return(
        <main className="w-full flex flex-col mt-14 bg-slate-900 bg-opacity-95 justify-center items-center min-h-screen">
           <div className="w-[70%] h-full bg-Gray-Black-800 font-nunito ">
                 {/* Phần tử Phim Bộ */}
                <div className="flex w-full justify-center border-b-[1px] p-3 text-[30px] text-white font-nunito font-bold">
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