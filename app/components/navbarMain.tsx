'use client'

import Link from "next/link";
import { Component } from "react";


export default class NavbarMain extends Component {
  render() {
    return (
      <nav className="flex fixed z-100 min-w-screen top-0 items-center justify-end flex-row gap-5">
        <img src="/navbar/Navbar.svg" className="min-w-[200vw] md:min-w-[120vw] translate-x-[10vw] absolute top-[-5%] z-0" alt="" />
        <ul className="flex flex-row gap-5 relative z-2  p-5">
          <li><Link href={'#about'}>ABOUT</Link></li>
          <li><Link href={'#portfolio'}>PORTFOLIO</Link></li>
          <li><Link href={'#contact'}>CONTACT</Link></li>
        </ul>
      </nav>
    )
  }
}


