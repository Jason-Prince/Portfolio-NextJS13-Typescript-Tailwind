import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pb-48 md:pt-16">
        <h1 className="text-center text-4xl font-bold">
          About Me
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500" />
        </h1>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-left">
              Get to know me!
            </h2>
            <p>
              Hi, my name is Jason and I am a{' '}
              <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span> software engineer
              based in Salt Lake City, UT.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum aut repellendus dignissimos in? Sit esse itaque architecto
              facere, praesentium provident perferendis asperiores ipsa,
              doloribus a corrupti vero earum soluta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum aut repellendus dignissimos in? Sit esse itaque architecto
              facere, praesentium provident perferendis asperiores ipsa,
              doloribus a corrupti vero earum soluta.
            </p>
            <br />
            <p>
              I believe that you should{' '}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-left">
              My Skills
            </h2>
            <div className="flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="mr-2 mt-2 rounded bg-gray-200 px-4 py-2 font-semibold text-gray-500"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              className="hidden md:relative md:bottom-4 md:top-4 md:z-0 md:block"
              src="https://placehold.co/325"
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
