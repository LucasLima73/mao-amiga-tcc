import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
    <html>
      <body>
        <div className=''>
            <p>The Above Url Cannot Found</p>
            <Link href="/dashboards/sales" className='btn btn-primary'>Return Home</Link>
        </div>
      </body>
    </html>
    </>
  )
}