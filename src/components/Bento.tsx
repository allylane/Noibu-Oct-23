import Image from 'next/image'
import Releases from '@/images/releases.png'
export const Bento = () => {
    return (
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
            <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl">
                Rich with <span className="editorial-italic text-blue-800">e-commerce</span> focussed features.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-2xl text-slate-900">
                Proactively look after your online store.
                Identify issues, improve performance and retain revenue.
            </p>
            </div>
            <div className="container mx-auto p-6 grid grid-cols-3 gap-6">
                <div className= "text-white flex flex-col items-center justify-center col-span-full lg:col-span-1 row-span-2 rounded-md ring-1 ring-gray-900/10">
                    <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                        Monitor first & third party releases.
                    </h2>
                    <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center">
                    Track releases across your e-commerce stack in one spot, making it simpler to link issues to releases.
                    </p>
                    <Image
                      src={Releases.src}
                      alt="App screenshot"
                      width={2432}
                      height={1423}
                    />
                </div>
                <div className="bg-gray-600 text-white flex flex-col items-center justify-center col-span-1 row-span-2">
                    <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl text-center">
                        2
                    </h2>
                </div>
                <div className="bg-gray-500 text-white flex flex-col items-center justify-center col-span-1 row-span-1">
                    <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl text-center">
                        3
                    </h2>
                </div>
                <div className="bg-gray-500 text-white flex flex-col items-center justify-center col-span-1 row-span-1">
                    <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl text-center">
                        4
                    </h2>
                </div>
                <div className="bg-gray-600 text-white flex flex-col items-center justify-center col-span-1 row-span-2">
                    <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl text-center">
                        5
                    </h2>
                </div>
                <div className="bg-gray-700 text-white flex flex-col items-center justify-center col-span-2 row-span-2">
                    <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl text-center">
                        6
                    </h2>
                </div>
            </div>
        </div>
    );
};
