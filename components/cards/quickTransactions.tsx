import Link from 'next/link';
export default function QuickTransactions({ item, icon, route }) {
  return (
    <>
      <div className="flex 
    flex-col items-center justify-center no-underline border border-black w-fit m-2 px-2 py-1 rounded-md  hover:text-bermuda capitalize">
      <Link href={route}>
        <span className="text-center">{icon}</span>
        <div>{item}</div>
      </Link>
      </div>
    </>

  );
}
