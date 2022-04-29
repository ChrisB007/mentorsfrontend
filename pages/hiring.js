/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid';

const includedFeatures = [
  'Paid Time Off including vacation',
  'Company wide events and outings',
  'Comprehensive health',
  'A competitive compensation plan with opportunity for advancement',
];

export default function Hiring() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              We are hiring!
            </h2>
            <p className="mt-4 text-xl text-gray-600">Current Opportunities</p>
          </div>
        </div>
      </div>
      {/*Shows list of hiring opportunities*/}
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  In-house Mentors
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  We are looking for experienced individual (the mentor) to
                  imparts knowledge, expertise and wisdom to our users seeking
                  mentorship. We want someone who can effective provide
                  professionally guidance to our users mentees while maintaining
                  friendly and supportive relationship. We want individuals who
                  would always have the mentees best interests in mind and
                  tailor their mentorship style to meet the needs of the
                  mentees.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Benefits
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  {/*Goes through and describes the benefits of the position.*/}
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Fully Remote
                </p>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Full Stack Engineer
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  As an Engineer, you will work with a passionate group of
                  engineers to improve end to end systems. You will write clean,
                  testable, and efficient code, help build components and
                  interactive features. Assist in the development of products,
                  including implementation, and deployment. Help the team in
                  decision making and prioritization against our company and
                  team objectives. Provide mentorship to junior engineers and
                  lead by example .<br />
                  <b>About You:</b>
                  <br />
                  You have 3+ years of professional full stack development
                  experience and a high level of comfort with
                  Javascript/React/Redux/PostgreSQL/MongoDB You have previous
                  experience building performant web applications at scale You
                  have experience with distributed system performance analysis
                  and optimisation You have experience in modern frameworks and
                  design patterns (MVC, REST, Swagger/OpenAPI)
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Benefits
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  {/*Goes through and describes the benefits of the position.*/}
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Fully Remote
                </p>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  President, New Business Development
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  As President of Business Development and clientele
                  partnerships you will lead and manage the aggregate sales
                  process with prospective, enterprise level clients. You will
                  play a role in all aspects of the commercial business
                  including build-out of internal sales processes, identifying
                  and developing strong revenue opportunities, account
                  development, managing strategic initiatives and the onboarding
                  of new accounts. As an experienced sales leader and people
                  manager, you will leverage your vast professional knowledge of
                  best sales practices and apply that to the development of your
                  team, creating scalable and repeatable processes while driving
                  revenue growth across existing and new markets.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      Benefits
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  {/*Goes through and describes the benefits of the position.*/}
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Fully Remote
                </p>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample{' '}
                    <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
