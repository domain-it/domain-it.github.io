import './page.style.css';
import Image from 'next/image';

export default function aboutMePage() {
  return (
    <div className="about-me-page">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <Image
          className="about-me-image"
          src={'/me.jpg'}
          alt={'My picture'}
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="about-me-1p">
          <h2>Hi, I'm Dominik!</h2>
        </div>
      </div>
      <p>
        Glad you dropped by. If you want to learn anything about Frontend,
        technology, a bit more about your hobby, or if you're a recruiter
        looking to find out more about me, my ideas, beliefs, and knowledge,
        then you've come to the right place!
      </p>
      <div>
        <p>
          My adventure with Frontend began back in middle school, the moment I
          became fascinated with writing code. My first struggles were small
          scripts written in Batch (a chat between computers in the classroom to
          communicate during lessons, a small "virus" that launched a duplicate
          of itself in a loop, automating certain things on the computer). In
          technical high school, I got to know HTML and, as a result, other
          languages useful in web development. I worked for a short time at an
          advertising agency, editing their website and creating a new one to
          sell a product. The work there didn't necessarily help me grow. It was
          discovering at home that allowed me to get to know this world better.
          Now, I use Linux (I use Arch, btw!), set up servers in my home-lab,
          create home automation for myself and my family, write websites (like
          this blog), and take care of my dog.
        </p>
        <span className={'dog-name'}>
          <a> Cheers, Tequila</a>! 🍻
          <div className="about-me-tooltip-dog">
            <Image
              src={'/dog.jpg'}
              alt={'My dog'}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </span>
      </div>
      <p>
        Seeing what's happening in the IT world, I often want to share my
        thoughts — both the positive and the negative. Reddit, Facebook, X
        (formerly Twitter), Mastodon don't always allow for the complete freedom
        to express what I want to say. At least not directly. But I believe my
        musings will allow you to broaden your horizons, not just in terms of
        knowledge but also in perspective. You might agree with me or not, but
        it's the confrontation of views that makes us better people.
      </p>
      <p>
        With 16 years of experimenting with computers and 4 years of commercial
        code-bashing under my belt, I think you can trust me when reading this
        blog.
      </p>
    </div>
  );
}
