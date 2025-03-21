import { Card } from '../../components/card/card.component.tsx';

export const HomePage = () => {
  return (
    <div className="container wip">
      <Card
        imageUrl={'/article/1-20.24-20.03.2025/img/mudassir-zaheer-HWr6aNcGOTc-unsplash.jpg'}
        title="Site under construction"
        description="This is going to be a website about my life and experience in techology. I'm starting a new episode in my life as a self-employed frontend developer, currently searching for new projects. In the meantime, I'm building this website, so wish me luck! 😄"
        time={String(new Date().toLocaleDateString('en-US'))}
      />
    </div>
  );
};
