"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function MainNav() {
  const [state, setState] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <button
        className="pr-2 absolute md:hidden right-0 top-4"
        title="menu"
        onClick={() => setState(!state)}
      >
        <Menu />
      </button>
      <header className="sm:px-8 md:px-0 py-4 shadow bg-white">
				<div className="max-w-7xl flex justify-between md:px-16 mx-auto">
					{!state ? (
						<Link
							href="/"
							aria-label="Back to homepage"
							className=" flex md:justify-center justify-start items-center gap-3"
						>
							<img src="/bazemore-law-logo.jpg" width="200" />
						</Link>
					) : null}
					<div className="flex flex-1 justify-end items-center">
							<div
								className={`flex flex-row justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
									state ? "block" : "hidden"
								}`}
							>
								<div className="flex items-center">
									<div className="flex-shrink-0">
										(806) 994-2060
									</div>
									<div className="flex-shrink-0 px-3 py-2 bg-blue-600 text-white">
										<a className="text-center" target="_blank" href="https://secure.lawpay.com/pages/bazemore-law-firm-pllc/operating">
											Pay Invoice
										</a>
									</div>
								</div>
						</div>
					</div>
        </div>
      </header>
    </div>
  );
}
