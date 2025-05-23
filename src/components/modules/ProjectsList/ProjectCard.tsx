import { AlarmClock, MoveUpRight } from "lucide-react";

const ProjectCard = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {data?.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl p-4 space-y-4">
          <div className="flex justify-between gap-3">
            <div className="space-y-3">
              <h2 className="text-xl font-medium">Need Plumber Service</h2>
              <div className="flex gap-5 text-sm">
                <p>Plumber</p>
                <p>Home</p>
                <p>Service</p>
              </div>
            </div>

            <div className="inline-block">
              <div className="bg-primary p-3 rounded-xl text-white">
                <MoveUpRight />
              </div>
            </div>
          </div>

          <p className="text-grayText">
            The Healthy mobile app project focuses on designing a user-friendly
            platform that encourages and...{" "}
            <span className="text-black">Read more</span>
          </p>
          <p className="flex gap-3 items-center">
            {" "}
            <AlarmClock /> Tomorrow, 09.00 am - 03.00 pm
          </p>

          <h3 className="text-grayText text-lg font-medium">
            Assigned To : Dimake087{" "}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
