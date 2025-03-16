import "./home.css";

const TeamMemberCard = ({ memberData }: any) => {
  console.log(memberData);
  return (
    <div className="felx team-card-hover text-center rounded-[70px] hover:rounded-[70px] border-none  cursor-pointer  items-center justify-center w-[270px] overflow-hidden p-[20px]">
      <div
        className="teamMemberImage filter grayscale rounded-[70px] overflow-hidden"
        style={{ backgroundColor: memberData?.background_color }}
      >
        <img
          className=" w-full h-full rounded-[70px] "
          src={memberData.image}
          alt={memberData.full_name}
        />
      </div>
      <h2 className="text-center mt-[22px] text-black text-xl font-bold font-['Istok Web']">
        {memberData.full_name}
      </h2>
      <h3 className="text-center text-black text-sm font-normal mt-[5px] font-['Istok Web']">
        {memberData.job_title}
      </h3>
      <div className="flex items-center justify-center mt-[25px] gap-[25px] ">
        <div className="w-[39px] h-[39px] bg-white rounded-full flex items-center justify-center border border-[#624ce6]">
          <a href={`TwiterLink`} target="_blank" rel="noreferrer">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8553 3.741C14.8655 3.88313 14.8655 4.02529 14.8655 4.16741C14.8655 8.50241 11.566 13.4973 5.53553 13.4973C3.67766 13.4973 1.95178 12.9593 0.5 12.0253C0.763969 12.0557 1.01775 12.0659 1.29187 12.0659C2.82484 12.0659 4.23603 11.5481 5.36294 10.6649C3.92131 10.6344 2.71319 9.69025 2.29694 8.39075C2.5 8.42119 2.70303 8.4415 2.91625 8.4415C3.21066 8.4415 3.50509 8.40088 3.77919 8.32985C2.27666 8.02525 1.14972 6.70547 1.14972 5.11157V5.07097C1.58625 5.31463 2.09391 5.46691 2.63194 5.48719C1.74869 4.89835 1.17003 3.89329 1.17003 2.75622C1.17003 2.1471 1.33244 1.58872 1.61672 1.10141C3.23094 3.09125 5.65734 4.39072 8.37812 4.53288C8.32737 4.28922 8.29691 4.03544 8.29691 3.78163C8.29691 1.9745 9.75884 0.502441 11.5761 0.502441C12.5202 0.502441 13.373 0.898379 13.972 1.53797C14.7131 1.39585 15.4238 1.12172 16.0532 0.746098C15.8096 1.50754 15.2918 2.14713 14.6116 2.55319C15.2715 2.48216 15.9111 2.29938 16.4999 2.0456C16.0533 2.69532 15.4949 3.27397 14.8553 3.741Z"
                fill="#624DE7"
              />
            </svg>
          </a>
        </div>
        <div className="w-[39px] h-[39px] bg-white rounded-full flex items-center justify-center border border-[#2300ff]">
          <a href={`linkedInLink`} target="_blank" rel="noreferrer">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.63375 14.0002H0.73125V4.6533H3.63375V14.0002ZM2.18094 3.3783C1.25281 3.3783 0.5 2.60955 0.5 1.68143C0.5 1.23561 0.677098 0.80806 0.992335 0.492823C1.30757 0.177587 1.73513 0.000488281 2.18094 0.000488281C2.62675 0.000488281 3.0543 0.177587 3.36954 0.492823C3.68478 0.80806 3.86188 1.23561 3.86188 1.68143C3.86188 2.60955 3.10875 3.3783 2.18094 3.3783ZM14.4969 14.0002H11.6006V9.45018C11.6006 8.3658 11.5787 6.97518 10.0916 6.97518C8.5825 6.97518 8.35125 8.1533 8.35125 9.37205V14.0002H5.45188V4.6533H8.23562V5.9283H8.27625C8.66375 5.19393 9.61031 4.41893 11.0225 4.41893C13.96 4.41893 14.5 6.3533 14.5 8.8658V14.0002H14.4969Z"
                fill="#2400FF"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
