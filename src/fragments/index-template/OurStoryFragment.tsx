import BaseButton from "../../components/buttons/BaseButton";

export type OurStoryFragmentProps = {
  onClose: VoidFunction;
};

export default function OurStoryFragment(props: OurStoryFragmentProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-10 h-screen overflow-auto bg-black bg-opacity-50 grid place-items-center py-10">
      <div className="bg-white w-11/12 p-10 rounded-xl max-w-screen-lg">
        <h3 className="text-2xl font-bold">Our Story</h3>
        <p className="text-sm my-4 leading-6">
          This innovative idea came about during a Training Bootcamp I enrolled
          in while in the University late 2020. At the end of the program a
          project was assigned relating to the use of object detection
          technologies. My Dad always told me to observe people's needs and
          offer value in that area. I began to research on the visually impaired
          and how an object detection device would improve the livelihood of the
          visually impaired in my immediate environment, and by extension the
          nation as a whole. I came across a report from 2020 by the National
          Association of the Blind (NAB), they expressed a claim for an
          accessible & safe Nigeria with better roads & safe buildings. They
          also mentioned the untoward behaviors meted out by some Nigerians to
          the blind. This report drove my purpose in attending to this challenge
          with a creative solution
        </p>
        <p className="text-sm my-4 leading-6">
          In the following years, a prototype I created was exhibited during the
          Babcock University Computer Club (BUCC) Software Exhibition, the ALAT
          Hackaholic 3.0 at Babcock University. It was also submitted as a
          course work in my final year with various approval.
        </p>
        <p className="text-sm my-4 leading-6">
          Over time, a goal-driven team inspired to achieve this value has been
          growing, and this product has been iterated severally based on user
          feedback and analysis carried out to improve the user experience.
        </p>
        <p className="text-sm my-4 leading-6">
          In 2023, it was registered as a company named Walk IT Enterprise with
          the Corporate Affairs Commission (CAC) to legalize all activities
          being carried out. We also entered into partnership with the Joint
          National Association of Persons with Disability (JONAPWD).
        </p>
        <p className="text-sm my-4 leading-6">
          Today, we are continually working on new and innovative ways to
          improve our products and services for our clients. Our team is
          passionate about what we do and are dedicated to delivering the best
          solutions to meet the needs of the visually impaired worldwide.
        </p>
        <div className="flex justify-end">
          <BaseButton onClick={props.onClose}>Close</BaseButton>
        </div>
      </div>
    </div>
  );
}
