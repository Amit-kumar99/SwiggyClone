import profile_pic from "../../../images/profile_pic.jpg";

const About = () => {
  return (
    <div className="w-10/12 m-auto mt-5 text-xl">
      <div className="flex">
        <div>
          <img
            src={profile_pic}
            className="w-[100px] h-[100px] rounded-full mr-10"
            alt="profile-image"
          />
        </div>
        <div className="mt-2">
          <div className="mb-2">
            Hello. I'm Amit Kumar, the developer for this app.
          </div>
          <div>
            You can reach out to me on
            <a href="mailto:amit.kumar.16208932@gmail.com" target="_blank" className="font-semibold ml-1">amit.kumar.16208932@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
