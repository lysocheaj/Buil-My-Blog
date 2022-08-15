import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sochea.jpg"
          alt="An image of me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I'm Sochea</h1>
      <p>
        {/* My blog is about Web Development. Especially the basics of React and
        NextJs. */}
        នេះជាប្លុករបស់ខ្ញុំដែលចែករំលែកចំណេះដឹងអំពី​ ​Web Development ។ ជាពិសេស មូលដ្ឋានគ្រឹះនៃ​ React
        និង NextJs ។
      </p>
    </section>
  );
}

export default Hero;
