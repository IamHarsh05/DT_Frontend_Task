import { Menu, Transition } from "@headlessui/react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import { HomeIcon, Logo, ToolIcon } from "../Icons/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function DashboardTop() {
  return (
    <div className="fixed z-20 md:z-50 px-4 w-full bg-slate-200">
      <div className="flex flex-col z-0 md:flex-row ">
        <div className="min-w-0 my-4 px-4 flex-1 md:my-2">< Logo/></div>
        <div className="mt-5 flex items-center lg:ml-4 lg:mt-0">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-blue-500 mx-2 px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              <HomeIcon/>
            </button>
          </span>
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-blue-500 mx-2 px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              <ToolIcon/>
            </button>
          </span>

          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-blue-500 px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              <BellIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon
                className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Top"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Notifications
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Top"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      User
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}