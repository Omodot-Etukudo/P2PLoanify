import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import { MicrophoneIcon }  from "@heroicons/react/outline"
import Button from "../base/Button"
import { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition";
export default function Hero() {

    const { scrollYProgress } = useScroll();
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const TEXTS = [
        "intuitive.",
        "beautiful.",
        "functional.",
      ];
    const COLORS = [
        "text-green-400",
        "text-pink-300",
        "text-orange-500"
        

    ]
    
    return (
      
     <div className=" sm:px-6 lg:h-full md:h-screen h-full lg:px-20 md:px-14 px-6 lg:py-24 md:py-12 py-8  lg:grid lg:grid-flow-col lg:grid-cols-6 md:grid md:grid-flow-col md:grid-cols-2 gap-10 flex flex-col space-y-6">
            <div className="lg:col-span-4 flex flex-col space-y-24 justify-center items-start">
                <div className="flex flex-col space-y-6 justify-center items-start">
                    <motion.div initial={{ scale:0 , x:-500 }} animate={{scale:1, x:0}} transition={{ type: "spring", stiffness: 80, damping: 10  }} className=" w-36 px-2 py-1 bg-yellow-400 text-gray-900 text-sm  border-2 border-white flex justify-between items-center relative">
                        <p>hi, i&apos;m omodot</p>
                        <MicrophoneIcon width={20}  height={20}/>
                        <Image alt="Mouse-Icon" className="absolute -left-8 -top-8" width={40} height={40} src="/assets/mouse-icon.png" />
                    </motion.div>

                    <div className="flex flex-col space-y-2 relative">
                        <h1 className="font-heading lg:text-8xl md:text-7.5xl text-6xl font-bold leading-none text-gray-100">i design & build product experiences that are <span className={`${COLORS[index % COLORS.length]} relative `}><span><TextTransition direction="down" inline={true} springConfig={presets.wobbly} >{TEXTS[index % TEXTS.length]}</TextTransition ></span> <div className="absolute right-0 top-6 h-3/4 w-full bg-purple-500 bg-opacity-10 border-purple-500 border border-dashed "></div></span></h1>
                        <p className="text-gray-300 leading-relaxed font-light lg:text-lg md:text-lg text-base">my goal is always to create innovative and intuitive product experiences that delight and inspire but never interfere with the unique senses of <span className=" text-pink-300">interaction</span> and <span className="text-green-200">natural responses.</span> I am a software product designer that creates human-centered products to suit collective user needs.</p>
                        <Image alt="Star-Icon" src="/assets/star-icon.png" width={50} height={50} className="absolute left-32 bottom-36 opacity-70 lg:block md:hidden hidden"  />
                        <Image alt="Heart-Icon" src="/assets/heart-icon.png" width={50} height={50} className="absolute right-36 top-20 opacity-70 lg:block md:hidden hidden"  />
                    </div>

                    
                    <div className="flex flex-col space-y-4 justify-start items-start md:flex-row md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0  w-full">
                        <Button isPrimary text="my work" linkTo="" />
                        <Button text="get in touch" linkTo="" />
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col space-y-20 justify-center items-center lg:w-96 md:w-96 lg:px-0 md:px-0 px-4 w-full">
                <motion.div initial={{ scale:0 , opacity:0, rotate: 100 }} whileInView={{ scale:1 , opacity:100, rotate: 10 }} transition={{ type: "spring", stiffness: 80, damping: 10 }} className="lg:col-span-2 w-full lg:h-96 md:h-96 h-96 bg-gray-900 border border-gray-800  flex justify-center items-center">
                    {/* <Image src="/assets/hero-image.png" width={1500} height={1500} className="w-full h-3/4" /> */}
                </motion.div>
                <div className="flex justify-center items-center space-x-8 w-full text-gray-200">
                    <a> linkedin</a><a>github</a><a>twitter</a>
                </div>
            </div>
     </div>
      
    )
}  
    
    
    
    
    
    
    
    
    