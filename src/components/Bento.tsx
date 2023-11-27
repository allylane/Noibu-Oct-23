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
      <div className="mx-auto max-w-2xl pb-8 pt-12 text-center">
        <h2 className="font-display text-balance text-25xl mx-auto font-medium text-white sm:text-4xl">
          Rich with <span className="editorial-italic">e-commerce</span>{' '}
          focussed features.
        </h2>
        <p className="text-balance mx-auto mt-6 max-w-2xl text-2xl text-white">
          Designed to meet the specific monitoring needs of e-commerce teams.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-6 p-6 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col items-center justify-between rounded-md text-white ring-1 ring-gray-50/20 lg:col-span-1">
          <div>
            <h2 className="text-balance text-25xl mx-auto px-4 pt-10 text-center text-white">
              Identify and action issues within minutes
            </h2>
            <p className="text-balance mx-auto mt-4 px-4 text-center text-lg text-white">
              Be alerted to new issues and associate them with code releases.
            </p>
          </div>
          <Image
            src={Identify.src}
            className="mb-4"
            alt="Identify"
            width={292}
            height={108}
          />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-between overflow-hidden rounded-md text-white ring-1 ring-gray-50/20">
          <div>
            <h2 className="text-balance text-25xl mx-auto px-4 pt-10 text-center text-white">
              Detailed code breakdowns
            </h2>
            <p className="text-balance mx-auto mt-4 px-4 text-center text-lg text-white">
              We collect every piece of code impacting an issue and paint the
              picture of how it led to the error.
            </p>
          </div>
          <Image
            src={CodeBreakdowns.src}
            alt="Code Breakdown"
            width={800}
            height={200}
            objectFit="contain"
            objectPosition="center"
            className="mt-4 block"
          />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-between rounded-md text-white ring-1 ring-gray-50/20 lg:col-span-1">
          <div>
            <h2 className="text-balance text-25xl mx-auto px-4 pt-10 text-center text-white">
              Smart issues, simply explained
            </h2>
            <p className="text-balance mx-auto mt-4 px-4 text-center text-lg text-white">
              We translate complex technical issues into something anyone can
              understand.
            </p>
          </div>
          <Image
            src={SmartIssues.src}
            alt="SmartIssues"
            width={390}
            height={204}
          />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-between rounded-md text-white ring-1 ring-gray-50/20 lg:col-span-1">
          <div>
            <h2 className="text-balance text-25xl mx-auto px-4 pt-10 text-center text-white">
              Monitor first & third party releases.
            </h2>
            <p className="text-balance mx-auto mt-4 px-4 text-center text-lg text-white">
              Track e-commerce releases and issues in one place.
            </p>
          </div>
          <Image src={Releases.src} alt="Releases" width={346} height={181} />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-between rounded-md text-white ring-1 ring-gray-50/20 lg:col-span-1">
          <div>
            <h2 className="text-balance text-25xl mx-auto px-4 pt-10 text-center text-white">
              Record every user session
            </h2>
            <p className="text-balance mx-auto mt-4 px-4 text-center text-lg text-white">
              Watch back every session from your online store and help your team
              understand their experience.
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
  )
}
