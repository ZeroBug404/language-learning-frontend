import { Collapse } from "antd";
import Image from "next/image";
import { useState } from "react";
import profile from "../../assets/profile.jpg";

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex gap-[1px] my-7">
        <button
          onClick={() => handleTabClick(0)}
          className={`px-20 py-3 font-semibold text-gray-800 ${
            activeTab === 0 ? "bg-white" : "bg-gray-200"
          } ${activeTab === 0 ? "border-t-4 border-pink-500" : ""}`}
        >
          Overview
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`px-20 py-3 font-semibold text-gray-800 ${
            activeTab === 1 ? "bg-white" : "bg-gray-200"
          } ${activeTab === 1 ? "border-t-4 border-pink-500" : ""}`}
        >
          Curriculum
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-20 py-3 font-semibold text-gray-800 ${
            activeTab === 2 ? "bg-white" : "bg-gray-200"
          } ${activeTab === 2 ? "border-t-4 border-pink-500" : ""}`}
        >
          Instructor
        </button>
      </div>

      {/* Content for each tab */}
      {activeTab === 0 && (
        <div>
          <p
            className="text-base "
            style={{
              color: "#3f3575",
            }}
          >
            You learn in small groups and benefit from 15 hours per week.
          </p>
          <h4
            style={{
              color: "#301a52",
              fontSize: "28px",
              fontWeight: "bold",
              lineHeight: "32px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Course description
          </h4>
          <p
            className="text-base"
            style={{
              color: "#3f3575",
            }}
          >
            If you are a newbie to managing a WordPress website, then
            congratulations! You are here at the right track with us because we
            are going to introduce you one of the most basic knowledge when
            owning a WordPress page: how to find your site the best WordPress
            Hosting service. This process is often overlooked by most of the
            website owners. But it can be considered the most important key
            point to bring your site to stand out of the crowd. A great hosting
            service could help you to improve SEO and increase sales as well.
          </p>
          <h4
            style={{
              color: "#301a52",
              fontSize: "28px",
              fontWeight: "bold",
              lineHeight: "32px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Learning outcomes
          </h4>
          <div className="ml-4">
            <ul style={{ listStyleType: "disc" }}>
              <li
                style={{
                  color: "#3f3575",
                }}
                className="text-base mb-2"
              >
                Over 37 lectures and 55.5 hours of content!
              </li>
              <li
                style={{
                  color: "#3f3575",
                }}
                className="text-base mb-2"
              >
                LIVE PROJECT End to End Software Testing Training Included.
              </li>
              <li
                style={{
                  color: "#3f3575",
                }}
                className="text-base mb-2"
              >
                Learn Software Testing and Automation basics from a professional
                trainer from your own desk.
              </li>
              <li
                style={{
                  color: "#3f3575",
                }}
                className="text-base mb-2"
              >
                Information packed practical training starting from basics to
                advanced testing techniques.
              </li>
              <li
                style={{
                  color: "#3f3575",
                }}
                className="text-base mb-2"
              >
                Best suitable for beginners to advanced level users and those
                who learn faster when demonstrated.
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div>
          <div>
            <Collapse
              items={[
                {
                  key: "1",
                  label: "SECTION 1",
                  children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sed animi incidunt molestiae eligendi perspiciatis?</p>,
                },
                {
                  key: "2",
                  label: "SECTION 2",
                  children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sed animi incidunt molestiae eligendi perspiciatis?</p>,
                },
              ]}
            />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <div className="flex items-center gap-3">
              <Image
                src={profile}
                // alt={singleCourse?.title}
                alt='profile'
                width={50}
                height={50}
                style={{ borderRadius: "100%" }}
              />
              <div>
                <h4>Instructor</h4>
                <h2 className="font-semibold text-lg">
                  {/* {singleCourse?.data?.instructor?.name} */}
                </h2>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default TabbedInterface;
