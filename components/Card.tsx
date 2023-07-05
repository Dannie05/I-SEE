
export default function Card({icon,title}) {
    return (
        <button
        className='flex flex-col no-underline border border-black w-fit m-2 p-1 rounded-md  hover:bg-metal dark:text-white dark:hover:text-white hover:text-white ' type={'button'}><span>{icon}</span> {title}
        </button>
    )
}

