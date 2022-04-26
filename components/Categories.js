import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Category({ id, name, icon, url }) {
  return (
    <div className="max-w-7xl m-auto">
      <ul role="list" className="">
        <Link href={url} className="">
          <li
            key={id}
            className="col-span-1 flex shadow-sm rounded-md cursor-pointer "
          >
            <div className="bg-gradient-to-r from-slate-200 to-white flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md border border-slate-100">
              <Image src={icon} alt={name} width="25" height="25" />
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href={url}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {name}
                </a>
                <p className="text-gray-500">Category</p>
              </div>
              <div id="top-categories" className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
