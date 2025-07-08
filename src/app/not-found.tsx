import './not-found.style.css'
import Link from 'next/link';
import { MdError } from 'react-icons/md';
export default function notFound() {

  return (
    <div className='center-page'>
      <div className='error-box'>
        <MdError className="error-box-icon" />
        <h2>TS404: Not found</h2>
        <pre>
        <p><span className='bold'>File not found: </span>The requested URL does not exist in the project</p>
        <p>Possible reasons:</p>
        <ul>
          <li>The path is incorrect or misspelled.</li>
          <li>The file has been moved or deleted.</li>
          <li>The page never existed.</li>
        </ul>
        <p>Try one of the following:</p>
        <ul>
          <li><Link href='/'>Go back to the homepage</Link></li>
          <li><Link href='mailto: dboczkow@gmail.com'>If you believe this is a bug, please contact the site administrator.</Link></li>
        </ul>
      </pre>
      </div>
    </div>
  )
}