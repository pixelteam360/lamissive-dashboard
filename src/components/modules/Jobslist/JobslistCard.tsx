import { MoveUpRight } from "lucide-react";
import salse from "../../../assets/images/Frame.png";
import Image from "next/image";

const JobslistCard = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {data?.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl p-4 space-y-4">
          <div className="flex justify-between gap-3 items-center">
            <div className="flex gap-3 items-center">
              <Image src={salse} alt="salse" width={90} height={90} />
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Need Plumber Service</h2>
                <p className="text-grayText">Spark Technology, Usa</p>
              </div>
            </div>
            <MoveUpRight />
          </div>

          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <p className="text-grayText text-sm">Salary Range</p>
              <p className="font-bold">
                <span className="text-xl">( $200-$300 )</span>/month
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-grayText text-sm">Job Candidate</p>
              <p className="text-xl font-bold">1200+</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobslistCard;
