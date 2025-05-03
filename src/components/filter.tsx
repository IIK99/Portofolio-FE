"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

interface FilterSidebarProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function Filter({ show, setShow }: FilterSidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 z-40 bg-white border-r-2 border-gray-200 w-64 lg:w-[270px] h-full lg:h-auto transform transition-transform duration-300 ease-in-out
        ${show ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
        flex flex-col rounded-r-lg shadow-lg lg:shadow-none overflow-y-auto`}
      >
        <div className="flex items-center justify-between bg-blue-400 px-4 py-3 sticky top-0 z-10">
          <h2 className="font-extrabold text-xl tracking-wide text-white">
            Filter
          </h2>
          <IoCloseOutline
            className="lg:hidden w-8 h-8 cursor-pointer text-white"
            onClick={() => setShow(false)}
          />
        </div>

        {/* Search */}
        <div className="px-4 py-3 flex flex-col gap-2">
          <span className="font-medium text-lg">Search</span>
          <form className="flex h-12 bg-white rounded-lg border border-gray-300">
            <input
              type="text"
              placeholder="Find by title"
              className="w-full px-3 text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-400 px-3 flex items-center justify-center rounded-r-lg"
            >
              <FiSearch className="h-5 w-5 text-white" />
            </button>
          </form>
        </div>

        {/* Categories */}
        <hr className="my-2" />
        <div className="px-4 py-2 flex flex-col gap-2">
          <span className="font-medium text-lg">Categories</span>
          <ul className="space-y-2">
            {[
              "Suku & Budaya",
              "Tempat Bersejarah",
              "Pantai/Gunung",
              "Makanan Khas",
            ].map((cat, i) => (
              <li key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-0"
                />
                <label className="text-sm capitalize">{cat}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Sort */}
        <hr className="my-2" />
        <div className="px-4 py-2 mb-6 flex flex-col gap-2">
          <label htmlFor="sort" className="font-medium text-lg">
            Sort
          </label>
          <select className="border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-gray-400">
            <option value="">Random</option>
            <option value="ASCENDING">Date Latest</option>
            <option value="DESCENDING">Date Oldest</option>
            <option value="HIGHEST">Highest Price</option>
            <option value="LOWEST">Lowest Price</option>
          </select>
        </div>
      </div>

      {/* Toggle button for mobile */}
      {!show && (
        <button
          className="lg:hidden fixed bottom-5 left-5 z-50 bg-blue-500 p-3 rounded-full shadow-lg"
          onClick={() => setShow(true)}
        >
          <FiSearch className="text-white w-6 h-6" />
        </button>
      )}
    </>
  );
}
