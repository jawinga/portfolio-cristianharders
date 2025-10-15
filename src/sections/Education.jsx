import React from 'react'
import { DirectionAwareHover } from '../components/DirectionAwareHover';
import { CodeEducation } from '../components/CodeEducation';
import { InfiniteMovingCards } from "@/components/InfiniteMovingCards"; // <- adjust path if needed
import { SparklesText } from '../components/SparklesText';
import { HoverButton } from '../components/HoverButton';
import VisibilitySection from '../components/VisibilitySection';
import Button from '../components/Button';

const Education = () => {

   const certificates = [
    {
      title: "Angular 17+ Fundamentals",
      provider: "Frontend Masters",
      image: "/assets/certificates/angular.png",
    },
    {
      title: "React and TypeScript, v2",
      provider: "Frontend Masters",
      image: "/assets/certificates/ts-and-react.png",
    },
    {
      title: "Complete Intro to React, v9",
      provider: "Frontend Masters",
      image: "/assets/certificates/react.jpg",
    },
    {
      title: "Introduction to Node.js, v3",
      provider: "Frontend Masters",
      image: "/assets/certificates/node.jpg",
    },
    {
      title: "JavaScript Essentials 2",
      provider: "Cisco",
      image: "/assets/certificates/js.png",
    },
    {
      title: "UX/UI Design",
      provider: "Memorisely",
      image: "/assets/certificates/ux-ui.png",
    },
  ];

  function downloadCertificate(e){

  e.preventDefault();  
  const link = document.createElement("a");
  link.href = "/assets/certificado.pdf"; 
  link.download = "Certificate_of_Higher_Education.pdf";
  link.click();
  }

function DownloadButton() {
  return (
    <svg
      className="hover:text-blue-700 w-6 h-6 text-gray-900 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
 



  const imageURL = '/assets/ue.png';

  return (

    <div className="c-space section-spacing" id='education'>

<h2 className="text-heading text-center text-6xl">
          
          My Education in <SparklesText>Software Development</SparklesText>
        </h2>       


      <div className="flex flex-col mt-30 md:flex-row items-center justify-start gap-10 text-center md:text-left">



<div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6">

    <CodeEducation></CodeEducation>    

 


  </div>

  {/* Left side — image/hover */}
  <div className="relative h-[18rem] md:h-[24rem] flex flex-col gap-5 items-center justify-center w-full md:w-1/2">
    <DirectionAwareHover imageUrl={imageURL}>
      <p className="font-bold text-xl">Universidad Europea de Madrid</p>
      <p className="font-normal text-sm">Oct 2023 - Jun 2025</p>
    </DirectionAwareHover>
    <Button label="Download Certificate of Higher Education" icon={DownloadButton} onClick={downloadCertificate} />  </div>

  {/* Right side — text */}
  
</div>

<VisibilitySection className="c-space">

 <div className="h-[15rem] mt-30 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards items={certificates} direction="right" speed="slow" />
            </div>

</VisibilitySection>



    </div>

   

   
  )
}

export default Education