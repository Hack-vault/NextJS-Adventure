export default function page(){
    return(
        <div className="flex flex-col items-center gap-16 w-full">
            <h2 className="text-4xl md:text-5xl font-bold">Create a post</h2>
            <form action="" className="flex flex-col items-center gap-6 w-full max-w-3xl">
                <input type="text" placeholder="Title" className="w-full border rounded-md px-2 py-2.5" />
                <textarea placeholder="Body" className="w-full h-36 border rounded-md px-2 py-2.5 ring-none" />
                <button className="w-full px-6 py-2 bg-black rounded-md text-white   ">Create post</button>
            </form>
        </div>
    )
} 