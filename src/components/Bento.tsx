import Image from 'next/image'
import Releases from '@/images/releases.png'
import Identify from '@/images/identify.png'
import Browsers from '@/images/browsers.png'
import RecordSession from '@/images/recordsession.png'
import CodeBreakdowns from '@/images/codebreakdowns.png'
import SmartIssues from '@/images/smartissues.png'

export const Bento = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center pt-12 pb-8">
                <h2 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-6xl">
                    Rich with <span className="editorial-italic text-blue-800">e-commerce</span> focussed features.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-2xl text-slate-900 text-balance">
                    Designed to meet the specific monitoring needs of e-commerce teams.
                </p>
            </div>

            <div className="container mx-auto p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="text-white flex flex-col justify-between items-center col-span-2 lg:col-span-1 rounded-md ring-1 ring-gray-900/10">
                    <div>
                        <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                            Identify and action issues within minutes
                        </h2>
                        <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center text-balance">
                            Be alerted to new issues and associate them with code releases.
                        </p>
                    </div>
                    <Image
                        src={Identify.src}
                        alt="Identify"
                        width={292}
                        height={108}
                    />
                </div>


                <div className="text-white flex flex-col justify-between items-center col-span-2 rounded-md ring-1 ring-gray-900/10">
                    <div>
                        <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                            Detailed code breakdowns
                        </h2>
                        <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center text-balance">
                            We collect every piece of code impacting an issue and paint the picture of how it led to the error.
                        </p>
                    </div>
                    <Image
                        src={CodeBreakdowns.src}
                        alt="Code Breakdown"
                        width={800}
                        height={208}
                    />
                </div>


                <div className="text-white flex flex-col justify-between items-center col-span-2 lg:col-span-1 rounded-md ring-1 ring-gray-900/10">
                    <div>
                        <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                        Smart issues, simply explained
                        </h2>
                        <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center text-balance">
                        We translate complex technical issues into something anyone can understand.
                        </p>
                    </div>
                    <Image
                        src={SmartIssues.src}
                        alt="SmartIssues"
                        width={390}
                        height={204}
                    />
                </div>

                


                <div className="text-white flex flex-col items-center col-span-2 lg:col-span-1 rounded-md ring-1 ring-gray-900/10">
                    <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                        Monitor first & third party releases.
                    </h2>
                    <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center text-balance">
                        Track releases across your e-commerce stack in one spot, making it simpler to link issues to releases.
                    </p>
                    <Image
                        src={Releases.src}
                        alt="Releases"
                        width={346}
                        height={181}
                    />
                </div>

                <div className="text-white flex flex-col justify-between items-center col-span-2 lg:col-span-1 rounded-md ring-1 ring-gray-900/10">
                    <div>
                        <h2 className="mx-auto text-slate-900 text-3xl text-center px-4 pt-10 text-balance">
                        Record every user session
                        </h2>
                        <p className="mx-auto mt-4 px-4 text-xl text-slate-900 text-center text-balance">
                            Watch back every session from your online store and help your team understand their experience.
                        </p>
                    </div>
                    <Image
                        src={RecordSession.src}
                        alt="Record Session"
                        width={397}
                        height={757}
                    />
                </div>
            </div>
        </div>
    );
};

