import { AiTwotonePhone } from "react-icons/ai"

const Head = () => {
    return (
        <>
            <section className="head bg-violet font-Amatic text-2xl px-8">
                <div className="container d_flex flex justify-between gap-6">
                    <div className="left row flex flex-row">
                        <AiTwotonePhone className='mr-3' />
                        <label>+57 numero</label>
                    </div>
                    <div className='flex gap-7'>
                        <label>Theme  FQA</label>
                        <label>Need Helps</label>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Head