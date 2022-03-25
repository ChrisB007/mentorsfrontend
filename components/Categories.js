import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: 'Art',
    initials: 'GA',
    href: '/categories/art',
    category: 16,
    bgColor: 'bg-teal-600',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-art-online-education-flaticons-lineal-color-flat-icons.png',
  },
  {
    name: 'Craft',
    initials: 'CD',
    href: '/categories/craft',
    category: 12,
    bgColor: 'bg-red-600',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-craft-edutainment-flaticons-lineal-color-flat-icons.png',
  },
  {
    name: 'Music',
    initials: 'T',
    href: '/categories/music',
    category: 16,
    bgColor: 'bg-zinc-100',
    icon: 'https://img.icons8.com/office/16/000000/maracas.png',
  },
  {
    name: 'Technology',
    initials: 'RC',
    href: '/categories/tech',
    category: 8,
    bgColor: 'bg-amber-500',
    icon: 'https://img.icons8.com/dusk/64/000000/computer.png',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Category() {
  return (
    <div className="max-w-7xl m-auto pb-3">
      <h2 className="text-gray-500 text-center text-xs font-medium uppercase tracking-wide">
        Top Categories
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-3"
      >
        {projects.map((project) => (
          <>
            <Link href={project.href} className="">
              <a>
                <li
                  key={project.name}
                  className="col-span-1 flex shadow-sm rounded-md cursor-pointer "
                >
                  <div
                    className={classNames(
                      project.bgColor,
                      'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
                    )}
                  >
                    <Image
                      src={project.icon}
                      alt={project.name}
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      <a
                        href={project.href}
                        className="text-gray-900 font-medium hover:text-gray-600"
                      >
                        {project.name}
                      </a>
                      <p className="text-gray-500">
                        {project.category} Categories
                      </p>
                    </div>
                    <div id="top-categories" className="flex-shrink-0 pr-2">
                      <button
                        type="button"
                        className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              </a>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}
