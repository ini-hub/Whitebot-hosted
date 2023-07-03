import BaseButton from "../../components/buttons/BaseButton";

export type FAQFragmentProps = {
  onClose: VoidFunction;
};

export default function FAQFragment(props: FAQFragmentProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-10 h-screen overflow-auto bg-black bg-opacity-50 grid place-items-center">
      <div className="bg-white w-11/12 p-10 rounded-xl max-w-screen-lg">
        <h3 className="text-2xl font-bold">FAQs</h3>

        <p className="text-sm my-4 leading-6">
          <b>Q:</b> Does the device make use of SIM for the emergency module?
          <br />
          <b>A: </b> Yes, the device makes use of a GSM module to perform the
          location-tracking feature.
        </p>

        <p className="text-sm my-4 leading-6">
          <b>Q: </b> Can the device detect pit holes, unleveled roads, wide
          gutters etc.
          <br />
          <b>A: </b> Yes, This product considers the real challenges they face
          based on data gotten from user feedback. The aim is to supplement the
          functionality of a white cane and not replace it.
        </p>

        <p className="text-sm my-4 leading-6">
          <b>Q: </b> Who are your target audience and what class (Rich, Average,
          Poor, Helpless) of persons is this project on?
          <br />
          <b>A:</b> Our target market is the visually impaired and is price
          inclusive for every class.
        </p>

        <p className="text-sm my-4 leading-6">
          <b>Q:</b> Is there a particular way for the users to wear the device?
          <br />
          <b>A: </b>There would be a strap on the back, but besides that it will
          be customizable to meet the users need i.eUsers can decide to have it
          as a strap on their cane / chest, or for it to be worn as a belt etc.
        </p>

        <p className="text-sm my-4 leading-6">
          <b>Q: </b>Can the device connect to other smart objects?
          <br />
          <b>A: </b> The current prototype cannot connect to other smart object,
          the end goal of this device is to behave like an automated vehicle
          that can sense its environment and connect with other smart devices to
          promote the passage and entry of information to and from the device.
        </p>

        <div className="flex justify-end">
          <BaseButton onClick={props.onClose}>Close</BaseButton>
        </div>
      </div>
    </div>
  );
}
