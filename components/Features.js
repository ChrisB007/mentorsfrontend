import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const actions = [
  {
    title: 'Mentorship',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description: 'Repetitive, interactive,wards.',
  },
  {
    title: 'Gamification',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    description:
      'Whether you’re a beginner trying to learn something new, intermediate or an expert trying to level up skills, our mentors will help you learn faster and more efficiently through repetitive, interactive, and structured lesson plans that encourages you to practice, practice, practice.',
  },
  {
    title: 'Learning',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    description:
      'Better than tutorials or online lectures, our approach is to get all mentees started at level zero, encourage repetition to solidify learning, and provide hands-on training as you progress through levels. Think of it as a video game where you wont be able to advance further until you pass current level.',
  },
  {
    title: 'Session Size',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    description:
      'Each session is scheduled on hourly / daily / weekly basis, and is not more than five mentees per mentor. We require a weekly commitment of at least five hours per week to be successful.',
  },
  {
    title: 'One-on-one mentorship',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    description:
      'While we encourage you to seek help from other mentees in your session, you can also schedule one-on-one mentorship sessions as you see fit with experts if you are struggling at any level.',
  },
  {
    title: 'Challenges and Real-world Rewards',
    href: '#',
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    description: 'Repetitive, interactive, and rewards.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Features() {
  return (
    <div
      id="top-category"
      className="rounded-lg bg-gray-200 overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px max-w-7xl m-auto shadow-md"
    >
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white',
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-lg text-gray-700">{action.description}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
