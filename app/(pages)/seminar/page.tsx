import Banner from 'app/(pages)/findcoach/Banner';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import GroupFilter from '~/components/widgets/GroupFilter';

export default function FindCoach() {
  const title = 'Start your training now with one of the top coaches.';
  const desc =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus in quaerat et similique non ab neque aliquid cupiditate sequi culpa amet iste debitis fuga tenetur, repellat reiciendis distinctio eos! Fugiat!';
  return (
    <>
      <Header />
      <Banner title={title} desc={desc} />
      <GroupFilter/>
      <Footer />
    </> 
  );
}
