import Image from "next/image";

export default () => (
    <main>
        <section>
            <p>Your Result</p>
            <div>
                <p>76</p>
                <p>of 100</p>
            </div>
            <p>Great</p>
            <p>Your performance exceed 65% of the peaople conducting the test here!</p>
        </section>
        <section>
            <p>Summary</p>
            <ul>
                <li>
                    <Image src="/icon-reaction.svg" width="20" height="20" />
                    <p>Reaction</p>
                    <p>80 / 100</p>
                </li>
            </ul>
        </section>
        <button>Continue</button>
    </main>
  
  
)