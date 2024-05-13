import React from "react";
import Image from "next/image";
import Link from "next/link";

function Experience() {
  return (
    <div id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Experience
      </h2>
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Image src="/images/daimler.jpeg" height={50} width={50} />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">

            <div class="hidden md:flex items-center justify-between space-x-1 mb-2">
              <div class="font-bold text-slate-900">Daimler Truck North America</div>
              <time class="font-caveat font-medium text-orange-400">
                06/2024 - 12/2024
              </time>
            </div>
            <p class="hidden md:block text-md text-slate-900 mb-2">Cloud Platform Engineer Intern</p>

            <div class="md:hidden sm:block">
              <div class="font-bold text-slate-900">Daimler Truck North America</div>
              <p class="text-md text-slate-900">Cloud Platform Engineer Intern</p>
              <time class="font-caveat font-medium text-orange-400">
              06/2024 - 12/2024
              </time>
            </div>

            <div class="text-slate-600">
              Incoming
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Image src="/images/cambia.jpg" height={50} width={50} />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            
            <div class="hidden md:flex items-center justify-between space-x-1 mb-2">
              <div class="font-bold text-slate-900">Cambia Health Solutions</div>
              <time class="font-caveat font-medium text-orange-400">
                04/2023 - 12/2023
              </time>
            </div>
            <p class="hidden md:block text-md text-slate-900 mb-2">Software Engineer Intern</p>

            <div class="md:hidden sm:block">
              <div class="font-bold text-slate-900">Cambia Health Solutions</div>
              <p class="text-md text-slate-900">Software Engineer Intern</p>
              <time class="font-caveat font-medium text-orange-400">
                04/2023 - 12/2023
              </time>
            </div>
            

            <p class="text-slate-600 text-sm">
            - Designed and implemented a full stack developer portal focused on categorize, track, and monitor micro-services and artifacts. This help improving the workflows and infrastructure visibility for 50+ developers teams.
            <br/>
            - Developed automated processes for Backstage by integrating GitHub APIs across microservices' YAML registration files. The result decouple the dependency of manual registration process for product owners.
            <br/>
            - Conducted behavior-driven unit tests for micro-services against AWS services using Cucumber, LocalStack, and Ruby, resulting in a 10% reduction in errors during deployment into the production environments.
            <br/>
            - Participated in Hackathon and deliver an API generator template for Backstage, reducing time and error for product owner when registering for their services 
            </p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-11 h-11 rounded-full overflow-hidden border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Image src="/images/osu.png" height={50} width={50} />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">

            <div class="hidden md:flex items-center justify-between space-x-1 mb-2">
              <div class="font-bold text-slate-900">Oregon State University</div>
              <time class="font-caveat font-medium text-orange-400">
                04/2022 - 05/2023
              </time>
            </div>
            <p class="hidden md:block text-md text-slate-900 mb-2">Teaching Assistant</p>

            <div class="md:hidden sm:block">
              <div class="font-bold text-slate-900">Oregon State University</div>
              <p class="text-md text-slate-900">Teaching Assistant</p>
              <time class="font-caveat font-medium text-orange-400">
                04/2022 - 05/2023
              </time>
            </div>

            
            <p class="text-slate-600 text-sm">
                Being part of the academic community has been a truly enjoyable experience. 
                In the Analysis of Algorithms class, I guided students through complex concepts like Recursion, Merge Sort, Dynamic Programming, Big-O Notation, and Graph Theory. 
                For the Web Development class, I helped students build their full-stack web apps using frameworks React, JavaScript, Express, and MongoDB. 
                Beyond that, I support students on internships finding and building their portfolio projects.
            </p>
          </div>
        </div>

        {/* <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Image src="/images/tmo.png" height={50} width={50} />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            
            <div class="hidden md:flex items-center justify-between space-x-1 mb-1">
              <div class="font-bold text-slate-900">T-Mobile Inc</div>
              <time class="font-caveat font-medium text-orange-400">
                09/2020 - 03/2023
              </time>
            </div>
            <p class="hidden md:block text-md text-slate-900 mb-2">Sale Specialist</p>

            <div class="md:hidden sm:block">
              <div class="font-bold text-slate-900">T-Mobile</div>
              <p class="text-md text-slate-900">Sale Specialist</p>
              <time class="font-caveat font-medium text-orange-400">
                09/2020 - 03/2023
              </time>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Experience;
