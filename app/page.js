import UList from "@/components/UList"
import data from "./data.json"
import Category from "./Category"

export default () => (
    <main className="md:w-[736px] md:grid md:items-center grid-cols-2 md:bg-white md:rounded-[2rem] md:shadow-[0_30px_60px_rgba(61,108,236,0.15)]">
        <section
            className="
                grid gap-y-6 py-6 justify-items-center
                
                px-[30px]

                text-center text-white
                bg-gradient-to-b from-[#6943ff] to-[#2f2ce9] 
                rounded-b-[2rem]
                shadow-[0_30px_60px_rgba(61,108,236,0.15)]

                transition

                cursor-pointer
                
                md:gap-y-9 md:py-10
                md:px-[40px]
                md:rounded-[2rem]
                md:shadow-none
                hover:from-transparent hover:to-transparent"
        >
            <p className="font-bold text-lg md:text-2xl">Your Result</p>
            <div className="rounded-full bg-gradient-to-b from-[#4d21c9] h-[140px] w-[140px] md:h-[200px] md:w-[200px] grid place-content-center">
                <p className="text-[3.5rem] md:text-[4.5rem] leading-[4.5rem] font-bold">76</p> 
                <p className="text-light-blue md:text-lg">of 100</p>
            </div>
            <div className="max-w-[260px] grid gap-2 md:gap-3">
                <p className="text-2xl md:text-[2rem] font-bold">Great</p>
                <p className="text-light-blue md:text-lg">Your performance exceed 65% of the people conducting the test here!</p>
            </div>
        </section>
        <section className="
            grid gap-y-6 py-6

            px-[30px]

            md:gap-y-9 md:py-10
            md:px-[40px]"
        >
            <p className="font-bold text-lg md:text-2xl">Summary</p>
            <UList
                className="grid gap-y-4"
                items={data}
                itemHandler={item => <Category {...item} />}
            />
            <button className="text-white bg-dark-navy rounded-[8rem] h-14 w-full font-bold md:text-lg hover:bg-gradient-to-b transition from-[#6943ff] to-[#2f2ce9]">Continue</button>
        </section>
    </main>
)