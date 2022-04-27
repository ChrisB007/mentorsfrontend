import { CheckIcon } from '@heroicons/react/outline';

const pricing = {
  tiers: [
    {
      title: 'Hobby',
      price: 0,
      frequency: '/month',
      description:
        'Offer mentorship FREE to individuals from the kindness of your heart.',
      features: [
        '5 mentees per session',
        'One-on-One sessions',
        'Integrated tools',
        'Schedule Sessions at your own time',
      ],
      cta: 'Start Today',
      mostPopular: false,
    },
    {
      title: 'Freelancer',
      price: 99,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        'All Hobby plans & features',
        'Set your group session rates',
        'Set One-on-One session rates',
        'Sell tutorials & supporting session merchandises',
        'Set affiliate links for revenue opportunities',
        'Promotion/Marketing included',
        'Recurring revenue opportunities',
      ],
      cta: 'Start Today',
      mostPopular: true,
    },
    {
      title: 'Teams',
      price: 199,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'All Freelancer plans & features',
        'Add & manage team members',
        'Set & manage rates for individual team member and sessions',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Start Today',
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl text-center">
        Offer mentorship to our community.
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500 text-center m-auto">
        Offer mentorship and guidance to bevy number of users looking to
        up-skill and get rewarded financially and morally for it. Mentor users
        for free or make recurring income by setting your own rates, schedules
        and more.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {/*{pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-slate-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-slate-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={classNames(
                tier.mostPopular
                  ? 'bg-slate-500 text-white hover:bg-slate-600'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium',
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}*/}
      </div>
    </div>
  );
}
