'use client'

import Link from "next/link";
import { Component } from "react";


export default class NavbarMain extends Component {
  render() {
    return (
      <nav className="flex fixed text-white z-100 min-w-screen top-0 items-center justify-center md:justify-end flex-row gap-5">
        <img src="/navbar/Navbar.svg" className="min-w-[250vw] md:min-w-[120vw] translate-x-[45vw] md:translate-x-[10vw] absolute top-[-5%] z-0" alt="" />
        <ul className="flex font-[var(--font-pirata-one)] text-xl md:text-3xl flex-row gap-10 relative z-2  p-5 md:pr-20">
          <li><Link href={'#about'} className="">ABOUT</Link></li>
          <li><Link href={'#portfolio'}>PORTFOLIO</Link></li>
          <li><Link href={'#contact'}>CONTACTS</Link></li>
        </ul>
      </nav>
    )
  }
}


