import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Calendar from '../calendar';

export default function Modal({ show, close }) {
  let [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={(open = show)} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full lg:w-3/5 sm:p-6">
              <div className="space-y-6">
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    {/*Bio section*/}
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Profile
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Bio
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm indent-4 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="Tell us about yourself, your accomplishments, and your interests e.t.c."
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Your Approach to mentorship
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm indent-2 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="Share how you approach mentorship, what makes you different from other mentors."
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expected Outcome
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm indent-4 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="What should people expect to gain, and how can you help them achieve their goals."
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <fieldset>
                          <div>
                            <legend className="text-base font-medium text-gray-900">
                              Would you like to offer group sessions?
                            </legend>
                            <p className="text-sm text-gray-500">
                              By default you will be offering one-on-one
                              sessions.
                            </p>
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                defaultChecked
                                type="radio"
                                className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
                              />
                              <label
                                htmlFor="push-everything"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
                              />
                              <label
                                htmlFor="push-email"
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Profile photo
                          </label>
                          <div className="mt-1 flex items-center space-x-5">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <button
                              type="button"
                              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/*Curriculum section*/}
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  Thank you for the above input. The next step is to set up you
                  curriculum - Don't worry, we'll guide you through it.
                </div>

                {/*Availability section*/}
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  Thank you for the above input. The next step is to set up you
                  curriculum - Don't worry, we'll guide you through it.
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen((open = close))}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
