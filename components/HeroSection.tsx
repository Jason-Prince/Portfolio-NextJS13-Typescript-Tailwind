'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:py-52 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full"
            src="/headshot.jpeg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            Hi, I&#39;m Jason!
          </h1>
          <p className="mb-6 mt-4 text-lg md:text-2xl">
            I&#39;m a{' '}
            <span className="font-semibold text-teal-600">
              Software Engineer{' '}
            </span>
            based in Salt Lake City, UT. Working towards creating software that
            make life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
