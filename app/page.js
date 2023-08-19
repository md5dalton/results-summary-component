import UList from "@/components/UList"
import data from "./data.json"
import Category from "./Category"

export default () => (
    <main>
        <section className="text-center bg-gradient-to-b from-[#6943ff] to-[#2f2ce9]">
            <p>Your Result</p>
            <div className="rounded-full bg-gradient-to-b from-[#4d21c9]">
                <p>76</p>
                <p>of 100</p>
            </div>
            <p>Great</p>
            <p>Your performance exceed 65% of the peaople conducting the test here!</p>
        </section>
        <section>
            <p>Summary</p>
            <UList
                items={data}
                itemHandler={item => <Category {...item} />}
            />
        </section>
        <button>Continue</button>
    </main>
  
  
)