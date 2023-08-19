import UList from "@/components/UList"
import data from "./data.json"
import Category from "./Category"
import localfont from "next/font/local"

const font = localfont({
    src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
    display: "swap"
})

export default () => (
    <main className={font.className}>
        <section
            className="flex flex-col items-center 
                text-center gap-y-6 py-6 
                text-white
                bg-gradient-to-b from-[#6943ff] to-[#2f2ce9] 
                rounded-b-[2rem]
                shadow-[0_30px_60px_rgba(61,108,236,0.15)]"
        >
            <p className="font-bold text-lg">Your Result</p>
            <div className="rounded-full bg-gradient-to-b from-[#4d21c9] h-[140px] w-[140px] grid place-content-center">
                <p className="text-6xl font-bold leading-[4.5rem]">76</p> 
                <p className="text-light-blue">of 100</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold">Great</p>
                <p className="text-light-blue font-medium max-w-[260px] py-2">Your performance exceed 65% of the peaople conducting the test here!</p>
            </div>
        </section>
        <section className="px-[30px]">
            <p className="py-6 font-bold text-lg">Summary</p>
            <UList
                className="grid gap-y-4"
                items={data}
                itemHandler={item => <Category {...item} />}
            />
            <button className="text-white bg-dark-navy rounded-[8rem] h-14 w-full my-6 font-bold">Continue</button>
        </section>
    </main>
  
  
)