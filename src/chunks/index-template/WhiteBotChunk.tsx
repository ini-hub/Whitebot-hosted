import {
  IM_ProductWhiteBot,
  IM_WhiteBotConnectivityIllustration,
} from "../../assets/images/images.index";

export default function WhiteBotChunk() {
  return (
    <section
      className="pt-20 pb-20 md:pb-0 bg-black"
      // style={{ background: "linear-gradient(black 55%, #FCF9FF 55%)" }}
    >
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-y-8">
          <div>
            <p className="text-app-yellow text-xl mb-1.5">Introducing</p>
            <h3 className="text-4xl text-white font-bold">White Bot</h3>
          </div>

          <div>
            <img
              src={IM_WhiteBotConnectivityIllustration}
              className="h-[30px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-2 items-center">
          <div className="text-white">
            <h5 className="font-semibold text-2xl">Features</h5>
            <ul className="list-disc pl-5 mt-5 grid gap-3 grid-cols-2 md:grid-cols-1">
              <li>Object Detection</li>
              <li>Image Recognition</li>
              <li>Feedback module to alert users</li>
              <li>Send SOS with real-time location</li>
              <li>Bluetooth Connectivity</li>
              <li>Internet Connectivity</li>
              <li>Offline & Online mode</li>
              <li>Solar Panelled</li>
              <li>Light and easy to operate</li>
            </ul>
          </div>
          <img src={IM_ProductWhiteBot} className="w-full" />
        </div>
      </div>
    </section>
  );
}
