"use client";

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
      <CardContainer className="inter-var w-[350px]">
        <CardBody className="bg-[#191919] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            className="w-full mt-4 flex align-center justify-center"
          >
            <Image
              src="profile.png"
              height="1000"
              width="1000"
              className="h-[200px] rounded-full w-[200px] object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
              unoptimized={true}
            />
          </CardItem>
          <CardItem
            translateZ={100}
            className="text-2xl font-bold text-white dark:text-white w-full flex justify-center align-center"
          >
            Darwin Koirala
          </CardItem>

          <div className="flex justify-center items-center mt-2 gap-2">
            <CardItem

              translateZ="100"
              className=" mt-4 flex align-center justify-center"
            >
              <a href='https://www.facebook.com/profile.php?id=61571501834087'>
                <Image
                  src="icons8-facebook-50.png"
                  height="100"
                  width="100"
                  className="h-[50px] rounded-2xl w-[50px] object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                  unoptimized={true}
                />
              </a>
            </CardItem>
            <CardItem

              translateZ="100"
              className=" mt-4 flex align-center justify-center"
            >
              <a href='https://www.instagram.com/darwinisreall/'>
                <Image
                  src="icons8-instagram-logo-50.png"
                  height="100"
                  width="100"
                  className="h-[50px] rounded-4xl w-[50px] object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                  unoptimized={true}
                />
              </a>
            </CardItem>
            <CardItem

              translateZ="100"
              className=" mt-4 flex align-center justify-center"
            >
              <a href='https://github.com/batmanboxer'>
                <Image
                  src="icons8-github-50.png"
                  height="100"
                  width="100"
                  className="h-[50px] rounded-4xl w-[50px] object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                  unoptimized={true}
                />
              </a>
            </CardItem>
            <CardItem

              translateZ="100"
              className=" mt-4 flex align-center justify-center"
            >
              <a href='https://www.linkedin.com/in/darwin-koirala-353a2b338/'>
                <Image
                  src="icons8-linkedin-50.png"
                  height="100"
                  width="100"
                  className="h-[50px] rounded-4xl w-[50px] object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                  unoptimized={true}
                />
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}

