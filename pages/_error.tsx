import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className='dark:bg-black  bg-silver p-6' style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
        <p className="text-center dark:text-tahiti text-black text-6xl">
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
        <p className='mt-5 text-4xl'>
            <Link href={process.env.NEXT_PUBLIC_APP_URL}>
                Back to home
            </Link>
        </p>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error

